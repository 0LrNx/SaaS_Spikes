import Button from "./Button";
import heroImage from "@/assets/VaultFlow_Hero.png";


const Hero = () => {
    return (
        <div className="mx-auto w-[70%] pt-[200px] flex flex-col gap-6 items-center pb-[80px]">
            <p className="px-4 py-1 border border-white border-opacity-30 rounded-full">
                We just raised $20M in Series B. Learn more
            </p>
            <h1 className="text-gradient text-[80px] font-medium text-center leading-none">
                Modern analytics <br/> for the modern world
            </h1>
            <h2 className="text-[18px] font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
                Suspendisse varius enim in eros elementum tristique. 
            </h2>
            <div className="pb-20 flex gap-[20px]">
                <Button color="bg-white" colorText="text-black" border="none">
                    Download the app
                </Button>
                <Button color="none" colorText="" border="border border-white">
                    Talk to an expert
                </Button>
            </div>

            <div className="">
                <img className="drop-shadow rounded-[24px]" src={heroImage} alt="Image Hero de VaultFlow" />
            </div>
        </div>
    );
};

export default Hero;