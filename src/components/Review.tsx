import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "@/api/connection";
import { ReviewData } from "@/utilities/interfaces";
import DetailsElement from "./DetailsElement";

const Review = () => {
  const { moviesId } = useParams();
  const [review, setReview] = useState<ReviewData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovieReview = async () => {
      try {
        const data = await fetchMovieReview(moviesId as string);
        if (!data) {
          setReview(null);
        } else {
          setReview(data);
        }
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReview();
  }, [moviesId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!review) {
    return (
      <div className="pl-10 mt-10">
        <DetailsElement
          title={"Review"}
          text={"We don't have any reviews for this movie."}
        />
      </div>
    );
  }

  return (
    <div className="pl-10 mt-10">
      <DetailsElement
        title={"Review"}
        text={review.content}
        author={review.author}
      />
    </div>
  );
};

export default Review;
