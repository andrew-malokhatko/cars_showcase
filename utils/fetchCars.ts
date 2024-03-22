import { FilterProps } from ".";

export async function fetchcars(filters: FilterProps){
    const {manufacturer, year, model, limit, fuel} = filters;

    const headers = {
        'X-RapidAPI-Key': '0783832385mshdff59d154366d31p1bda59jsn507f4ffcaefb',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

      const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;
      const response = await fetch(url, {
        headers: headers,
      });

      const result = await response.json();

      return result
}