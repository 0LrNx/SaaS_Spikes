import React from "react";
import { motion } from "framer-motion"

interface TextProps {
    title: string;
    paragraphe: string;
}


const Text: React.FC<TextProps> = (props) => {
    return (
        <div className="mx-auto w-[70%] pt-[30px] flex flex-col gap-6 items-center pb-[80px]">
            <motion.h1
                initial={{ opacity: 0, y: -50}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="text-5xl font-medium text-center w-[450px]"
            >
                {props.title}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ ease: "easeInOut", duration: 0.6 }}
                className="text-[18px] font-normal text-center w-[470px]"
            >
                {props.paragraphe}
            </motion.p>
        </div>
    )
}

export default Text;