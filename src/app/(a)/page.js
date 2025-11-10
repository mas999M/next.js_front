import AllProduct from "./components/all_product";
import Slider from "./components/Slider";

export default function Home({ children }) {
  return (
    <div>


            <Slider />
            <AllProduct />
            {children}


    </div>
  );
}
