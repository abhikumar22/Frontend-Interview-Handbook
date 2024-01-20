import { useEffect, useState, useRef } from "react";
import { API_RESPONSE_DUMP } from "./constants";
import CardComponent from "./CardComponent";
import PaginationCompoment from "./PaginationCompoment";

import "./styles.css";

export default function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    setRes(API_RESPONSE_DUMP);
  }, []);

  const handlePagination = () => {
    const indx = res[res.length - 1].id;
    console.log("*indx", indx);

    setRes([
      ...res,
      {
        id: indx + 1,
        name: `abhishek${indx + 1}`
      },
      {
        id: indx + 2,
        name: `abhishek${indx + 2}`
      }
    ]);
  };

  return (
    <div className="App">
      <PaginationCompoment cbOnVisible={handlePagination}>
        {res.map((data, indx) => {
          return <CardComponent data={data} />;
        })}
      </PaginationCompoment>
    </div>
  );
}
