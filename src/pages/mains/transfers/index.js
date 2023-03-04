import React from "react";
import LayoutHome from "src/components/LayoutHome";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";

const Transfer = () => {
  const [users, setUsers] = React.useState([]);
  // const filteredData = data.filter((item) => item.category === props.category);
  // const filteredData =
  //   props.category === "all"
  //     ? data
  //     : data.filter((item) => item.category === props.category);
  const router = useRouter();
  // const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data.data, "ini data");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container max-w-5xl flex flex-row mx-auto mt-4">
        <section className="basis-[20%]">
          <LayoutHome />
        </section>
        <section className="basis-[80%] ml-4">
          <h1 className="flex-1 text-[#3A3D42] mx-auto text-start font-bold">
            Search Receiver
          </h1>
          <input
            type="text"
            placeholder="Search receiver here"
            className="input input-bordered input-info w-full max-w-xl p-2 mt-4"
          />
          <div className="flex flex-row">
            <div className="basis-[30%]">
              {users.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  className=" flex flex-row mt-4 hover:cursor-pointer "
                  onClick={() => router.push(`/mains/transfers/${item.id}`)}
                >
                  <Image
                    src={"/profile.svg"}
                    alt="grpahic"
                    width={80}
                    height={80}
                    className="mx-auto justify-center"
                  />
                  <div className="flex flex-col mx-auto justify-center">
                    <h1>
                      {item.first_name} {item.last_name}
                    </h1>
                    <h1>{item.phone_number}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Transfer;
