import fs from 'fs';
import { resolve } from 'path';
import getCovidData from '../data/api/covid';

export async function formatCovidData() {
  const { data } = await getCovidData();
  return data.map(({ new_cases }, index) => ({
    x: index + 1,
    y: new_cases,
  }));
}

export async function updateLocalData() {
  const worldwideFile = resolve(__dirname, '..', '..', 'worldwide-infected.json');
  const data = await formatCovidData();
  fs.writeFileSync(worldwideFile, JSON.stringify(data));
}

export function updateEveryDay() {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  setInterval(() => {
    updateLocalData();
  }, day);
}
