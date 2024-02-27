import Searchbar from "@/components/Searchbar";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";

import { useState, useCallback, useEffect } from "react";
import { fetchMovieByQuery } from "@/api/connection";
import { MovieData } from "@/utilities/interfaces";
import TrendsList from "@/components/TrendsList";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<MovieData[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const { movieId } = useParams();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearchSubmit = useCallback(
    async (query: string) => {
      try {
        // setIsLoading(true);
        const results = await fetchMovieByQuery(query);
        setSearchQuery(results);
        searchParams.set("query", query);
        navigate(`/movies?${searchParams.toString()}`);
        // setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setSearchQuery([]);
      }
    },
    [navigate, searchParams]
  );

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieId) return;
      try {
        const results = await fetchMovieByQuery(movieId);
        setSearchQuery(results);
      } catch (error) {
        console.log("error", error);
        setSearchQuery([]);
      }
    };
    fetchMovies();
  }, [movieId]);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearchSubmit(query);
    }
  }, [searchParams, handleSearchSubmit]);

  return (
    <div className="px-5 py-5">
      <Searchbar onSubmit={handleSearchSubmit} />
      <TrendsList list={searchQuery} />
    </div>
  );
};

export default SearchPage;
