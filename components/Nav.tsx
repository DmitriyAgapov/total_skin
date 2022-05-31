import styled from "styled-components";
import Link from "next/link";
import * as React from "react";
import MenuStore from "../stores/options";
import {useStore} from "./StoreProvider";
import {useEffect} from "react";

const NavStyled = styled.nav`
  grid-column: span 2;
  display: flex;
  gap: 2em;
  ul {
    margin: 0 ;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2em;
    justify-content: space-between;
  }
  li {
    padding: 0;
    margin: 0;
    
  }
  a {
    align-self: center;
    border-bottom: 1px solid transparent;
    font-size: 1.25em;
    line-height: 2;
  }
`

const Nav = () => {
	const store = useStore()

	return store.menuStore.width > 1024 ? (
		<NavStyled>
			<ul>
				<li><Link href={'/shop'}><a>Shop</a></Link></li>
				<li><Link href={'/about'}><a>About</a></Link></li>
				<li><Link href={'/contacts'}><a>Contacts</a></Link></li>
			</ul>

		</NavStyled>
	) : null
}
export default Nav