import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arqu executive and former co-ordinator of the company and the company itself is responsible for the administration",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arqu executive and former co-ordinator of the company and the company itself is responsible for the administration",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arqu executive and former co-ordinator of the company and the company itself is responsible for the administration",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Arqu executive and former co-ordinator of the company and the company itself is responsible for the administration",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  //parent component mai kuch change krna hai child component mai kuch hone hi wajah se toh un functions ko parent component mai  bana dijiye
  //aur props ke through child mai bhej di jiye
  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          //The initial and animate properties are provided by the Framer Motion library.
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full bg-sky-100"
          >
            <video
              src="/videos/1.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full bg-sky-300"
          >
            <video
              src="/videos/2.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full bg-sky-400"
          >
            <video
              src="/videos/3.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full bg-sky-500"
          >
            <video
              src="/videos/4.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
