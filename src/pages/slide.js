import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import Link from 'next/link';
import styles from '@/styles/slide.module.css';
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default function Slide(){
    return(
        <>
        <Swiper modules={[Navigation
            , Pagination, Autoplay
        ]} className={styles.swiper_container} navigation={true} pagination={{clickable:true}} autoplay={{delay:5000}} loop={true}>
            
        <SwiperSlide className={styles.slide_item}>
        <Link href="/melhor-esporte"><Image className={styles.img_slide} src={require('./imagens/desk_1400x400.jpg')} alt='imagem promoção'/> </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.slide_item}>
        <Image className={styles.img_slide} src={require('./imagens/Desk_1400x400_V2.jpg')} alt=""/>
        </SwiperSlide>
        </Swiper>
        </>
    )

}