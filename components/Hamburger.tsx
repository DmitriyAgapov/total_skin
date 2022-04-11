import styled from "styled-components";
import {useState} from "react";


const HamburgerStyled = styled.div`
  font-size: 0.5em;
  margin: auto;
  width: 4em;
  height: 4em;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
	.line {
      display: block;
      position: absolute;
      height: 0.375em;
      width: 100%;
      background: var(--color-primary);
      border-radius: 0.25em;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);

      transition: .25s ease-in-out;
      &:nth-child(1) {
        top: 0;
        transform-origin: left center;
      }

      &:nth-child(2) {
        top: 1.25em;
        transform-origin: left center;
      }

      &:nth-child(3) {
        top: 2.5em;
        transform-origin: left center;
      }

	}

  &.is-active span:nth-child(1) {

    transform: rotate(45deg);
    top: -0.5em;
    left: 0.5em;
  }

  &.is-active span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.is-active span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 2.375em;
    left: 0.5em;
  }
  
`
const Hamburger = () => {
	const [open, setOpen] = useState('')
	const handleClick = () => {
		setOpen(open == 'is-active' ? '' : 'is-active')
	}
	return (
		<HamburgerStyled  className={open} onClick={handleClick}>
			<span className={'line'}/>
			<span className={'line'}/>
			<span className={'line'}/>

		</HamburgerStyled>
	)
}
export default Hamburger