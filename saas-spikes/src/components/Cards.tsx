import React from "react";

interface CardsProps {
  logo: string;
  title: string;
  paragraphe: string;
  redirection: string;
  hasImage?: boolean;
  image?: string;
}

const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className={`bg-cards drop-shadow ${props.hasImage ? 'w-[1180px]' : 'w-[578px]'} h-[372px] rounded-[20px] px-10 py-12 flex`}>
      <div className={`${props.hasImage ? 'flex-1' : ''}`}>
        <img className="h-[50px] w-auto drop-shadow rounded-xl" src={props.logo} alt="Logo de la carte" />
        <h1 className="text-[32px] font-medium mt-4">{props.title}</h1>
        <p className="text-[14px] font-normal mt-4 opacity-80">{props.paragraphe}</p>
        <p className="cursor-pointer underline mt-8 text-[16px] font-medium">{props.redirection}</p>
      </div>
      {props.hasImage && (
        <div className="flex-1 flex items-center justify-center">
          <img className="h-[300px] w-auto drop-shadow rounded-[20px]" src={props.image} alt="Image de la carte" />
        </div>
      )}
    </div>
  );
};

export default Cards;
