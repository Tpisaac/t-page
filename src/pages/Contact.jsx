import React from "react";

import { motion as m } from "framer-motion";
import { container, item } from "../Animations";

function Contact() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="text-gray-900 absolute top-0 left-0 w-full bg-red-400 lg:px-48 px-16 min-h-screen"
    >
      <main>
        <div className="my-60 p-1 overflow-hidden">
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            Let's Talk
          </m.h1>
        </div>
        <div className="flex justify-between">
          <div className="lg:text-2xl sm:text-xs">
            <h4>Find me:</h4>
          </div>
          <div className="lg:text-6xl text-2xl underline">
            <m.ul variants={container} initial="hidden" animate="show">
              <div className="overflow-hidden">
                <m.li variants={item} className="pb-2">
                  Twitter
                </m.li>
              </div>
              <div className="overflow-hidden">
                <m.li variants={item} className="pb-2">
                  Instagram
                </m.li>
              </div>
              <div className="overflow-hidden">
                <m.li variants={item} className="pb-2">
                  Facebook
                </m.li>
              </div>
              <div className="overflow-hidden">
                <m.li variants={item} className="pb-2">
                  Linkedin
                </m.li>
              </div>
            </m.ul>
          </div>
        </div>
      </main>
    </m.div>
  );
}

export default Contact;
