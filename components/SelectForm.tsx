import {ProfIconCheck} from "../components/Icons";
import styled from "styled-components";

const SelectFormStyled = styled.div`
	display: grid;
	gap: 2rem;
	
`
const SelectFormItemStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr auto auto;
	gap: 3rem;
	padding: 1.5rem;
	align-items: center;
	border: 1px solid var(--color-primary);
	cursor: pointer;
	.prof-item__content {
		span {
			font-weight: 400;
			font-size: 28px;
			line-height: 34px;
			margin-bottom: 8px;
		}
	}
	.prof-item__price {
		font-weight: 700;
		font-size: 24px;
		line-height: 29px;

	}
	svg {
		width: 1.75rem;
	}
`
export const SelectProf = () => {
    return (
        <SelectFormStyled>
            <SelectFormItemStyled className={'prof-item'}>
                <div className={'prof-item__content'}>
                    <span>Angella Kulangi</span>
                    <p>After your consultation, you will receive an email with a customized at-home skincare routine tailored to your needs.</p>
                </div>
                <div className={'prof-item__price'}>$600</div>
                <div className={'prof-item__icon'}><ProfIconCheck /></div>
            </SelectFormItemStyled>
            <SelectFormItemStyled className={'prof-item'}>
                <div className={'prof-item__content'}>
                    <span>Total skin Esthetician</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, ipsum tempor quisque risus consequat enim aliquam.</p>
                </div>
                <div className={'prof-item__price'}>$250</div>
                <div className={'prof-item__icon'}><ProfIconCheck /></div>
            </SelectFormItemStyled>
        </SelectFormStyled>
    )
}