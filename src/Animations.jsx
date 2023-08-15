export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.5 } },
};

// return (
//     <m.ul
//       variants={container}
//       initial="hidden"
//       animate="show"
//     >
//       <m.li variants={item} />
//       <m.li variants={item} />
//     </m.ul>
//   )
