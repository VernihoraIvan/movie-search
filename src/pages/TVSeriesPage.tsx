import { fetchTVSeries } from "@/api/connection";
import { Loader } from "@/components/Loader";
import TVSeriesList from "@/components/TVSeriesList";
import { TVData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";

const TVSeriesPage = () => {
  const [tv, setTVs] = useState<TVData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const getTVs = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTVSeries();
        setTVs(data);
      } catch (error) {
        console.log("error", error);
        setTVs([]);
      } finally {
        setIsLoading(false);
      }
    };
    getTVs();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-headerM px-5 py-5 wallpaper">
      <TVSeriesList tv={tv} />
    </div>
  );
};

export default TVSeriesPage;
