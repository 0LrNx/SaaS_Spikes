import React from "react";
import { motion } from "framer-motion"

interface BannerProps {
  title: string;
  paragraphe: string;
  textButton: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.8,
      }}
      className="flex justify-center"
    >
      <div className="bg-cards drop-shadow w-[1180px] h-[440px] rounded-[20px] px-10 py-12 flex flex-col items-center">
        <h1 className="text-[48px] font-bold mt-4 text-center w-[768px]">{props.title}</h1>
        <p className="text-[18px] font-normal mt-4 text-center w-[768px]">{props.paragraphe}</p>
        <button className="cursor-pointer mt-8 text-[16px] font-medium border border-white rounded-full px-2 py-2">
          {props.textButton}
        </button>
      </div>
    </motion.div>
  );
};

export default Banner;
