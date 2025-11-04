import Navbar from "./components/navbar";
import {LoginContext, LoginProvider} from "./components/LoginContext";

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
