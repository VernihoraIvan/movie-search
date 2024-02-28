import { fetchTVSeries } from "@/api/connection";
import TVSeriesList from "@/components/TVSeriesList";
import { TVData } from "@/utilities/interfaces";
import { useEffect, useState } from "react";

const TVSeriesPage = () => {
  const [tv, setTVs] = useState<TVData[]>([]);
  useEffect(() => {
    const getTVs = async () => {
      try {
        const data = await fetchTVSeries();
        setTVs(data);
      } catch (error) {
        console.log("error", error);

        setTVs([]);
      }
    };
    getTVs();
  }, []);
  return (
    <div className="px-5 py-5">
      <TVSeriesList tv={tv} />
    </div>
  );
};

export default TVSeriesPage;
