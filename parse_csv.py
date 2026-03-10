import csv
import json
from pathlib import Path

csv_path = Path("static/data/stories.csv")
json_path = Path("src/data/stories.json")
json_path.parent.mkdir(parents=True, exist_ok=True)

stories = []
with open(csv_path, "r", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        stories.append(row)

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(stories, f, ensure_ascii=False, indent=2)

print(f"Successfully converted {len(stories)} stories to {json_path}")
