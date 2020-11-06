import { useEffect, useState } from "react";

function useFetchWord(word) {
  const [data, setData] = useState("");

  const url = `data/words/${word}.json`;

  useEffect(() => {
    fetch(url).then((res) => res.json().then((d) => setData(d)));
  }, [url]);

  return data;
  // return ["answer 1", "answer 2", "answer 3", "answer 4"];
}

export default useFetchWord;
