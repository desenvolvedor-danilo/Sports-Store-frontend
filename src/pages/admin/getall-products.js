import Navbar from "../navbar";
import NavbarCrud from "./components/navbar_crud";
import ListProductBase from "./components/list_product_base";
import NavbarAdmin from "./components/navbar_admin";

export default function GetAllProducts(){
    return(
    <>
    <NavbarCrud/>
    <ListProductBase/>
    </>
    )
}