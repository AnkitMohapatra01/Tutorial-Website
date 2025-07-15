import { useEffect, useState, useTransition } from "react";
import { getCountries } from "../Api/postApi";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountries();
      console.log(res);
      setCountries(res.data);
    });
  }, []);
  console.log(search, filter);

  if (isPending) return <h1>Loading...</h1>;
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };
  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((currCountry, index) => {
          return <CountryCard Country={currCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
