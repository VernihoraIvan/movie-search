import Searchbar from "@/components/Searchbar";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useState, useCallback, useEffect } from "react";
import { fetchMovieByQuery } from "@/api/connection";
import { MovieData } from "@/utilities/interfaces";
import SearchList from "@/components/SearchList";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<MovieData[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSearchOnChange = useCallback(
    async (query: string) => {
      if (!query) {
        setSearchQuery([]);
        return;
      }
      try {
        // setIsLoading(true);
        searchParams.set("query", query);
        navigate(`/search?${searchParams.toString()}`);
        const results = await fetchMovieByQuery(query);
        setSearchQuery(results);

        // setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setSearchQuery([]);
      }
    },
    [navigate, searchParams]
  );

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearchOnChange(query);
    } else {
      setSearchQuery([]);
    }
  }, [searchParams, handleSearchOnChange]);

  return (
    <div className="px-5 py-5 wallpaper mt-headerM">
      <Searchbar onChange={handleSearchOnChange} />
      {searchQuery.length > 0 && <SearchList list={searchQuery} />}
    </div>
  );
};

export default SearchPage;
