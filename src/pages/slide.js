import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Link from 'next/link';
import styles from '@/styles/slide.module.css';
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react';
export default function Slide(){
    const [produto, setProduto] = useState([{"foto":""}]);
    useEffect(()=>{
        fetch("http://localhost:8080/admin/list-slides",{
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
                <Link href="/melhor-esporte"><Image key={index} className={styles.img_slide} src={slide.foto} width={2880} height={750} alt='imagem promoção'/> </Link>
                </SwiperSlide>        
            ))
           } 
        {/* <SwiperSlide className={styles.slide_item}>
        <Link href="/melhor-esporte"><Image className={styles.img_slide} src={require('./imagens/desk_1400x400.jpg')} alt='imagem promoção'/> </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide_item}>
        <Link href="/melhor-esporte"><Image className={styles.img_slide} src={require('./imagens/Desk_1400x400_V2.jpg')} alt=""/></Link>
        </SwiperSlide> */}
        </Swiper>
        </>
    )

}