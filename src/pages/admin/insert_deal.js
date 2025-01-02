import Navbar from "../navbar";
import DealBase from "./components/deal_base";
import NavbarAdmin from "./components/navbar_admin";

export default function InsertDeal(){
    return(
        <>
        <Navbar/>
        <NavbarAdmin/>
        <DealBase/>
        </>
    )
}