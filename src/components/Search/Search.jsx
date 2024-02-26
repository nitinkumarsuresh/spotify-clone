import React from "react";
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";

import Card from "../Card/Card";
import SongBar from "../MasterBar/SongBar";

const Search = () => {
  
  return (
    <Layout>
      <Navbar />
      <div className="tertiary_bg mx-4 mb-24 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Browse All
          </span>
        </div>
        { (
          <div className="grid  gap-6 grid-cols-5">
            <div className="col-span-1">
              <CategoryCard
                title={"Live Events"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-purple-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Made For You"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-red-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"New Releases"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-orange-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Live Events"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-purple-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Live Events"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-purple-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Live Events"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-purple-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Made For You"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-red-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"New Releases"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-orange-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Live Events"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-purple-500"}
              />
            </div>
            <div className="col-span-1">
              <CategoryCard
                title={"Live Events"}
                img={"/assets/Arijit-1.jpg"}
                color={"bg-purple-500"}
              />
            </div>
          </div>
        )}
        
      </div>
      <SongBar />
    </Layout>
  );
};

const CategoryCard = ({ title, img, color }) => {
  return (
    <div
      className={`p-4 rounded-lg w-full  ${color} relative overflow-hidden h-56`}
    >
      <span className="text-xl font-semibold mt-2">{title}</span>
      <img
        src={img}
        alt=""
        className="w-1/2 h-1/2 absolute bottom-0 -right-8 rotate-45 object-cover"
      />
    </div>
  );
};
export default Search;
