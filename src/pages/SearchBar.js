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
    return(
        <>
        <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="search-container">
        <input type="text" class="form-control search-input" placeholder="Pesquisar" onChange={(e)=>setSearch(e.target.value)}/>
        <i class="fas fa-search search-icon"></i>
        <button className="search-button" onClick={handleSearch}><SearchIcon size={16}/></button>        
      </div>
    </div>
  </div>
</div>
</>
    )
}