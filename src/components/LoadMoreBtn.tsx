type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const LoadMoreBtn = ({ setPage, page }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        className="my-5 bg-gray-800 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 rounded"
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
