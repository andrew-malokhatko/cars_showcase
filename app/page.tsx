import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fetchcars, FilterProps } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({searchParams}: {searchParams: FilterProps}) {
  const allCars = await fetchcars({
    manufacturer: searchParams.manufacturer || '' ,
    year: searchParams.year || 2022 ,
    fuel: searchParams.fuel || '' ,
    model: searchParams.model || '' ,
    limit: searchParams.limit || 12
  });
  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p className="text-xl">Endless Options, One Destination. Find the car that perfectly aligns with your needs and desires. CarHub — From Dreams to Driveways</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            
            <ShowMore pageNumber={(searchParams.limit || 12) / 12}
              isNext={(searchParams.limit || 12) > allCars.length} />
          </> 
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no cars were found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
