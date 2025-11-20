import { AlignStartHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

export default function SlideBase() {
    const [image, setImage] = useState(null);
    const [slide, setSlide] = useState(
        {
            codigo: ""
        })
    const handleFoto = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image)
        formData.append("slide", slide.codigo)
        fetch("http://localhost:8080/admin/slide-info", {
            method: "POST",
            body: formData,
            dataType: "jsonp"
        }).then((res) => console.log(res.text()))}
        return (
            <>
                <section className="container_pages">
                    <div className="wrapper fadeInDown">
                        <div id="formContentAdmin">
                            <div className="fadeIn first">
                                <h2 id="titulo_admin">Inserir Slides</h2>
                            </div>
                            <form onSubmit={handleFoto}>
                                <input type="file" id="upload_imagem" onChange={(e) => setImage(e.target.files[0])} />
                                <input type="text" onChange={(e) => setSlide({codigo:e.target.value})} />
                                <input id="input-button" type="submit" value="Salvar" />
                            </form>
                        </div>
                    </div>
                </section>
    
            </>
        )
}