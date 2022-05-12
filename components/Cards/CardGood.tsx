import {gridColumns, gridGap} from "../vars";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardGoodStyled = styled.div

    `
      //grid-column: 2/-2;
      //display: grid;
        //grid-template-columns: ${gridColumns} ;
        //gap: ${gridGap};
      .imgBg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        span {
          position: revert !important;
        }
      }

      position: relative;
      padding: 5rem 4rem;

      h2 {
        grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `span 4` : `span 4`)};
      }

      .description {
        grid-column: ${((props: { title: any; }) => (typeof props?.title == "object") ? `6/span 7` : `span 8`)};
        //font-size: 125%;
        //padding:  1em 2em;
      }
    `;

const CardGood = ({title = null, description = null, img = null, link = null}) => {


    return (
        <CardGoodStyled>
            {title ? <h2>{title}</h2> : null}

            {description ? <div className={'description'}

                                data-type={typeof title}>{description}</div> : null}
            <div className={'imgBg'}>
                <Image src={img.src} width={img.width} height={img.height}/>
            </div>
            {link ?
                <Link href={link}>
                    <a className={'button button-primary'}>More</a>
                </Link>
                : null}
        </CardGoodStyled>
    )
}
export default CardGood