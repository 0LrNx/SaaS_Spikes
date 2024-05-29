import React from "react";

interface TextProps {
    title: string;
    paragraphe: string;
}


const Text: React.FC<TextProps> = (props) => {
    return (
        <div className="mx-auto w-[70%] pt-[30px] flex flex-col gap-6 items-center pb-[80px]">
            <h1 className="text-5xl font-medium text-center w-[450px]">{props.title}</h1>
            <p className="text-[18px] font-normal text-center w-[470px]">{props.paragraphe}</p>
        </div>
    )
}

export default Text;