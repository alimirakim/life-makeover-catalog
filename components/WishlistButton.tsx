import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function WishlistButton() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <button onClick={() => setIsWishlisted(!isWishlisted)}>
      {isWishlisted ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
