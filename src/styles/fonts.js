import { Roboto_Flex, Inter, Montserrat, Jost } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const robotoflex = Roboto_Flex({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});
const jost = Jost({ subsets: ["latin"] });

export { robotoflex, inter, jost, montserrat };
