import { motion } from "framer-motion";
import Coin from "../assets/logo.png"
import Image from "next/image";

export default function CoinBingPong() {
  
    const coinVariants = {
      animate: {
        x: [0, 200, 0, -200, 0],
        y: [0, 0, -200, 0, 0],
        transition: {
          duration: 10,
          repeat: Infinity,
        },
      },
    };
  
    return (
        <motion.div
          variants={coinVariants}
          initial="initial"
          animate="animate"
          whileHover="animate"
          className="camelcoin-container"
          drag
        >
          <Image className="w-20 camelcoin-2" src={Coin} alt="Coin" />
        </motion.div>
    );
  }