import axios from "axios";
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountries = async () => {
  try {
    return await api.get("/all?fields=name,population,region,capital,flags");
  } catch (error) {
    console.log(error);
  }
};
export const getIndvCountries = async (name) => {
  try {
    return await api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,tld,currencies,language,borders,capital,flags`);
  } catch (error) {
    console.log(error);
  }
};
