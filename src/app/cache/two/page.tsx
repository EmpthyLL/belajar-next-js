"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Two() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    setRandomNumber(Math.floor((Math.random() * (1000 - 100)) + 100));
  }, []);

  return (
    <div>
      <p>{randomNumber}</p>
      <Link href="/cache/one">One</Link>
    </div>
  );
}
