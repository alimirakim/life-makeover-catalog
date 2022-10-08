import { useState } from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";

export default function LockButton() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <button onClick={() => setIsUnlocked(!isUnlocked)}>
      {isUnlocked ? <FaLockOpen /> : <FaLock />}
    </button>
  );
}
