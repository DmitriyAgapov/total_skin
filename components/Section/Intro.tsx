import React from "react";
import styled from "styled-components";
import {gridColumns, gridGap} from "../vars";
import Image from 'next/image'
import Section from "./Section";
import {IntroLogoIcon} from "../Icons";
import background from '../../assets/images/images/intro@1x.jpg';
import SectionStyled from "./Section";

const SectionIntro = styled.section`
  overflow: hidden;
  position: relative;
  display: grid;
  z-index: 1;
  grid-template-columns: calc((100vw - 108rem - ${gridGap}) / 2) ${gridColumns} calc((100vw - 108rem - ${gridGap}) / 2);
  gap: 0 ${gridGap};
  & + & {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
	grid-template-rows: 1.5fr 1fr 1fr  1fr 1fr;
	//grid-template-rows: 12.5em 6.25em 6.25em 6.25em 6.25em;
 
`
const BackgroundWrap = styled.div`
  grid-column: 1/-1;
  grid-row: 1/5;
  z-index: -1;
  position: relative;
`;

const LogoBigWrap = styled.div`
  grid-column: 2/10;
  grid-row: 2/4;
  z-index: 2;
  align-self: end;
`;
const TextWrapBefore = styled.div`
  grid-column: 1/8;
  grid-row: 3/6;
  background: #3A4262;

  z-index: 1;

`;
const TextWrap = styled.div`
  grid-column: 2/8;
  grid-row: 4/6;

  color: #FEFEFF;

  z-index: 1;
  display: flex;
  p {
    margin: 2em 2em 0 auto;
  	font-size: 1.25em;
    max-width: 43.375em;
  }
`;

const Intro = () => {
	return(
	<SectionIntro>
		<BackgroundWrap>
			<Image
				src={background}
				alt={"background"}

				layout="fill"
				objectFit="cover"
				objectPosition={'0 50%'}

		       quality={100}/>
		</BackgroundWrap>
		<LogoBigWrap>
			<IntroLogoIcon/>
		</LogoBigWrap>
		<TextWrapBefore/>
		<TextWrap>
			<p>
			If you’ve followed along with the leaks in recent weeks, none of the new features will surprise you. It’s also not a huge surprise that Google is bringing some features from Inbox over to Gmail. What did surprise me while trying out the new service ahead of today’s launch, though, is that some features that didn’t get a lot of attention in the l
			</p>
		</TextWrap>

	</SectionIntro>
	)}

export default Intro