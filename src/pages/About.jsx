import React from "react";
import { motion as m } from "framer-motion";

function About() {
  return (
    <m.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ x: window.innerWidth }}
      className="bg-fuchsia-400 text-gray-900 absolute top-0 left-0 w-full lg:px-48 px-16 min-h-screen"
    >
      <div className="my-60 p-1 overflow-hidden">
        <m.h1
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-6xl text-center lg:text-right lg:text-9xl"
        >
          Find out about us
        </m.h1>
      </div>
    </m.div>
  );
}

export default About;
