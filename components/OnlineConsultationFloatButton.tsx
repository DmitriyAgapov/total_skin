// @ts-ignore
import styled from "styled-components";

const OnlineConsultationFloatButtonStyled = styled.div`
  a {
    transform: rotateZ(180deg);
  border: 0px solid transparent;
  position: fixed;
  z-index: 100;
  writing-mode: vertical-rl;
  top: 50%;
  width: 4rem;
  background: white;
  right: 0;
  display: grid;
  flex-flow: row-reverse;
    grid-template-columns: auto 1fr;
  height: initial;
  min-width: inherit;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
    &:hover {
      color: inherit;
      background-color: white;
      border-color: transparent;
      border: 0px solid transparent;
    }
    span {
      margin: 1rem;
    }
    svg {
      width: 4rem;
      height: auto;
      flex: 1;
    }
  }
`
const OnlineConsultationFloatButton = () => {
    return (
        <OnlineConsultationFloatButtonStyled className={'float-button'}>
            <a href={'/consultation'} className={'button button-float'}><svg width="77" height="49" viewBox="0 0 77 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_679_3951)">
                    <rect width="48" height="77" transform="translate(0 48.9551) rotate(-90)" fill="#232B49"/>
                    <path d="M26.5 12.9551L26.5 36.9551L47.0714 36.9551L47.0714 27.9551L50.5 24.9551L47.0714 21.9551L47.0714 12.9551L26.5 12.9551Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34.0415 17.7543L39.5272 17.7543M34.0415 32.1543L39.5272 32.1543L34.0415 32.1543ZM31.9844 27.3543L41.5844 27.3543L31.9844 27.3543ZM35.4129 22.5543L38.1558 22.5543L35.4129 22.5543Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_679_3951">
                        <rect width="48" height="77" fill="white" transform="translate(0 48.9551) rotate(-90)"/>
                    </clipPath>
                </defs>
            </svg>
               <span> Online consultation</span></a>
        </OnlineConsultationFloatButtonStyled>
    )
}
export default OnlineConsultationFloatButton