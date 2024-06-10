import { motion } from "framer-motion"

import partner1 from "@/assets/brands/LogoWrapper.png";
import partner2 from "@/assets/brands/LogoWrapper-1.png";
import partner3 from "@/assets/brands/LogoWrapper-2.png";
import partner4 from "@/assets/brands/LogoWrapper-3.png";
import partner5 from "@/assets/brands/LogoWrapper-4.png";
import partner6 from "@/assets/brands/LogoWrapper-5.png";
import partner7 from "@/assets/brands/LogoWrapper-6.png";

const Partners = () => {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];

  return (
    <div className="mx-auto w-[70%] pt-[150px] flex flex-col gap-6 items-center pb-[80px]">
      <motion.p 
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="text-xl font-normal opacity-80"
      >
        Trusted by teams at over 1,000 of the world's leading organizations
      </motion.p>
      <div className="flex flex-wrap justify-center gap-16 pt-6">
        {partners.map((partner, index) => (
          <motion.img 
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: index * 0.2 }}
            key={index} 
            src={partner} 
            alt={`Partner ${index + 1}`} 
            className="h-[20px] w-auto" 
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
