import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "@/styles/Navbar.css"
import "@/styles/style.css"
import { useEffect } from 'react';
import ContextProvider from './contexto/UserContext';



function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <ContextProvider><Component {...pageProps}/></ContextProvider>;

}
export default App;
