export interface CovidDetailsData {
  date: string,
  total_cases: number,
  new_cases: number;
  total_deaths: number,
}

export interface CovidDataResponse {
  location: string;
  population: number;
  data: CovidDetailsData[];
}
