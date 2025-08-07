import { useState } from "react";
import Modal from "../modal";
const CardButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="sticky top-4 left-1 z-[999]
  mt-10 -mb-10 w-fit "
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white rounded-full px-4 py-1 pr-14 flex items-center gap-2 text-[20px] 
    lg:text-[24px] font-semibold text-black relative hover:bg-gray-200 transition shadow-lg shadow-gray-300/90"
        >
          Sepet
          <img src="/cart.png" className="w-12 absolute right-1 bottom-0" />
        </button>
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default CardButton;
