export default function WishlistButton() {
  const isWishlisted = true;
  const setIsWishlisted = (isWishlisted: boolean) => false;

  return (
    <button onClick={() => setIsWishlisted(!isWishlisted)}>
      {isWishlisted ? "Wishlisted" : "Add to wishlist"}
    </button>
  );
}
