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
        fetch("http://localhost:8080/admin/list-slides",{
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
        ]} className={styles.swiper_container}  navigation={true} pagination={{clickable:true}} autoplay={{delay:5000}}>
           {
            produto.map((slide,index)=>(   
                <SwiperSlide key={index} className={styles.slide_item}>
                { slide && slide.foto ?
                <Link href="/melhor-esporte"><Image  className={styles.img_slide} src={slide.foto} priority width={1920} height={500} alt='imagem promoção'/> </Link>
                : (
                    <div className="d-flex justify-content-center ">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
                )
                }
                </SwiperSlide>        
            ))
           } 
        </Swiper>
        </>
    )

}