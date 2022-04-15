// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import {Controller, Grid, Navigation} from "swiper";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/navigation";
import styled from "styled-components";

import {ArrowIcon} from "./Icons";

const GalleryStyled = styled.div`
  grid-column: 1/-1;
  max-width: 100vw;

  .swiper-wrapper {
    flex-direction: row;
  }

  .swiper-slide {
    height: 36em;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      background-color: rgba(43, 63, 136, 0.4);
    }

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.1);
    }

  }

  .swiper-slide-prev {
    transform: scale(0.875) translate(-42.5%);
    z-index: 1;
    overflow: hidden;
    transition: transform 0.75s cubic-bezier(.45, .05, .55, .95);
  }

  .swiper-slide-next {
    transform: scale(0.875) translate(42.5%);
    z-index: 0;
    overflow: hidden;
    transition: transform 0.75s cubic-bezier(.45, .05, .55, .95);
  }

  .swiper-slide-active {
    transform: scaleX(1.875) translate(0);
    z-index: 2;
    overflow: visible;
    transition: transform 0.75s cubic-bezier(.45, .05, .55, .95);
  }

  .controls {
    display: flex;
    align-items: center;
    padding: 2em;
    max-width: fit-content;
    gap: 1.5em;

    margin: 2em 5em 2em auto;

    .arrow {
      border-radius: 50%;
      display: inline-block;
      width: 3em;
      height: 3em;

      svg {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);

        #Bg {
          fill: white;
        }

        #Shape {
          fill: var(--color-primary);
        }
      }

      position: relative;

      &:hover {


        svg {

          #Bg {
            fill: var(--color-primary);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

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
		<a className={'arrow arrow__next'}  onClick={() => swiper.slideNext()}><ArrowIcon/></a>
	);
}
export function SlidePrevButton() {
	const swiper = useSwiper();
	return (
		<a className={'arrow arrow__prev'} onClick={() => swiper.slidePrev()}><ArrowIcon/></a>
	);
}

const GalleryCentered = ({images}) => {

	const testGallery = []
	for (let i = 0, c = images.length; i < c; i++ ) {
		testGallery.push(
				<SwiperSlide key={i}>
					<Image src={images[i].src} layout={'fill'} objectFit={"cover"} objectPosition={'center'} width={images[i].width} height={images[i].height}/>
				</SwiperSlide>

		)
	}

	return (
		<GalleryStyled>
		<Swiper
			spaceBetween={20}
			slidesPerView={3}

			style={{width: '100vw'}}
			// onSlideChange={() => console.log('slide change')}
				centeredSlides={true}
			centeredSlidesBounds={true}
			modules={[ Navigation, Controller]}
			// onSwiper={(swiper) => console.log(swiper)}

		>
			{testGallery}
			{testGallery}
			<div className={'controls'}>
			<SlideNextButton />
			<SlidePrevButton />
			</div>
		</Swiper>


		</GalleryStyled>
	);
};

export default GalleryCentered