import { ClipboardList, Minus, Pen, Plus } from "lucide-react";
import Link from "next/link";

export default function OperacoesCrud({hrefAdd,hrefDel,hrefEdit,hrefList}){
    return(
        <>
        <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" href={hrefAdd}><Plus size={40}/></Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href={hrefDel}><Minus size={40}/></Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href={hrefEdit}><Pen size={40}/></Link> </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href={hrefList}><ClipboardList size={40}/></Link></li>
                    </ul>
        
    
        </>
    )
}