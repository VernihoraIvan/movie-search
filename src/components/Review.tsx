import { fetchMovieReview } from "@/api/connection";
import DetailsElement from "./DetailsElement";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewData } from "@/utilities/interfaces";

const Review = () => {
  const { moviesId } = useParams();
  const [review, setReview] = useState<ReviewData | null>(null);
  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const getMovieReview = async () => {
      try {
        const data = await fetchMovieReview(moviesId as string);
        setReview(data);
        return data;
      } catch (error) {
        window.alert(error);
      } finally {
        // setIsLoading(false);
      }
    };
    getMovieReview();
  }, [moviesId]);

  //   if (isLoading) {
  //     return <Loader />;
  //   }

  if (!review) {
    return (
      <div>
        <DetailsElement
          title={"Review"}
          text={"We don't have any reviews for this movie."}
        />
      </div>
    );
  }

  return (
    <div>
      <DetailsElement
        title={"Review"}
        text={review.content}
        author={review.author}
      />
    </div>
  );
};

export default Review;