import * as functions from 'firebase-functions';
import fs from 'fs';
let config = functions.config().config;
if (fs.existsSync('./config.json')) {
  const json = fs.readFileSync('./config.json', {
    encoding: 'utf8',
    flag: 'r'
  });
  config = JSON.parse(json);
}

export { config };
