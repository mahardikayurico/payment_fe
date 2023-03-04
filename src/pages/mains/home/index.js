import React from "react";
import LayoutHome from "src/components/LayoutHome";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TransactionHistory from "@/components/TransactionHistory";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

const Home = () => {
  const [wallet, setWallet] = React.useState([]);
  // const [image, setImage] = React.useState(null);

  const id = Cookies.get("@userId");
  const getWalletById = (id) => {
    return axios.get(`http://localhost:5000/api/v1/wallet/${id}`);
  };

  React.useEffect(() => {
    getWalletById(id)
      .then((response) => {
        // data yang diterima dari server
        setWallet(response.data.data);
        console.log(response.data.data);
        // setImage(response.data.data.images[0].filename);
        // console.log(response.data.data.images[0].filename);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <Navbar />
      <main className="container max-w-5xl flex flex-row mx-auto mt-4">
        <section className="basis-[20%]">
          <LayoutHome />
        </section>
        <section className="basis-[80%] ml-4">
          <div className="flex flex-row bg-[#6379F4] p-5 rounded-lg">
            <div className="flex-1 ">
              <h1 className="text-[#E0E0E0] text-xl">Balance</h1>
              <h1 className="text-white text-4xl mt-2">Rp {wallet.balance}</h1>
              <h1 className="text-[#E0E0E0] text-xl mt-2">+62 813-9387-7946</h1>
            </div>
            <div className="flex-1">
              <div className="flex flex-col mx-auto">
                <button className="btn border-[white] text-[#E0E0E0] p-3 mx-auto rounded-lg bg-white/20">
                  {" "}
                  <i className="fas fa-arrow-up "></i> Transfer
                </button>
                <button className="btn border-[white] text-[#E0E0E0] p-3 mt-3 mx-auto rounded-lg bg-white/20">
                  {" "}
                  <i className="fas fa-plus "></i> Top Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="flex-1 flex flex-col">
              <div className=" flex flex-row">
                <div className="flex-1 flex flex-col">
                  <i className="fa fa-arrow-down text-[#1EC15F] text-lg"></i>
                  <h1 className="mt-2">Income</h1>
                  <h1 className="mt-2">Rp2.120.000</h1>
                </div>
                <div className="flex-1 flex flex-col">
                  <i className="fa fa-arrow-up text-[#FF5B37] text-lg "></i>
                  <h1 className="mt-2">Expense</h1>
                  <h1 className="mt-2">Rp2.120.000</h1>
                </div>
              </div>
              <Image
                src={"/graphic.svg"}
                alt="grpahic"
                width={340}
                height={250}
                className="mx-auto justify-center mt-4"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex flex-row">
                <h1 className="flex-1 text-[#3A3D42] mx-auto text-center">
                  Transaction History
                </h1>
                <h1 className="flex-1 text-end text-[#6379F4]">See all</h1>
              </div>
              <TransactionHistory />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
