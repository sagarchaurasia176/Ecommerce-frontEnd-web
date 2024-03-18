import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "../States/slice/Slice";
function ProductCard({ values }) {
  //to get the slice name here which is the empty here
  const { cartRedux } = useSelector((state) => state);
  // dispatch the values

  const dipatch = useDispatch();
  // ==============================================================

  const AddBtn = () => {
    dipatch(add(values));
    toast.success("Item is Added");
  }



  const RemoveBtn = () => {
    dipatch(remove(values.id));
    toast.success("Item is Removed");
  }
  return (
    <div>
      <div
        className="flex flex-col cursor-pointer items-center justify-between
      transition duration-300 ease-in gap-3
       p-3 mt-10 ml-5 
       rounded-xl outline"
      >
        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {values.title}
          </p>
        </div>
        <div className="h-[180px]">
          <img src={values.image} className="h-full w-full " />
        </div>
        <div>
          <p className="w-auto text-black  font-normal text-[10px] text-center">
            {values.description.slice(0, 100)}
          </p>
        </div>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <div>
            <p className="text-green-600 font-semibold">$ {values.price}</p>
          </div>

          {/* add or remove btn */}
          {cartRedux.some((check) => check.id === values.id) ? (
            //this is the true
            <button
              onClick={RemoveBtn}
              className=" bg-slate-400 p-1 text-white font-semibold ">
              Remove
            </button>
        )
            : (
              // this is false
              <button
                onClick={AddBtn}
                className=" bg-red-500 w-auto p-1  text-white font-semibold ">
                Add
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
