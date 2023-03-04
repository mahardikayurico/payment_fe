import React from "react";
import LayoutHome from "src/components/LayoutHome";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Confirmation() {
  return (
    <div>
      <Navbar />
      <main className="container max-w-5xl flex flex-row mx-auto mt-4">
        <section className="basis-[20%]">
          <LayoutHome />
        </section>
        <section className="basis-[80%] ml-4">
          <div className="flex flex-col">
            <h1 className="flex-1 text-[#3A3D42] mx-auto text-center">
              Transfer Money
            </h1>

            <div className="flex flex-row mt-4 ">
              <div className="">
                <Image
                  src={"/profile.svg"}
                  alt="grpahic"
                  width={80}
                  height={80}
                  className="mx-auto justify-center"
                />
              </div>
              <div className="flex flex-col mx-auto justify-center">
                <h1>Samuel Suhi</h1>
                <h1>08624291272</h1>
              </div>
            </div>
            <h1 className="flex-1 text-[#3A3D42] mx-auto text-center">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <h1>Rp120.000 Available</h1>
            <textarea
              placeholder="notes"
              className="textarea textarea-bordered textarea-xs w-full max-w-xs"
            ></textarea>
            <button className="btn btn-primary">confirm</button>
          </div>
        </section>
      </main>
    </div>
  );
}
