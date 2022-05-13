import {gridColumns_tablet, gridGap} from "./vars";
import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import {FbIcon, InstaIcon} from "./Icons";
import Nav from "./Nav";

const FooterStyled = styled.footer`
  position: relative;
  padding-top: 3em;
	z-index: 20;
  //margin-top: -7em;
  padding-bottom: 4.5em;
  border-bottom: 2px solid #232B49;
  top: 0;
  display: flex;
	background-color: var(--color-primary);
  a {
    color: var(--color-primary-90);
    &:hover {
      color: var(--color-primary-80);
      border-bottom-color: var(--color-primary-80);
    }
  }
  .social {
    display: flex;
    gap: 1em;
    justify-content: end;
    margin-bottom: 2em;
  }
  color: white;
  svg {
    fill: white;
    path {
      fill: white;
    }
  }
  nav {
    flex: 1;
    justify-content: center;
    align-self: start;
  }
  &:before {
    content: '';
    display: block;
    width: calc((100vw - 109rem + 2.5em) / 2);
  }

  &:after {
    content: '';
    width: calc((100vw - 109rem + 2.5em) / 2);
    display: block;
  }

  .footer__left {
    flex-flow: wrap;

    > div {
      margin-bottom: 2.5em;
    }

    
  }
  .links {
    display: flex;
    gap: 1em;

    a {
      border-bottom: 0;
    }
  }

  //grid-template-columns: calc((100vw - 76rem) / 2) 1fr calc((100vw - 76rem) / 2);
  z-index: 100;

  &.header:not([class*="index"]) a {
    color: black;
  }

  &.header:not([class*="index"]) .logo {
    color: black;
  }

  &.header:not([class*="index"]) {
    position: relative;
  }`

const Footer = () => {
	return (
		<FooterStyled>
			<div className={'footer__left'}>
				<Logo/>
				<div className={'links'}>
					<Link href={'#'}><a>Term of service</a></Link>
					<Link href={'#'}><a>Privacy policy</a></Link>
				</div>

			</div>
			<Nav />

			<div className={'footer__right'}>
				<div className={'social'}>
				<Link href={'#'}><a><FbIcon/></a></Link>
				<Link href={'#'}><a><InstaIcon/></a></Link>
				</div>
				<div className={'links'}>
					<Link href={'#'}><a>Term of service</a></Link>
					<Link href={'#'}><a>Privacy policy</a></Link>
				</div>

			</div>
		</FooterStyled>
	)
}
export default Footer;