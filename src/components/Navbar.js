import React, { useState, useEffect } from "react";
import MenuAuth from "./MenuAuth";
import MenuUnAuth from "./MenuUnAuth";
import Cookies from "js-cookie";
// import styles from "src/styles/Auth.module.css";
// import { useParams } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="shadow rounded">
        <main className="container max-w-5xl flex flex-row mx-auto p-4 ">
          <section className="basis-[60%] justify-start">
            <div className="text-[#6379F4] text-2xl">FazzPay</div>
          </section>
          <section className="basis-[40%] ">
            {Cookies.get("@userLogin") ? <MenuAuth /> : <MenuUnAuth />}
          </section>
        </main>
      </div>
    </>
  );
};

export default Navbar;
