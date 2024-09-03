
import Image from 'next/image';
import NavBar from './Navbar';
import Script from "./Script";
import Produtos from "./Produtos";
import ProdutosLancamentos from "./ProdutosLancamento";

function MelhorEsporte(){
    return(
        <>
        
        <NavBar></NavBar>
        <div className="corra-com-dkmodas">  
            <ProdutosLancamentos target="/nikerevolution" img={<Image src={require("./imagens/download.jpeg")} alt="Tênis nike revolution 7"/>} nome="Tênis nike revolution 7 - Masculino" edicao="Lançamento" precoAntigo="R$ 399,99" precoNovo="R$ 299,99 no pix" outrasCores="Mais opções de cores"/>
            <ProdutosLancamentos target="/mizunowave" img={<Image src={require("./imagens/images.jpeg")} alt="Mizuno wave dinasty 6"/>} nome="Tênis mizuno wave dynasty 6 - Feminino" edicao="Lançamento" precoAntigo="R$ 499,99" precoNovo="R$ 314,99 no pix" parcelado="ou 4x de R$ 87,50 " outrasCores="Mais opções de cores"/>         
            <ProdutosLancamentos target="/literacer" img={<Image src={require("./imagens/images (1).jpeg")} alt="tenis lite racer 3.0"/>} nome="Tênis adidas Liter Racer 3.0 - Masculino" edicao="Lançamento" precoAntigo="R$ 349,99" precoNovo="R$ 206,99 no pix" parcelado="ou 3x de R$ 76,66 " outrasCores="Mais opções de cores"/>
            <ProdutosLancamentos target="/agasalho-oxer" img={<Image src={require("./imagens/984844IJ.jpeg")} alt="agasalho oxer"/>} nome="Conjunto de Agasalho Oxer Feminino" edicao="Lançamento" precoAntigo="R$ 199,99" precoNovo="R$ 125,99 no pix" outrasCores="Mais opções de cores"/>
            <Produtos target="/nike-zoom" img={<Image src={require("./imagens/nike zoom fundo branco.jpeg")} alt="nike zoom"/>} nome="Tênis Nike Air Zoom Tr 1 - Masculino" precoAntigo="R$ 899,99" precoNovo="R$ 519,99 no pix" parcelado="ou 7x de R$ 74,28" cor="Cor única"/>
            <Produtos target="/chuteira-nike" img={<Image src={require("./imagens/M0XF1Y08.jpeg")} alt="chuteira nike"/>} nome="Chuteira Society Nike Phantom GX Academy - Adulto" precoAntigo="R$ 699,99" precoNovo="R$ 339,99 no pix" parcelado="ou 4x de R$ 85,00" cor="Cor única"/>
            <ProdutosLancamentos target="/nike-legend" img={<Image src={require("./imagens/M12DNG03.jpeg")} alt="olimpicos flit 3"/>} nome="Nike Legend Essential 3 Next Nature - Masculino" edicao="Lançamento" precoAntigo="R$ 549,99" precoNovo="R$ 279,99 no pix" parcelado="ou 3x de R$ 93,33" outrasCores="Mais opções de cores"/>
            <ProdutosLancamentos target="/olimpicos-cores" img={<Image src={require("./imagens/olimpicos.jpeg")} alt="olimpicos flit 3"/>} nome="Tênis Olympikus Flit 3 - Feminino" edicao="Lançamento" precoAntigo="R$ 249,99" precoNovo="R$ 179,99 no pix" parcelado="ou 2x de R$ 100,00" outrasCores="Mais opções de cores"/>
            <Produtos target="/bola-adams" img={<Image src={require("./imagens/bola.jpeg")} alt="mizzuno cool"/>} nome="Bola de Futebol Adams classNameic - Adulto" precoAntigo="R$ 69,99" precoNovo="R$ 35,99 no pix" parcelado="ou 1x de R$ 39,99" cor="Cor única"/>
            <Produtos target="/challenger" img={<Image src={require("./imagens/mizzuno cool.jpeg")} alt="mizzuno cool"/>} nome="Tênis Olympikus Challenger 4 - Adulto" precoAntigo="R$ 299,99" precoNovo="R$ 199,99 no pix" parcelado="ou 2x de R$ 100,00" cor="Cor única"/>
            <Produtos target="/olympikus-volt" img={<Image src={require("./imagens/olimpicos volt.jpeg")} alt="olimpicos volt"/>} nome="Tênis Olympikus Volt - Feminino" precoAntigo="R$ 249,99" precoNovo="R$ 129,99 no pix" cor="Cor única"/>
            <Produtos target="/dinasty5" img={<Image src={require("./imagens/M0N8AS02.jpeg")} alt="Mizuno cool ride"/>} nome="Tênis Mizuno Cool Ride - Masculino" precoAntigo="R$ 349,99" precoNovo="R$ 229,99 no pix" parcelado="ou 3x de R$ 76,66" cor="Cor única"/>
            <Produtos target="/cool-ride" img={<Image src={require("./imagens/mizuno.jpeg")} alt="mizuno"/>} nome="Tênis Mizuno Wave Dynasty 5 - Masculino" precoAntigo="R$ 499,99" precoNovo="R$ 279,99 no pix" parcelado="ou 3x de R$ 93,33" cor="Cor única"/>
            <Produtos target="/cool-ride2" img={<Image src={require("./imagens/mizzuno cool.jpeg")} alt="mizzuno cool"/>} nome="Tênis Mizuno Cool Ride - Masculino" precoAntigo="R$ 349,99" precoNovo="R$ 229,99 no pix" parcelado="ou 3x de R$ 76,66" cor="Cor única"/>
            <Produtos target="/rapidmove" img={<Image src={require("./imagens/didas rapidmove.jpeg")} alt="adidas rapidmove"/>} nome="Tênis adidas Rapidmove Adv - Masculino" precoAntigo="R$ 799,99" precoNovo="R$ 479,99 no pix" parcelado="ou 6x de R$ 80,00" cor="Cor única"/>
            <Script/>
            </div>
            
        </>
    
    )
}
export default MelhorEsporte;