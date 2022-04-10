import Logo from "./Logo";
import styled from "styled-components";
import {gridColumns, gridColumns_tablet, gridGap} from "./vars";
import Nav from "./Nav";
import UserBar from "./UserBar";
import {useWindowSize} from "../utils";

const HeaderStyled = styled.header`
  position: relative;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
	border-bottom: 2px solid  #232B49;
  top: 0;

  display: grid;
  grid-template-columns: calc((100vw - 109rem - ${gridGap}) / 2) ${gridColumns} calc((100vw - 109rem - ${gridGap}) / 2);
  @media screen and (max-width: 1024px){
    grid-template-columns: calc((100vw - 109rem - ${gridGap}) / 2) ${gridColumns_tablet} calc((100vw - 109rem - ${gridGap}) / 2);
  }
  gap: 0 ${gridGap};
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
const Header = () => {
	const screen = useWindowSize().viewPort
	console.log(screen)
	return (
	<HeaderStyled>
		<Logo />
		{(screen.desktop || screen.wideDesktop) ? <Nav /> : null}
		<UserBar />
	</HeaderStyled>
	)
}
export default Header;