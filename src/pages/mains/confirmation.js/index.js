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
              Transfer to
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
              Details
            </h1>
            <div>
              <h1>Amount</h1>
              <h1>Rp100.000</h1>
            </div>
            <div>
              <h1>Balance Left</h1>
              <h1>Rp20.000</h1>
            </div>
            <div>
              <h1>Date & Time</h1>
              <h1>May 11, 2020 - 12.20</h1>
            </div>
            <div>
              <h1>Notes</h1>
              <h1>For buying some socks</h1>
            </div>
            <button className="btn btn-primary">confirm</button>
          </div>
        </section>
      </main>
    </div>
  );
}
