"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaFigma } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { RiLayout2Line } from "react-icons/ri";

const services = [
  {
    id: 1,
    icon: <IoCodeSlash className="h-12 w-12 fill-current" />,
    title: "Front-End Development",
    description:
      "Building fast, responsive websites using React, Next.js, Tailwind CSS, and JavaScript.",
  },
  {
    id: 2,
    icon: <FaFigma className="h-12 w-12 fill-current" />,
    title: "Figma to Code",
    description:
      "Converting Figma designs into pixel-perfect, responsive front-end code.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="h-12 w-12 fill-current" />,
    title: "Web Application Development",
    description:
      "Building scalable web apps using React.js and Next.js for dynamic UIs and server-side rendering.",
  },
  {
    id: 4,
    icon: <RiLayout2Line className="h-12 w-12 fill-current" />,
    title: "Responsive Web Design",
    description:
      "Ensuring a seamless user experience across mobile and desktop devices.",
  },
];

export default function MyServices() {
  return (
    <motion.section initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
      id="features"
      className="container mx-auto px-4 space-y-6 py-16 md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-center bold-18 uppercase tracking-[1rem] text-black pb-5 ml-4 md:ml-0">
          Services
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-5">
          I offer a range of services designed to help you build fast, scalable,
          and visually appealing web applications. From converting Figma
          designs to code to creating complex React applications, I focus on
          providing a seamless user experience.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-black p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {service.icon}
              <div className="space-y-2">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

// import React from "react";
// import { FaFigma, FaReact } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";
// import { AiOutlineCode } from "react-icons/ai";
// import { BsFillCloudArrowUpFill } from "react-icons/bs";
// import { RiLayout2Line } from "react-icons/ri";
// import { IoCodeSlash } from "react-icons/io5";

// const services = [
//   {
//     id: 1,
//     title: "Front-End Development",
//     description:
//       "Building fast, responsive websites using **React**, **Next.js**, **Tailwind CSS**, and **JavaScript**.",
//     icon: <IoCodeSlash className="h-12 w-12 fill-current" />,
//     hoverColor: "hover:shadow-black",
//   },
//   {
//     id: 2,
//     title: "Figma to Code",
//     description:
//       "Converting **Figma** designs into pixel-perfect, responsive front-end code.",
//     icon: <FaFigma className="h-12 w-12 fill-current" />,
//     hoverColor: "hover:shadow-teal-200",
//   },
//   {
//     id: 3,
//     title: "Web Application Development",
//     description:
//       "Building scalable web apps using **React.js** and **Next.js** for dynamic UIs and server-side rendering.",
//     icon: <SiNextdotjs className="h-12 w-12 fill-current" />,
//     hoverColor: "hover:shadow-teal-200",
//   },
//   {
//     id: 4,
//     title: "Responsive Web Design",
//     description:
//       "Ensuring a seamless user experience across **mobile** and **desktop** devices.",
//     icon: <RiLayout2Line className="h-12 w-12 fill-current" />,
//     hoverColor: "hover:shadow-teal-200",
//   },
// ];

// export default function MyServices() {
//   return (
//     <section
//       id="features"
//       className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20"
//     >
//       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
//         <h2 className="text-center bold-18 uppercase tracking-[1rem] text-black pb-10">
//           Services
//         </h2>

//         <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//           I offer a range of services designed to help you build fast, scalable, and visually appealing web applications.
//           From converting Figma designs to code to creating complex React applications, I focus on providing a seamless user experience.
//         </p>
//       </div>

//       <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow-teal-200 p-2"
//           >
//             <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
//               {service.icon}
//               <div className="space-y-2">
//                 <h3 className="font-bold">{service.title}</h3>
//                 <p className="text-sm text-muted-foreground">{service.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
