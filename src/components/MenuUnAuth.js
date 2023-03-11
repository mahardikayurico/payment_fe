import { useRouter } from "next/navigation";
const MenuUnAuth = () => {
  const router = useRouter();
  return (
    <>
      <div className=" space-x-6 flex flex-row justify-end self-end mb-2">
        <button
          className="btn btn-primary "
          onClick={() => router.push("/auths/login")}
        >
          Login
        </button>
        <button
          className="btn btn-primary "
          onClick={() => router.push("/auths/register")}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default MenuUnAuth;
