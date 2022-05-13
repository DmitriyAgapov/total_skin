// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import {Controller, Grid, Navigation} from "swiper";
import {useSwiper} from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/navigation";
import styled from "styled-components";

import {ArrowIcon} from "./Icons";
import React, {ReactElement, JSXElementConstructor, ReactFragment} from 'react';
import CardArticle from "./Cards/CardArticle";
import css from "styled-jsx/css";

const GalleryStyled = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "article":
        return `
          .swiper-slide > div {
       
            position: relative;

            &:before {
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 1;
              // background-color: rgba(43, 63, 136, 0.4);
            }

            &:after {
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 2;
              // background-color: rgba(0, 0, 0, 0.1);
            }

          }

          .swiper-slide-prev  > div {
            transform: scale(0.75) translate(-42.5%);
            z-index: 1;
            overflow: hidden;
            transition: all 0.75s cubic-bezier(.45, .05, .55, .95);
          }

          .swiper-slide-next  > div {
            transform: scale(0.75) translate(42.5%);
            z-index: 0;
            overflow: hidden;
            transition: all 0.75s cubic-bezier(.45, .05, .55, .95);
          }

          .swiper-slide-active > div {
            transform: scaleX(187.5%) translate(0);
            z-index: 2;
            overflow: visible;
            transition: all 0.75s cubic-bezier(.45, .05, .55, .95);
          } 
          .swiper-slide-active  h2, .swiper-slide-active  .description > *, .swiper-slide-active .button   {
       transform: scale(53.4%, 94%) translate(0);
  transform-origin: 0 0;
            // z-index: 2;
            overflow: visible;
            transition: transform 0.75s cubic-bezier(1.45, .25, .55, .95);
          }
        `
    
    ;
  default:
    return `
  .swiper-slide {

    max-width: 340px;

    &.article-slide {
      max-width: initial;
    }
  }

 
    `;
  }
  }}
  grid-column: 1/-1;
  max-width: 100vw;

  .swiper-wrapper {
    flex-direction: row;
  }

  

  .controls {
    display: flex;
    align-items: center;
    padding: 2em;
    max-width: fit-content;
    gap: 1.5em;
    margin-left: auto;
    margin-right: 5em;
position: relative;
    z-index: 100;

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

const Gallery = ({images, imgtwo, articles}) => {
    const testGallery: string | number | boolean | any[] | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined = []
    const testGalleryTwo = []

    if (images !== undefined) {
        for (let i = 0, c = images.length; i < c; i++) {
            testGallery.push(
                <SwiperSlide key={i}>
                    <Image src={images[i].src} layout={'responsive'} width={'16rem'} height={'10rem'} objectFit={'scale-down'}/>
                </SwiperSlide>
            )
        }
        for (let i = 0, c = imgtwo.length; i < c; i++) {
            testGallery.push(
                <SwiperSlide key={i + 25}>
                    <Image src={imgtwo[i].src} layout={'responsive'}width={'16rem'} height={'10rem'} objectFit={'scale-down'}/>
                </SwiperSlide>
            )
        }
    } else if (articles) {
        for (let i = 0, c = articles.length; i < c; i++) {
            testGallery.push(
                <SwiperSlide className={(!articles) ? 2 : 'article-slide'} key={i + 25}>
                    <CardArticle title={'title'}
                                 description={<p>If you’ve followed along with the leaks in recent <a>weeks</a>, none of the new
                                     features will surprise you. It’s also not a huge surprise that Google is bringing some
                                     features from Inbox over to Gmail. What did surprise me while trying out the new service
                                     ahead of today’s launch, though, is that some features that didn’t get a lot of attention in
                                     the leaks, including the new consistent </p>} img={articles[i].img} link={articles[i].link}/>
                </SwiperSlide>
            )
        }
    }

    return (
        <GalleryStyled $mode={articles ? 'article' : null}>
            <Swiper
                spaceBetween={articles ? 60 : 40}
                slidesPerView={!articles ? "auto" : 3}
                centeredSlides={!articles ? false : true}
                // centeredSlidesBounds={true}
                grid={{
                    rows: (articles) ? 1 : 2,
                    fill: "row"
                }}



                // onSlideChange={() => console.log('slide change')}
                modules={[Grid, Navigation, Controller]}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {testGallery}


                <div className={'controls'}>
                    <SlideNextButton/>
                    <SlidePrevButton/>
                </div>
            </Swiper>


        </GalleryStyled>
    );
};

export default Gallery