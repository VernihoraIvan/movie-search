import WishlistTVsSection from "@/components/WishListTVsSection";
import WishlistMoviesSection from "@/components/WishlistMoviesSection";

const WishlistPage = () => {
  return (
    <div className="mt-headerM px-5 py-5 wallpaper">
      <WishlistMoviesSection />
      <WishlistTVsSection />
    </div>
  );
};

export default WishlistPage;
