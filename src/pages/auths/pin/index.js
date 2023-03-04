import React from "react";
import LayoutTitle from "src/components/LayoutTitle";
import styles from "src/styles/login.module.css";
import Layout from "src/components/LayoutAuth";

export default function login() {
  return (
    <div>
      <LayoutTitle title="Create PIN">
        <main className="container mx-auto flex">
          <section className={`${styles["aside-auth"]} flex-1  `}>
            <Layout />
          </section>
          <section className="flex-1 mt-8 ml-7">
            <div className="mt-10">
              <p className="text-4xl">
                Secure Your Account, Your Wallet,
                <br />
                and Your Data With 6 Digits <br />
                PIN That You Created Yourself.
              </p>
              <p className="mt-4">
                Create 6 digits pin to secure all your money and your data in
                <br />
                Payur app. Keep it secret and don’t tell anyone about your
                <br />
                Payur account password and the PIN.
              </p>
            </div>
            <form>
              <div className="flex flex-col py-2 w-3/4 mx-auto ">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="flex flex-col py-2 w-3/4 mx-auto">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="underline mx-auto w-3/4 hover:cursor-pointer text-end">
                Forgot Password ?{" "}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-5 mx-center  py-2 bg-[#DADADA] hover:bg-white text-[#88888F]"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <h1>Don’t have an account? Let’s Sign Up</h1>
            </div>
          </section>
        </main>
      </LayoutTitle>
    </div>
  );
}
