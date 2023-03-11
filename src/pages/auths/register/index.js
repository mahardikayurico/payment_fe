import React from "react";
import LayoutTitle from "src/components/LayoutTitle";
import styles from "src/styles/login.module.css";
import Layout from "src/components/LayoutAuth";
import { useRouter } from "next/navigation";

export default function register() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div>
      <LayoutTitle title="Auth | Register">
        <main className="container mx-auto flex">
          <div className="hidden sm:block  flex-1">
            <section className={`${styles["aside-auth"]}`}>
              <Layout />
            </section>
          </div>
          <section className="flex-1 mt-8 ml-7">
            <div className="mt-10">
              <p className="text-4xl text-[#3A3D42] font-w-[700]">
                Start Accessing Banking Needs <br />
                With All Devices and All Platforms <br />
                With 30.000+ Users
              </p>
              <p className="mt-4 text-[#3A3D4299] text-xl">
                Transfering money is eassier than ever, you can access <br />
                Payur wherever you are. Desktop, laptop, mobile phone? <br />
                we cover all of that for you!
              </p>
            </div>
            <form>
              <div className="flex flex-col py-4 w-full mx-auto ">
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="input input-ghost w-full max-w-xl p-3"
                />
              </div>
              <div className="flex flex-col py-4 w-full mx-auto ">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input input-ghost w-full max-w-xl p-3"
                />
              </div>
              <div className="flex flex-col py-4 w-full mx-auto ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-ghost w-full max-w-xl p-3"
                />
              </div>
              <div className="flex flex-col py-4 w-full mx-auto">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-ghost w-full max-w-xl p-3"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-5 mx-center  py-2 bg-[#DADADA] hover:bg-white text-[#88888F]"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center">
              <h1>
                Don’t have an account? Let’s
                <p
                  onClick={() => router.push("/auths/login")}
                  className="hover:text-[#88888F] hover:cursor-pointer"
                >
                  Login{" "}
                </p>
              </h1>
            </div>
          </section>
        </main>
      </LayoutTitle>
    </div>
  );
}
