import { work } from "@/constants";
import React from "react";

const Services = () => {
  return (
    <section
      id="work"
      className="container experience lg:flex justify-around align-center mx-auto pt-18 pb-20 px-8"
    >
      <div className="text-left pt-0 ml-3">
        <h2 className="mt-4 text-4xl md:text-5xl font-extralight text-white md:mt-8">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-custom-red"></span>
            <span className="relative font-semibold link-underline">
              Services:
            </span>
          </span>
          <br className="block sm:hidden" />
        </h2>
      </div>
      <div className="col-1 w-full lg:w-[70%] p-5 mt-10 lg:pl-12">
        <ul className="container relative border-l border-custom-red dark:border-gray-700 mx-auto max-w-7xl">
          {work.map((item) => (
            <li key={item.id} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-custom-red rounded-full -left-1.5 border border-white dark:border-custom-red dark:bg-gray-700"></div>
              <time className="mb-1 -mt-5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>

              <h3 className="text-lg font-normal text-white dark:text-white">
                {item.title}
                <span className="custom-superscript font-normal custom-text-shadow ">
                  &nbsp;{" "}
                </span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
