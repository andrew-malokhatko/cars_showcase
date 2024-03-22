import { CarProps } from "@/components/CarCard";

/*export const generateCarImageUrl= (car: CarProps, angle?: string ) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const {make, model, year} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split("hrjavascript-mastery")[1]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${0}`);
    console.log(`${url}`)
    
    return `${url}`;
}
*/

export const generateCarImageUrl = (car: CarProps, angel?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    angel && url.searchParams.append('angle', `${angel}`);
  
    return `${url}`;
  } 