import path from 'path';
import fs from 'fs';

export default () => {
  const file = path.resolve(__dirname, '..', 'data', 'worldwide-infected.json');
  return JSON.parse(fs.readFileSync(file).toString());
};
