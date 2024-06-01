"use client";
import { useEffect } from "react";
type DictType = Record<string, string>;
const FlightSearchMiddle = ({ dict }: { dict: DictType }) => {
  useEffect(() => {
    console.log("Merhaba", dict);
  }, [dict]);

  return (
    <div>
      <h1>{dict.query_title}</h1>
      <h2>Nereyi Keşfetmek İstersiniz?</h2>
    </div>
  );
};

export default FlightSearchMiddle;
