import React from "react";
import { useRouter } from "next/navigation";
const modalTopup = () => {
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">jksdnf</p>
        <div className="modal-action">
          <button onClick={() => setShowModal(false)} className="btn">
            Yay!
          </button>
        </div>
      </div>
    </div>
  );
};
