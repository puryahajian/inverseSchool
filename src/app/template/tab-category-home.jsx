"use client"

import React, { useState } from 'react'
import ContentTabCategory from '../organisms/content-tab-category';

function TabCategoryHome() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    "همه دوره ها",
    "طراحی محصول",
    "برنامه نویسی خلاق",
    "دیجیتال مارکتینگ",
    "کسب و کار",
    "گرافیک دیزاین",
    "گرافیک دیزاین",
    "گرافیک دیزاین",

    
  ];

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case 0:
  //       return <p>Showing all categories</p>;
  //     case 1:
  //       return <p>Content related to Development</p>;
  //     case 2:
  //       return <p>Content related to Design</p>;
  //     case 3:
  //       return <p>Content related to Marketing</p>;
  //     case 4:
  //       return <p>Content related to Business</p>;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="w-full mt-4 font-sans">
      <div className="gap-2 cursor-pointer mb-4 grid grid-cols-8 max-[1200px]:grid-cols-3 max-[770px]:grid-cols-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg flex justify-center items-center text-gray-400 text-sm font-sans py-2 border !border-neutral-500 transition-all ${activeTab === index ? "border-colorbordercategory text-white bg-bgcategory" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className=" flex gap-4 grid-cols-3 max-[990px]:grid max-[990px]:grid-cols-2 max-[770px]:grid-cols-1 ">
        <ContentTabCategory/>
        <ContentTabCategory/>
        <ContentTabCategory/>

      </div>
    </div>
  )
}

export default TabCategoryHome
