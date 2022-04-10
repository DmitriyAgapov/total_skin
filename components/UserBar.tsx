import styled from "styled-components";
import {CartIcon, FavIcon, SearchIcon, UserIcon} from "./Icons";
import Link from 'next/link'

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  color: var(--text__-botton-2);
  padding: .75em 1em;
  text-decoration: none;
  font-size: 1em;
  height: 3em;
  line-height: 0.875em;
  border: 1px solid transparent;
  background: transparent;
  transition-duration: .35s;
	svg {
	  width: 1.5em;
	  height: 1.5em;
	}
  `;
const UserBarStyled = styled.div`
  grid-column: span 6;
  display: flex;
  gap: 2em;
  justify-content: space-between;
  .search {
    flex: 1 1 auto;
    position: relative;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .button-primary {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .icons_bar {
    flex: 0;
    display: flex;
    gap: 2em;
    justify-content: end;
    margin-left: auto;
  }  padding: 0 2em;
  a {
    flex: 1 100%;
    border-bottom: 1px solid transparent;
	align-self: center;
   
    svg {
   		fill: transparent;
      	color: currentColor;
    	width: 2em;
 		height: 2em;
     
    }
    &:hover {
      color: var(--color-primary-hov);
      svg {
        height: calc(2em * 1.125);
        scale: 1.125;
        transform: translate(scaleX(1.125) scaleY(1.125));        
        transition-duration: .15s;
      }
    }
  }
`
const LinkStyled = styled.a`
  &.button {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

`
const UserBar = () =>
	<UserBarStyled>
		<form className={'search'}><input type={"search"} placeholder={'Search'} onSubmit={(event => console.log('search'))} /><Button type={"submit"} ><SearchIcon /></Button></form>
		<Link href={'#'}><LinkStyled className={'button button-primary'}>Sign up</LinkStyled></Link>
		<div className={'icons_bar'}>
		<Link href={'#'}><LinkStyled><UserIcon /></LinkStyled></Link>
		<Link href={'#'}><LinkStyled><FavIcon /></LinkStyled></Link>
		<Link href={'#'}><LinkStyled><CartIcon /></LinkStyled></Link>
		</div>
	</UserBarStyled>

export default UserBar