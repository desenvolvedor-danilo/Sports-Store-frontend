import Navbar from "../navbar";
import NavbarAdmin from "./components/navbar_admin";
import NavbarCrud from "./components/navbar_crud";
import SlideBase from "./components/slide_base";

export default function insertBase(){
    return(
        <>
                <NavbarCrud/>
                {/* {
                    !isLogado &&
                    <NotLogin/>
                } */}
                
                    
                <SlideBase/>
                
                
                </>
    )
}