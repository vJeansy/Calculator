import React from "react";
import { motion } from "framer-motion";
import ButtonsCalculator from "./buttons-calculator";

function ButtonsEffect() {
    return (
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 3,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <ButtonsCalculator />
        </motion.div>
    );
  }

  export default ButtonsEffect;