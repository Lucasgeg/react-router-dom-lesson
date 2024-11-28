import { useEffect } from "react";
import { useState } from "react";

type useFetchProps = {
  url: string;
};

export const useFetch = <T>({ url }: useFetchProps) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const datajson = await fetch(url);
        if (!datajson.ok) throw new Error("Network response was not ok");

        const data = (await datajson.json()) as T;

        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
