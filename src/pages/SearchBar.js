import { SearchIcon } from "lucide-react";
import { useState } from "react";
import Masculino from "./masculino";
import { useRouter } from "next/router";
import Search from "./search";

export default function SearchBar(){
  const [search,setSearch] = useState("");
  const router = useRouter();
  
  const handleSearch = (e) =>{
    e.preventDefault();
    fetch("http://localhost:8080/admin/search?find="+search,{
    }).then(()=>localStorage.setItem("key",search)).then(()=>router.push("/search"))
  }
  const handleSearchWithEnter = (ev) =>{
    if(ev.key === "Enter"){
      fetch("http://localhost:8080/admin/search?find="+search,{
      }).then(()=>localStorage.setItem("key",search)).then(()=>router.push("/search"))
    }
  } 
    return(
        <>
        
      <div className="search-container">
        <form className="form-inline ">
        <input type="text" className="form-control search-input" placeholder="Pesquisar" onKeyDown={handleSearchWithEnter} onChange={(e)=>setSearch(e.target.value)} id="search" name="busca"/>
        <button className="search-button" onClick={handleSearch}><SearchIcon size={16} color="blue"/></button>
        </form>
      </div>
</>
    )
}