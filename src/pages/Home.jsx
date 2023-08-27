import React from "react";

import { motion as m } from "framer-motion";

function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full bg-orange-200 lg:px-48 px-16 min-h-screen overflow-hidden"
    >
      <div className="my-60 p-1 overflow-hidden">
        <m.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-5xl text-center lg:text-right lg:text-9xl"
        >
          Temitope Isaac
        </m.h1>
      </div>
      <div className="flex justify-between">
        <div>
          <h2>Temitope</h2>
          <h2>Isaac</h2>
          <h2>2023</h2>
        </div>
        <div>
          <h3>I know there's a place I belong</h3>
          <h3>Where I will see the fullness of Love</h3>
          <h3>A child face to face with my God</h3>
        </div>
      </div>
    </m.div>
  );
}

export default Home;
