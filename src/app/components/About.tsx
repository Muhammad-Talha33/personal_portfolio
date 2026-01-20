// import Image from "next/image";
// import Button from "./Button";

// const About = () => {
//   return (
//     <section className="max-container padding-container -mt-10 md:-mt-0 gap-20 py-16 pb-32 md:gap-28 lg:py-20 bg-slate-50">
//       <div className="text-center bold-18 uppercase tracking-[1rem] text-black md:pb-20">
//         About
//       </div>
//       <div className="flex flex-col gap-20 md:gap-28 md:flex-row ">
//         <div className="flex-1 flexCenter ">
//           <Image
//             src="/pfp.jpg"
//             alt="about"
//             height={333}
//             width={333}
//             className="w-80 rounded-full shadow-sm hidden md:block"
//           />
//         </div>
//         <div className="flex-1 flexCenter flex-col m-auto">
//           <p className="mb-8">
//             <span className="font-extrabold">Lorem ipsum</span> dolor sit amet,
//             consectetur adipisicing elit. Maiores, accusantium corporis? Ullam,
//             maiores eos ut consequatur, magni iure omnis nam, nesciunt harum
//             eaque reiciendis incidunt ipsam nulla provident soluta pariatur
//             nobis consectetur qui. Quis consectetur neque assumenda odit, vitae,
//             voluptate laudantium quaerat facere blanditiis facilis ad enim
//             magnam qui asperiores iusto, dignissimos magni voluptatem? Est?
//           </p>
//           <Button
//             type="button"
//             title="Read more "
//             icon="/more.svg"
//             variant="btn_dark_rounded"
//           />
//         </div>
//         <div className='flex-1 flexCenter md:hidden'>
//           <Image src="/pfp.jpg" alt="about" height={333} width={333} className="w-60 md:w-auto rounded-full shadow-sm "/>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import { motion } from "framer-motion"; // Named import
import Image from "next/image";
import Button from "./Button";

const About = () => {
  return (
    <section className="max-container padding-container -mt-10 md:-mt-0 gap-20 py-16 pb-32 md:gap-28 lg:py-20 bg-slate-50">
      <motion.div
        className="text-center bold-18 uppercase tracking-[1rem] text-black md:pb-20"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About
      </motion.div>
      <div className="flex flex-col gap-20 md:gap-28 md:flex-row">
        {/* Image Animation */}
        <motion.div
          className="flex-1 flexCenter"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/pfp.jpg"
            alt="about"
            height={333}
            width={333}
            className="w-80 rounded-full shadow-sm hidden md:block"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          className="flex-1 flexCenter flex-col m-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-2xl text-center md:text-left font-bold">Crafting Digital Experiences Since 2023</h1>
          <p className="mb-8">
          <br />
            <span className="font-extrabold">I'm a Front-end
            developer</span> based in Pakistan, passionate about creating web
            applications that make a difference. My journey started with a
            curiosity about how websites work, and it has evolved into a deep
            love for both the technical and creative aspects of development.
            When I'm not coding, you'll find me exploring the latest design
            trends, contributing to open-source projects, or hiking through the
            beautiful California landscapes. I'm always excited to take on new
            challenges and collaborate with like-minded individuals who share a
            passion for innovation and quality.
          </p>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <Button
              type="button"
              title="Read more"
              icon="/more.svg"
              variant="btn_dark_rounded"
            />
          </motion.div>
        </motion.div>

        {/* Mobile Image Section */}
        <motion.div
          className="flex-1 flexCenter md:hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/pfp.jpg"
            alt="about"
            height={333}
            width={333}
            className="w-60 md:w-auto rounded-full shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
