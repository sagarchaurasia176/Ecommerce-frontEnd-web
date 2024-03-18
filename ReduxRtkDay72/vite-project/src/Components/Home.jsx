import React, { useEffect } from "react";
import { apiUrl } from "./Data";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";

function Home() {
  // funcion practice here
  const [dataPass, setDataPass] = useState([]);

  //spinner code
  const [loading, setLoad] = useState(false);
  // data fetch api
  const DataFetch = async () => {
    setLoad(true);
    try {
      const data = await fetch(apiUrl);
      const resp = await data.json();
      //modify the data
      setDataPass(resp);
    } catch {
      toast.error("error in api");
      setDataPass(resp);
    }
    // loading stop
    setLoad(false);
  };

  useEffect(() => {
    DataFetch();
    //the data is come only for one times => []
  }, []);

  return (
    <>
      {/* let's apply the map() + spinner to pass the data to cart page */}
      {/* this is the map syntax */}

      {loading ? (
        <Spinner />
      ) : dataPass.length > 0 ? (
        // pass the data here
        <div 
        className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {dataPass.map((values) => (
            // import where you want  to pass the data
            <ProductCard key={values.id} values={values} />
          ))}
        </div>
      ) : (
        // else agaain
        // data not found here
        <div className=" text-center text-black">
          <span>Data Not Found !</span>
        </div>
      )}
    </>
  );
}

export default Home;
