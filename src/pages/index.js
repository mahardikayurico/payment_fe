import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";
import LayoutTitle from "@/components/LayoutTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <LayoutTitle title="landing Page">
        <div className="bg-[red]"> adkhnak</div>
        <button
          onClick={() => router.push("auths/login")}
          className="btn btn-primary "
        >
          Login
        </button>
        <button onClick={() => router.push("/auths/register")}>Register</button>
        <div className="bg-[red]">apaa ya </div>
      </LayoutTitle>
    </>
  );
}
