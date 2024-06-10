import logo from "@/assets/logo_vaultflow.png";
// import { Button } from "@/components/ui/button"
import Button from "@/components/Button";
import { motion } from "framer-motion"


const Navbar = () => {
    return (
        <motion.nav
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="flex justify-between items-center bg-primary p-2 px-8 w-[95%] rounded-[25px] mx-auto">
            <img src={logo} alt="Logo Vaultflow" />
            <ul className="flex gap-[32px]">
                <li className="cursor-pointer">
                    Features
                </li>
                <li className="cursor-pointer">
                    Pricing
                </li>
                <li className="cursor-pointer"> 
                    About us
                </li>
            </ul>
            <Button color="bg-white" colorText="text-black" border="none">
                Download the app
            </Button>
        </motion.nav>

    )
}

export default Navbar;