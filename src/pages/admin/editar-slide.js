import Navbar from "../navbar";
import NavbarAdmin from "./components/navbar_admin";
import SlideEdit from "./components/slide-edit";

export default function EditarSlide() {
    return (
        <>
            <Navbar/>
                    {/* {
                        !isLogado &&
                        <NotLogin/>
                    } */}
                    <NavbarAdmin/>
                    
                        
                        <SlideEdit/>
                    
        </>
    )
}