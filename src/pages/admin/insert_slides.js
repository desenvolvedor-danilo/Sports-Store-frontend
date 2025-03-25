import Navbar from "../navbar";
import NavbarAdmin from "./components/navbar_admin";
import SlideBase from "./components/slide_base";

export default function insertBase(){
    return(
        <>
                <Navbar/>
                {/* {
                    !isLogado &&
                    <NotLogin/>
                } */}
                <NavbarAdmin/>
                
                    
                <SlideBase/>
                
                
                </>
    )
}