import { useRef, useState } from "react";
import Feedback from "./Feedback";

function Main() {
  const modalRef = useRef(null);

  return (
    <div className="bg-gray-50 text-gray-800 p-4 h-screen flex flex-col justify-center items-center gap-2">
      <button
        className="bg-teal-500 text-white rounded py-2 px-4 hover:bg-teal-600"
        onClick={() => modalRef.current?.showModal()}
      >
        Give Feedback
      </button>
      <Feedback ref={modalRef} />
    </div>
  );
}

export default Main;
