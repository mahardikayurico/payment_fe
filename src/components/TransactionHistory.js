import React from "react";
import Image from "next/image";

const TransactionHistory = () => {
  //   const [data, setData] = React.useState([]);

  //   // const filteredData = data.filter((item) => item.category === props.category);
  //   //   const filteredData =
  //   //     props.category === "all"
  //   //       ? data
  //   //       : data.filter((item) => item.category === props.category);

  //   React.useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/v1/products")
  //       .then((response) => {
  //         setData(response.data.data);
  //         console.log(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  return (
    <div>
      {[1, 2, 3, 4].map(() => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-row mt-4 ">
          <div className=" basis-[40%]">
            <Image
              src={"/profile.svg"}
              alt="grpahic"
              width={80}
              height={80}
              className="mx-auto justify-center"
            />
          </div>
          <div className="basis-[30%] flex flex-col mx-auto justify-center">
            <h1>Samuel Suhi</h1>
            <h1>Accept</h1>
          </div>
          <div className="basis-[30%] mx-auto self-center">+Rp50.000</div>
        </div>
      ))}
    </div>
  );
};
export default TransactionHistory;
