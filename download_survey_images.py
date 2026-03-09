import os
import re
import urllib.parse
from pathlib import Path

try:
    import requests
except ImportError:
    print("Requests not installed")
    exit(1)

docs_dir = Path(r"c:\Users\pc\Documents\GitHub\sac.ymhc.ngo\sac\docs\survey")
img_dir = Path(r"c:\Users\pc\Documents\GitHub\sac.ymhc.ngo\sac\static\img\survey")

img_dir.mkdir(parents=True, exist_ok=True)

def download_image(url):
    filename = url.split('/')[-1]
    filename = urllib.parse.unquote(filename)
    filepath = img_dir / filename
    if not filepath.exists():
        try:
            print(f"Downloading {url}...")
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
            response = requests.get(url, headers=headers, timeout=15)
            response.raise_for_status()
            with open(filepath, 'wb') as out_file:
                out_file.write(response.content)
            print(f"Successfully downloaded {filename}")
        except Exception as e:
            print(f"Failed to download {url}: {e}")
    else:
        print(f"Already exists: {filename}")
    return f"/img/survey/{filename}"

for md_file in docs_dir.glob("*.md"):
    with open(md_file, "r", encoding="utf-8") as f:
        content = f.read()
        
    old_content = content

    def repl_hyperlink(match):
        alt = match.group(1)
        img_url = match.group(2)
        local_url = download_image(img_url)
        return f"![{alt}]({local_url})"
        
    content = re.sub(r'\[!\[(.*?)\]\((https://sac\.ymhc\.ngo/wp-content/uploads/[^)]+)\)\]\([^)]+\)', repl_hyperlink, content)
    
    def repl_plain(match):
        alt = match.group(1)
        img_url = match.group(2)
        local_url = download_image(img_url)
        return f"![{alt}]({local_url})"

    content = re.sub(r'!\[(.*?)\]\((https://sac\.ymhc\.ngo/wp-content/uploads/[^)]+)\)', repl_plain, content)

    if content != old_content:
        with open(md_file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {md_file.name}")

print("Done!")
