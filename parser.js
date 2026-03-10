const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('static/data/stories.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const lines = [];
  for await (const line of rl) {
    lines.push(line);
  }

  const result = [];
  const CsvRe = /("((?:""|[^"])*)"|[^",]+)/g;

  for(let i = 1; i < lines.length; i++) {
    const l = lines[i];
    if(!l.trim()) continue;

    const matches = l.match(CsvRe);
    if(matches && matches.length >= 4) {
      result.push({
        id: matches[0].replace(/^"|"$/g, ''),
        Title: matches[1].replace(/^"|"$/g, ''),
        Content: matches[2].replace(/^"|"$/g, '').replace(/""/g, '"'),
        Categories: matches[3].replace(/^"|"$/g, ''),
      });
    } else {
        // Handle multiline CSV where content spans multiple lines
        // This is a naive parser. For full multiline CSV, we need a better state machine.
    }
  }

  fs.mkdirSync('src/data', { recursive: true });
  fs.writeFileSync('src/data/stories.json', JSON.stringify(result, null, 2));
  console.log('Saved ' + result.length + ' stories.');
}

processLineByLine();
