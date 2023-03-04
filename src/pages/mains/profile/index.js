import React from "react";
import LayoutHome from "src/components/LayoutHome";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import axios from "axios";

const Profile = () => {
  // const [users, setUsers] = React.useState([]);
  // // const filteredData = data.filter((item) => item.category === props.category);
  // // const filteredData =
  // //   props.category === "all"
  // //     ? data
  // //     : data.filter((item) => item.category === props.category);

  // // const navigate = useNavigate();
  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/v1/users")
  //     .then((response) => {
  //       setUsers(response.data.data);
  //       console.log(response.data.data, "ini data");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      <Navbar />
      <main className="container max-w-5xl flex flex-row mx-auto mt-4">
        <section className="basis-[20%]">
          <LayoutHome />
        </section>
        <section className="basis-[80%] ml-4">
          <div className="flex-1 text-[#3A3D42] mx-auto text-center font-bold">
            <Image
              src={"/profile.svg"}
              alt="grpahic"
              width={80}
              height={80}
              className="mx-auto justify-center"
            />
            <h1 className="mx-auto justify-center">edit</h1>
            <h1 className="mx-auto justify-center">kartonyono ubaidilah</h1>
            <h1 className="mx-auto justify-center">085672097262</h1>
            <button className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-2 mx-center text-start py-2 bg-[#DADADA] hover:bg-white text-[#88888F]">
              Personal Information
            </button>
            <button className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-2 mx-center  text-start py-2 bg-[#DADADA] hover:bg-white text-[#88888F]">
              Change Password
            </button>
            <button className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-2 mx-center  text-start py-2 bg-[#DADADA] hover:bg-white text-[#88888F]">
              Change PIN
            </button>
            <button className=" btn btn-primary border border-[#DADADA] rounded-lg w-3/4 my-2 mx-center text-start py-2 bg-[#DADADA] hover:bg-white text-[#88888F]">
              Logout
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Profile;
