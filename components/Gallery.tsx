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
  .controls {
    display: flex;
    align-items: center;
    padding: 2em;
    max-width: fit-content;
    gap: 1.5em;
    margin-left: auto;
    margin-right: 5em;
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
		<a className={'arrow arrow__next'}  onClick={() => swiper.slideNext()}><ArrowIcon/></a>
	);
}
export function SlidePrevButton() {
	const swiper = useSwiper();
	return (
		<a className={'arrow arrow__prev'} onClick={() => swiper.slidePrev()}><ArrowIcon/></a>
	);
}

const Gallery = ({images}) => {
	const testGallery = []

	for (let i = 0, c = 20; i < c; i++ ) {
		testGallery.push(
				<SwiperSlide key={i}>
					<Image src={images[0 || 1].src} layout={'responsive'} width={images[0 || 1].width} height={images[0 || 1].height}/>
				</SwiperSlide>
		)
	}

	return (
		<GalleryStyled>
		<Swiper
			spaceBetween={20}
			slidesPerView={7}
			grid={{
				rows: 2,
			}}
			style={{width: '100vw'}}
			// onSlideChange={() => console.log('slide change')}
			modules={[Grid, Navigation, Controller]}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			{testGallery}
			<div className={'controls'}>
				<SlideNextButton />
				<SlidePrevButton />
			</div>
		</Swiper>


		</GalleryStyled>
	);
};

export default Gallery