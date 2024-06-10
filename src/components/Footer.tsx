import logo from "@/assets/logo_vaultflow.png";
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="h-[466px] px-64 py-20 mt-10"
        >
        <div className="flex flex-row gap-36">
            <div className="flex flex-col">
                <div>
                    <h3 className="text-[24px] font-medium mb-4">Contact</h3>
                    <ul className="mb-10">
                        <li className="text-[18px] font-light opacity-80">Work inquires: work@vaultflow.com</li>
                        <li className="text-[18px] font-light opacity-80">PR and speaking: press@vaultflow.com</li>
                        <li className="text-[18px] font-light opacity-80">New business: newbusiness@vaultflow.com</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[24px] font-medium mb-4">Careers</h3>
                    <ul className="mb-10">
                        <li className="text-[18px] font-light opacity-80">Careers@vaultflow.com</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col">
                <div>
                    <h3 className="text-[24px] font-medium mb-4">Address</h3>
                    <ul className="mb-10">
                        <li className="text-[18px] font-light opacity-80">398 11th Street, Floor 2</li>
                        <li className="text-[18px] font-light opacity-80">San Francisco, CA 94103</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[24px] font-medium mb-4">Social</h3>
                    <ul className="mb-10">
                        <li className="text-[18px] font-light opacity-80">Twitter</li>
                        <li className="text-[18px] font-light opacity-80">Instagram</li>
                        <li className="text-[18px] font-light opacity-80">Tiktok</li>
                    </ul>
                </div>
            </div>
        </div>




            <div className="flex justify-between ">
                <p className="text-[16px] font-light">© 2023 Vaultflow. All Rights Reserved.</p>
                <img src={logo} alt="Logo de VaultFlow" />
                
            </div>

        </motion.footer>
    )
}

export default Footer;