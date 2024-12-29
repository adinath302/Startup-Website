import React from "react";
import { FaUserNinja } from "react-icons/fa";
import { MdOutlineRocketLaunch, MdOutlineTimer } from "react-icons/md";

const ServiceData = [
  {
    id: 1,
    heading: "Real Logo Real Fast",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <MdOutlineTimer />,
  },
  {
    id: 2,
    heading: "Do it yourself",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <FaUserNinja />,
  },
  {
    id: 3,
    heading: "Get Website-ready logos",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
    icon: <MdOutlineRocketLaunch />,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ServiceData.map((service) => (
            <div key={service.id} className="space-y-3 text-center p-5">
              <div className="text-6xl flex justify-center">{service.icon}</div>
              <h1 className="text-xl font-bold">{service.heading}</h1>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
