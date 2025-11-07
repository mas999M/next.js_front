import Image from "next/image";
import AllProduct from "./components/all_product";
import Slider from "./components/Slider";
import CartProvider from "./components/cartContext";

export default function Home({ children }) {
  return (
    <div>


            <Slider />
            <AllProduct />
            {children}


    </div>
  );
}
