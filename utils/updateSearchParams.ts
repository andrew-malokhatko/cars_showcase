export const updateSearchParams = (type: string, value: string) =>{

    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.toString());
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    
    
    return newPathname;
}