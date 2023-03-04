import React, { useState, useEffect } from "react";
import LayoutTitle from "src/components/LayoutTitle";
import styles from "src/styles/login.module.css";
import Layout from "src/components/LayoutAuth";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        // window.localStorage.setItem(
        //   "@userLogin",
        //   JSON.stringify(res.data.data)
        // );
        Cookies.set("@userLogin", JSON.stringify(res.data.data));
        Cookies.set("@userId", res.data.data.user.id);
        // window.localStorage.setItem("@userId", res.data.data.user.id);
        router.push("/mains/home");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  // useEffect(() => {
  //   if (localStorage.getItem("@userLogin")) {
  //     router.push("/mains/home");
  //   }
  // });
  return (
    <div>
      <LayoutTitle title="Auth | Login">
        <main className="container mx-auto flex">
          <section className={`${styles["aside-auth"]} flex-1  `}>
            <Layout />
          </section>
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
            <form onSubmit={handleLogin} className="mt-8">
              {validate.error && (
                <div className="alert alert-error shadow-lg w-3/4 mx-auto">
                  <div>
                    <span>{validate.message}</span>
                  </div>
                </div>
              )}
              <div className="flex flex-col py-2 w-full mx-auto   ">
                <input
                  onChange={(e) =>
                    setLoginForm({
                      ...loginForm,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  placeholder="Enter your email"
                  className="input input-ghost  w-full max-w-xl p-3 "
                />
              </div>
              <div className="flex flex-col py-2 w-full mx-auto">
                <input
                  onChange={(e) =>
                    setLoginForm({
                      ...loginForm,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  placeholder="Enter your password"
                  className="input input-ghost w-full max-w-xl p-3"
                />
              </div>
              <div
                onClick={() => router.push("/auths/resetPassword")}
                className="underline mx-auto w-3/4 hover:cursor-pointer text-end"
              >
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
              <h1>
                Don’t have an account? Let’s{" "}
                <p
                  onClick={() => router.push("/auths/register")}
                  className="hover:text-[#88888F] hover:cursor-pointer"
                >
                  Sign Up{" "}
                </p>
              </h1>
            </div>
          </section>
        </main>
      </LayoutTitle>
    </div>
  );
};
export default Login;
