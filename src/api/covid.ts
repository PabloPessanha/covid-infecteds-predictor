import axios from 'axios';
import { CovidDataResponse } from './covid.d';

export default async function getCovidData(): Promise<CovidDataResponse> {
  const { data: convidInfos } = await axios.get(
    'https://covid.ourworldindata.org/data/owid-covid-data.json',
  );
  return convidInfos.OWID_WRL;
}
