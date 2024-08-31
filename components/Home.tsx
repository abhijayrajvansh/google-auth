import React from "react";
import LoginBtn from "./LoginBtn";

const Home = () => {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Home</h1>
        <LoginBtn />
      </div>
    </div>
  );
};

export default Home;
