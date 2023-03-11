import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const MenuAuth = () => {
  const [user, setUser] = React.useState([]);
  const [image, setImage] = React.useState(null);

  // const { id } = useParams();
  // const iduser = localStorage.getItem("@userId");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const id = localStorage.getItem("@userId");
  //   }
  // }, [id]);
  const id = Cookies.get("@userId");
  // const id = JSON.parse(localStorage.getItem("@userId"));
  const getUserById = (id) => {
    return axios.get(`http://localhost:5000/api/v1/users/${id}`);
  };

  useEffect(() => {
    getUserById(id)
      .then((response) => {
        // data yang diterima dari server
        setUser(response.data.data);
        console.log(response.data.data);
        setImage(response.data.data.images[0].filename);
        console.log(response.data.data.images[0].filename);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <div className="flex flex-row ">
        <div className=" basis-[30%]">
          <Image
            // src={`http://localhost:5000/public/uploads/images/${image}`}
            //
            src={"/profile.svg"}
            alt="grpahic"
            width={50}
            height={50}
            className="mx-auto "
          />
        </div>
        <div className="basis-[40%] flex flex-col mx-auto justify-center">
          <h1>
            {/* {user.first_name} {user.last_name}{" "} */}
            Mahardika Yurico
          </h1>
          <h1>08571326259</h1>
        </div>
        <div className="basis-[30%] mx-auto self-center justify-end far fa-bell"></div>
      </div>
    </>
  );
};

export default MenuAuth;
