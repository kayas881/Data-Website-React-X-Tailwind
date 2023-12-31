import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-1-[1240px] mx-auto grid md:grid-cols-2">
      <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/"></img>

      <div className="flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">Data Analytic Dashboard</p>
        <h1 className="md:text-4xl sm:text-3x text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex ea
          blanditiis rem et odit mollitia explicabo saepe voluptates, expedita
          excepturi quisquam ipsa iste quas reprehenderit dicta, enim,
          asperiores molestiae?
        </p>
        <button className= "bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
      </div>
      </div>
    </div>
  );
};

export default Analytics;
