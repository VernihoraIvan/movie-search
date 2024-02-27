import WishlistTVsSection from "@/components/WishListTVsSection";
import WishlistMoviesSection from "@/components/WishlistMoviesSection";

const WishlistPage = () => {
  return (
    <div className="px-5 py-5">
      <WishlistMoviesSection />
      <WishlistTVsSection />
    </div>
  );
};

export default WishlistPage;
