import Navbar from "./components/navbar";
import {LoginContext, LoginProvider} from "./components/LoginContext";
import CartProvider from "./components/cartContext";

export default function RootLayout({ children }) {
  return (
      <>
          <LoginProvider>



                  <Navbar/>

                  {children}



          </LoginProvider>
      </>

  );
}
