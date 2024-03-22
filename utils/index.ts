import { fetchcars} from "./fetchCars";
import { calculateCarRent } from "./calculateCarRent";
import { generateCarImageUrl } from "./generateCarImageUrl";
import { updateSearchParams } from "./updateSearchParams";

export interface FilterProps {
  manufacturer: string,
  year: number,
  fuel: string,
  model: string,
  limit: number
}


export{
  fetchcars,
  calculateCarRent,
  generateCarImageUrl,
  updateSearchParams
}