import Searchbar from "@/components/Searchbar";
import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "@/api/connection";
import { MovieData } from "@/utilities/interfaces";
import SearchList from "@/components/SearchList";
import LoadMoreBtn from "@/components/LoadMoreBtn";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader } from "@/components/Loader";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<MovieData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isBtnShown, setIsPresent] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearchOnChange = async (param: string) => {
    setSearchQuery([]);
    setQuery(param);
    searchParams.set("query", param);
    navigate(`/search?${searchParams.toString()}`);
  };

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const fetchSearch = async () => {
      try {
        setIsLoading(true);
        const results = await fetchMovieByQuery(query, page);
        setSearchQuery((prev) => [...prev, ...results]);
        const next = await fetchMovieByQuery(query, page + 1);
        if (next.length > 0) {
          setIsPresent(true);
        } else {
          setIsPresent(false);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearch();
  }, [query, page, searchParams]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="px-5 py-5 wallpaper mt-headerM">
      <Searchbar onChange={handleSearchOnChange} />
      {searchQuery.length > 0 && <SearchList list={searchQuery} />}
      {isBtnShown && <LoadMoreBtn page={page} setPage={setPage} />}
    </div>
  );
};

export default SearchPage;
