import Button from "./Button";
import heroImage from "@/assets/VaultFlow_Hero.png";
import { motion } from "framer-motion"


const Hero = () => {
    return (
        <div className="mx-auto w-[70%] pt-[200px] flex flex-col gap-6 items-center pb-[80px]">
            <motion.p 
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="px-4 py-1 border border-white border-opacity-30 rounded-full"
            >
                We just raised $20M in Series B. Learn more
            </motion.p>
            <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="text-gradient text-[80px] font-medium text-center leading-none"
            >
                Modern analytics <br/> for the modern world
            </motion.h1>
            <motion.h2 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 0.5}}
                className="text-[18px] font-normal text-center"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
                Suspendisse varius enim in eros elementum tristique. 
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 1}}
                className="pb-20 flex gap-[20px]">
                <Button color="bg-white" colorText="text-black" border="none"
            >
                    Download the app
                </Button>
                <Button color="none" colorText="" border="border border-white">
                    Talk to an expert
                </Button>
            </motion.div>

            <motion.img 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 1.5}}
                className="drop-shadow rounded-[24px]" src={heroImage} alt="Image Hero de VaultFlow" 
            />
        </div>
    );
};

export default Hero;