import Link from "next/link";
import { LogoIcon } from './Icons';
import styled from "styled-components";

const LogoA = styled.div`
  align-content: center;
  display: flex;
  align-self: center;
	min-width: 200px;
  grid-column: 2/span 3;
	@media screen and (max-width: 1024px) {
		min-width: 160px;
		grid-column: 2/span 2;
	}
  a {
    display: inline-block;
    flex: 1 auto;
    max-width: 15em;
    border-bottom: 0;
    &:hover, &:focus, &:focus-within {
      border: 0;
    }
  }
`

const Logo = () =>
  <Link href={'/'}>
	  <LogoA>
		  <a>
		    <LogoIcon />
		  </a>
	  </LogoA>
  </Link>

export default Logo