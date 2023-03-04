import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function LayoutAuth() {
  const router = useRouter();

  return (
    <main className="shadow rounded py-8 px-2 border-r-lg">
      <div
        className="mt-8 text-xl hover:cursor-pointer"
        onClick={() => router.push("/mains/home")}
      >
        {" "}
        <i className="fas  fa-border-all"></i> Dasboard
      </div>
      <div
        className="mt-8 text-xl hover:cursor-pointer"
        onClick={() => router.push("/mains/transfers")}
      >
        {" "}
        <i className="fas fa-arrow-up"></i> Transfer
      </div>
      <div
        className="mt-8 text-xl hover:cursor-pointer"
        onClick={() => router.push("/mains/topup")}
      >
        {" "}
        <i className="fas fa-plus"></i> Top Up
      </div>

      <div
        className="mt-8 text-xl hover:cursor-pointer"
        onClick={() => router.push("/mains/profile")}
      >
        {" "}
        <i className="fas fa-user"></i> Profile
      </div>
      <div
        className="mt-52 text-xl hover:cursor-pointer"
        onClick={() => router.push("/mains/profile")}
      >
        {" "}
        <i className="fas fa-sign-out"></i> Log Out
      </div>
    </main>
  );
}

export default LayoutAuth;
