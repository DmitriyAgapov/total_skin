import { useRouter } from "next/router";
import styled from "styled-components";
import { useWindowSize} from "../utils";

const NavStyled = styled.nav`
  grid-column: span 3;
  display: flex; 
  gap: 2em;
  margin-right: 2em;
  justify-content: space-between;
  a {
    align-self: center;
    border-bottom: 1px solid transparent;
    font-size: 1.25em;
  }
`

const Nav = () => {
	return (
		<NavStyled>
			<a>Shop</a>
			<a>About</a>
			<a>Contacts</a>
		</NavStyled>
	)
}
export default Nav