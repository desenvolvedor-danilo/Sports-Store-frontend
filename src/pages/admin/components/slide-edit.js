import { AlignStartHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

export default function SlideEdit() {
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState();
    const [slide, setSlide] = useState(
        {
            codigo: ""
        })
    const handleFoto = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("codigo", slide.codigo)
        formData.append("file", image)
        fetch("http://localhost:8080/admin/edit-slides", {
            method: "PUT",
            body: formData,
            dataType: "jsonp"
        }).then((res) => setStatus(res.status))
    }
        return (
            <>
                <section className="container_pages">
                    <div className="wrapper fadeInDown">
                        <div id="formContentAdmin">
                            <div className="fadeIn first">
                                <h2 id="titulo_admin">Editar Slides</h2>
                            </div>
                            <form onSubmit={handleFoto}>
                                <input type="text" onChange={(e) => setSlide({ codigo: e.target.value })} placeholder="Digite o código do produto" />
                                <input type="file" id="upload_imagem" onChange={(e) => setImage(e.target.files[0])} />
                                <input id="input-button" type="submit" value="Salvar" />
                            </form>
                        </div>
                    </div>
                </section>
    
            </>
        )
}