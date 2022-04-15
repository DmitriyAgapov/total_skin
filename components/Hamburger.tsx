import styled from "styled-components";
import React from "react";
import { observer, inject} from "mobx-react";


const HamburgerStyled = styled.div`
  font-size: 0.5em;
  margin: auto;
  width: 4em;
  height: 3em;
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
      height: 4px;
      width: 100%;
      background: var(--color-primary);
      border-radius: 0.5em;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);

      transition: .25s ease-in-out;
      &:nth-child(1) {
        top: 0;
        transform-origin: left center;
      }

      &:nth-child(2) {
        top: calc(1.5em - 2px);
        transform-origin: left center;
      }

      &:nth-child(3) {
        top: calc(3em - 4px);
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

    transform: rotate(-45deg);
    top: 2.375em;
    left: 0.5em;
  }
  
`

const Hamburger = inject('MenuStore')(observer(({MenuStore}) => {
		 return (
			<div>
				<a  onClick={()=> {MenuStore.Open.toggleState()}}>toggle</a>
				<a  onClick={()=> {MenuStore.Open.setOpen()}}>open</a>
				<a  onClick={()=> {MenuStore.Open.setClose()}}>close</a>
				<a    onClick={() => { MenuStore.Open.toggleState() }}>
				<HamburgerStyled className={MenuStore.Open.state ? 'is-active' : ''}>
					<span className={'line'}/>
					<span className={'line'}/>
					<span className={'line'}/>
				</HamburgerStyled>
				</a>
			</div>
		);

}));

export default Hamburger