import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Link from 'next/link';
import styles from '@/styles/slide.module.css';
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useContext, useEffect, useState } from 'react';
import { Context } from './contexto/UserContext';
export default function Slide(){
    const {header} = useContext(Context);
    const [produto, setProduto] = useState([{"foto":""}]);
    useEffect(()=>{
        fetch("http://100.71.232.95:8080/admin/list-slides",{
         headers:header   
        }).then((res)=>res.json())
        .then((dado)=>setProduto(dado)).then(()=>{
            
            let size = produto.length
            for(let i = 0;i<=size;i++){
                produto.push(i);
            }    
        })

    },[])

    return(
        <>
        <Swiper modules={[Navigation
            , Pagination, Autoplay
        ]} className={styles.swiper_container} slidesPerView={1} slidesPerGroup={1} navigation={true} pagination={{clickable:true}} autoplay={{delay:5000}} loop={true}>
           {
            produto.map((slide,index)=>(   
                <SwiperSlide className={styles.slide_item}>
                <Link href="/melhor-esporte"><Image key={index} className={styles.img_slide} src={slide.foto} width={1920} height={500} alt='imagem promoção'/> </Link>
                </SwiperSlide>        
            ))
           } 
        </Swiper>
        </>
    )

}