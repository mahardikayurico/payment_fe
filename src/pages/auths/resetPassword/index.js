import React from "react";
import LayoutTitle from "src/components/LayoutTitle";
import styles from "src/styles/login.module.css";
import Layout from "src/components/LayoutAuth";

export default function login() {
  return (
    <div>
      <LayoutTitle title="Auth | Login">
        <main className="container mx-auto flex">
          <section className={`${styles["aside-auth"]} flex-1  `}>
            <Layout />
          </section>
          <section className="flex-1 mt-8 ml-7">
            <div className="mt-10">
              <p className="text-4xl">
                Did You Forgot Your Password?
                <br />
                Don’t Worry, You Can Reset Your <br />
                Password In a Minutes.
              </p>
              <p className="mt-4">
                To reset your password, you must type your e-mail and we will{" "}
                <br />
                send a link to your email and you will be directed to the reset{" "}
                <br />
                password screens
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

              <div className="text-center">
                <button
                  type="submit"
                  className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-5 mx-center  py-2 bg-[#DADADA] hover:bg-white text-[#88888F]"
                >
                  Confirm
                </button>
              </div>
            </form>
          </section>
        </main>
      </LayoutTitle>
    </div>
  );
}
