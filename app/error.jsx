"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <a onClick={() => reset()} className="py-1 px-2 bg-yellow-300">
        Try again
      </a>
    </div>
  );
}
