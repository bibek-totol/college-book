"use client";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center "
      >
        <div className="text-center">
          
          <motion.div
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8 flex justify-center"
          >
            <GraduationCap className="h-24 w-24 text-primary  drop-shadow-2xl" />
          </motion.div>

          
          <div className="mb-8 flex justify-center space-x-1">
            {["E", "d", "u", "B", "o", "o", "k"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 1, 0], y: [10, 0, 10] }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
               className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>

          
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-6 text-sm text-black"
          >
            Preparing your experience...
          </motion.p>
        </div>

        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
