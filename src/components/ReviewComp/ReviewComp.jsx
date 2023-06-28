import { fetchMovieReview } from 'api/themoviedb';
import DetailsEl from 'components/DetailsEl/DetailsEl';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { moviesId } = useParams();
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovieReview = async () => {
      try {
        const data = await fetchMovieReview(moviesId);
        setReview(data.results[0]);
        return data;
      } catch (error) {
        window.alert(error);
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
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <DetailsEl title={'Review'} text={review.content} />
    </div>
  );
};

export default Review;
