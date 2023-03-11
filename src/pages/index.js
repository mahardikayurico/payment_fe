import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";
import LayoutTitle from "@/components/LayoutTitle";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LayoutTitle title="landing Page">
        <Navbar />

        <main className="container  mx-auto max-w-6xl">
          <section className=" flex lg:flex-row flex-col md:flex-col">
            <div className="flex-1 w-1/2 lg:w-0 m-auto ">
              <Image
                src="/phone.png"
                alt="Gambar"
                className="m-auto"
                width={400}
                height={400}
              />
            </div>
            <div className=" flex-1 text-center lg:text-start">
              <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold lg:mb-6 lg:mt-28 md:mb-6 md:mt-6 mb-5 mt-5">
                Awesome App
              </h1>
              <h1 className="lg:text-7xl md:text-6xl text-5xl  font-bold lg:mb-14 md:mb-6  mb-5 ">
                For Saving
                <span className="text-blue-500"> Time</span>
              </h1>
              <p className="lg:text-xl md:text-lg text-lg text-gray-800 lg:mb-14 md:mb-6  mb-5 ">
                We bring you a mobile app for banking problems that
                <br />
                oftenly wasting much of your times.
              </p>
              <button className="btn btn-primary mb-12 md:mb-12 lg:mb-0">
                Try It Free
              </button>
            </div>
          </section>
          <section className="bg-gray-200 py-20 mb-14 ">
            <div className="justify-center items-center ">
              <Image
                src="/sponsor.png"
                alt="Gambar"
                class="m-auto"
                width={800}
                height={800}
              />
            </div>
          </section>
          <section>
            <h1 className="text-5xl text-center font-bold mb-14">
              <span className="text-blue-500">About</span> the Application.
            </h1>
            <p className="text-xl text-gray-800 text-center  mb-14">
              We have some great features from the application and it’s totally
              <br />
              free to use by all users around the world.
            </p>
          </section>
          <section className="flex justify-center lg:space-x-3 md:flex-col flex-col lg:flex-row mb-14">
            <div className="flex-1 bg-gray-100 p-7 shadow-xl mb-4 lg:mb-0">
              <div className="flex flex-col items-center ">
                <i className="fas fa-phone fa-2x mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">24/7 Support</h2>
                <p className="text-gray-800 text-center">
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
            </div>
            <div className="flex-1  bg-gray-100 p-7 shadow-xl mb-4 lg:mb-0">
              <div className="flex flex-col items-center">
                <i className="fas fa-key fa-2x mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">Data Privacy</h2>
                <p className="text-gray-800 text-center">
                  We make sure your data is safe in our database and we will
                  encrypt any data you submitted to us.
                </p>
              </div>
            </div>
            <div className="flex-1  bg-gray-100 p-7 shadow-xl mb-4 lg:mb-0">
              <div className="flex flex-col items-center">
                <i className="fas fa-download fa-2x mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">Easy Download</h2>
                <p className="text-gray-800 text-center">
                  Zwallet is 100% totally free to use it’s now available on
                  Google Play Store and App Store.
                </p>
              </div>
            </div>
          </section>
          <section className=" flex lg:flex-row flex-col bg-gray-200 mt-36 lg:mb-20 mb-20 p-4">
            <div className="flex-1 w-1/2 lg:w-0 m-auto">
              <Image
                src="/phone2.png"
                alt="Gambar"
                class="m-auto"
                width={400}
                height={400}
              />
            </div>
            <div className=" flex-1 text-center lg:text-start ">
              <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold lg:mt-36  mb-6">
                All the
                <span className="text-blue-500"> Great</span>
              </h1>
              <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold mb-6 ">
                FazzPay features
              </h1>
              <div className="grid grid-rows-3 gap-6 lg:mr-10 ">
                <div className="bg-white p-3 ">
                  <h2 className="text-xl font-bold mb-3  ">1. Small Fee</h2>
                  <p className="text-x">
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </div>
                <div className="bg-white p-3">
                  <h2 className="text-xl font-bold mb-3">2. Data Secured</h2>
                  <p className="text-x">
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </p>
                </div>
                <div className="bg-white p-3">
                  <h2 className="text-xl font-bold">3. User Friendly</h2>
                  <p className="text-x">
                    FazzPay come up with modern and sleek design and not
                    complicated.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="text-5xl text-center font-bold mb-14">
              What Users are <span className="text-blue-500">Saying. </span>
            </h1>
            <p className="text-xl text-gray-800 text-center  mb-14">
              We have some great features from the application and it’s totally
              free
              <br />
              to use by all users around the world.
            </p>
          </section>
        </main>
      </LayoutTitle>
    </>
  );
}
