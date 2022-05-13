// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import {Controller, Grid, FreeMode, Navigation, Thumbs} from "swiper";
import {useSwiper} from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/navigation";
import styled from "styled-components";
import "swiper/css/free-mode";
import {ArrowIcon} from "./Icons";
import React, {ReactElement, JSXElementConstructor, ReactFragment, useState} from 'react';
import CardArticle from "./Cards/CardArticle";
import css from "styled-jsx/css";
import "swiper/css/thumbs";

const GalleryProductStyled = styled.div`

  grid-column: 1/6;

  grid-row: 1/4;
  //max-width: 100vw;

  .swiper-wrapper {
    flex-direction: row;
  }


  .product__thumbs  {
    margin-right: 10rem;
    margin-top: -6rem;
  }
  .gallery__wrapper {
    position: sticky;
    top: 50px;
  }
  .controls {
    display: flex;
    align-items: center;
    padding: 2em;
    max-width: fit-content;
    gap: 1.5em;
    margin-left: auto;


    .arrow {
      border-radius: 50%;
      display: inline-block;
      width: 3em;
      height: 3em;

      svg {
        #Bg {
          fill: white;
        }

        #Shape {
          fill: var(--color-primary);
        }
      }

      position: relative;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);

      &:hover {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

        svg {
          #Bg {
            fill: var(--color-primary);
          }

          #Shape {
            fill: white;
          }
        }
      }

      &.arrow__prev {
        #Shape {
          transform: rotate(180deg);
          transform-origin: center;
        }
      }
    }
  }
`


export function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <a className={'arrow arrow__next'} onClick={() => swiper.slideNext()}><ArrowIcon/></a>
    );
}

export function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <a className={'arrow arrow__prev'} onClick={() => swiper.slidePrev()}><ArrowIcon/></a>
    );
}

const GalleryProduct = ({images}) => {
    const testGallery: string | number | boolean | any[] | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined = []


    if (images !== undefined) {
        for (let i = 0, c = images.length; i < c; i++) {
            testGallery.push(
                <SwiperSlide key={i}>
                    <Image src={images[i].image} layout={'responsive'} width={'16rem'} height={'10rem'} objectFit={'scale-down'}/>
                </SwiperSlide>
            )
        }

    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <GalleryProductStyled>

            <div className={'gallery__wrapper'}>

            <Swiper
                spaceBetween={40}
                slidesPerView={ "auto" }
                loop={true}
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
            >
                {testGallery}

                <div className={'controls'}>
                    <SlideNextButton/>
                    <SlidePrevButton/>
                </div>
            </Swiper>
            <div className={'product__thumbs'}>
                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                >
                    {testGallery}
                </Swiper>

            </div>
            </div>

        </GalleryProductStyled>
    );
};

export default GalleryProduct