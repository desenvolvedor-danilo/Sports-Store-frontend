import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "@/styles/Navbar.css"
import "@/styles/style.css"
import { useEffect } from 'react';



function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <Component {...pageProps} />;

}
export default App;
