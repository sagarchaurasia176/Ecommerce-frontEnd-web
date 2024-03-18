import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// to receive the data form the cartPage
import { remove } from "../States/slice/Slice";

function Carts({ item }) {
  const dispatch = useDispatch();
  // remove btn in the cart page
  const removeBtn = () => {
    //from the redux
    dispatch(remove(item.id));
    toast.success("item removed");

  };

  return (
    <div>
      <div>
        {/* card page  */}
        <div
          className="
          rounded-lg p-4
        h-auto w-auto 
         
        "
        >
          <div>
            <img className="  w-28  m-auto" src={item.image} alt="" />
          </div>
          <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1">
              {item.title}
            </p>
            <p
              className=" text-black"
            >{item.description.slice(0, 100)}</p>
          </div><br></br>
          <div className="
          ">
            <b>{item.price}</b>
          </div>
          <div>
            {/* remove btn */}
            <button
              onClick={removeBtn}
            >
              <MdDelete className=" cursor-pointer size-5 rounded-md bg-red-500  text-white shadow-md" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
