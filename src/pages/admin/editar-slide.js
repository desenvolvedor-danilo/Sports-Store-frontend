import Navbar from "../navbar";
import NavbarAdmin from "./components/navbar_admin";
import NavbarCrud from "./components/navbar_crud";
import SlideEdit from "./components/slide-edit";

export default function EditarSlide() {
    return (
        <>
            <NavbarCrud/>
                    {/* {
                        !isLogado &&
                        <NotLogin/>
                    } */}
                    
                        
                        <SlideEdit/>
                    
        </>
    )
}