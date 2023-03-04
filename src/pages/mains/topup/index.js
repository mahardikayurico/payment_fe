import React from "react";
import LayoutHome from "src/components/LayoutHome";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const modalTopup = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [walletForm, setWallet] = React.useState({
    balance: "",
  });

  const handleWallet = (event) => {
    const id = Cookies.get("@userId");
    event.preventDefault();
    axios({
      url: `http://localhost:5000/api/v1/wallet/topup/${id}`,
      method: "PATCH",
      data: walletForm,
    })
      .then((res) => {
        console.log(res.data.data);
        setWallet(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <main className="container max-w-5xl flex flex-row mx-auto mt-4">
        <section className="basis-[20%]">
          <LayoutHome />
        </section>
        <section className="basis-[80%] ml-4">
          <form onSubmit={handleWallet} className="mt-8">
            <div className="flex flex-col py-2 w-full mx-auto   ">
              <input
                value={walletForm.balance}
                onChange={(e) =>
                  setWallet((prevState) => ({
                    ...prevState,
                    balance: e.target.value,
                  }))
                }
                type="number"
                placeholder="Enter your topup"
                className="input input-ghost  w-full max-w-xl p-3 "
              />
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push("/mains/home")}
                type="submit"
                className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-5 mx-center  py-2 bg-[#DADADA] hover:bg-white text-[#88888F]"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
export default modalTopup;
