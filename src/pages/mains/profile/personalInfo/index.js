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
            <h1 className="flex-1 text-[#3A3D42] mx-auto text-start">
              Personal Information
            </h1>
            <h1>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </h1>
          </div>
          <div>
            <h1>First Name</h1>
            <h1>Habibb</h1>
          </div>
          <div>
            <h1>Last Name</h1>
            <h1>Sinta</h1>
          </div>
          <div>
            <h1>email</h1>
            <h1>mashasrassahs@gmail.com </h1>
          </div>
          <div>
            <h1>Phone number</h1>
            <h1>08651293823</h1>
          </div>
          <button className="btn btn-primary">confirm</button>
        </section>
      </main>
    </div>
  );
}
