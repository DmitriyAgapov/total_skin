import Section from '../components/Section/Section';
import Block from "../components/Block/Block";
import {SelectProf} from "../components/SelectForm";

export default function ConsultationPage() {
	return (<>
			<Section variant={"section-page section-page__consultation"}>
				<h1>Online consultation</h1>
				<Block subtitle={'Virtual Skincare Consultation with Angella Kullangi'}
					   description={<div>Joanna Czech and her team believe that the key to beautiful skin is a long term approach that incorporates a seasonal skincare routine and a healthy lifestyle rather than short term quick fixes.  When you purchase a 60-minute virtual consultation, you and Joanna will discuss your skincare goals, analyze and evaluate your skin condition. After your consultation, you will receive an email with a customized at-home skincare routine tailored to your needs. Half of the consultation cost will be issued as a gift.</div>}/>
				<Block title={'Which professional'} subtitle={'Analysis of your skin’s specific needs'}
					   description={<div>Joanna Czech and her team believe that the key to beautiful skin is a long term approach that incorporates a seasonal skincare routine and a healthy lifestyle rather than short term quick fixes.  When you purchase a 60-minute virtual consultation, you and Joanna will discuss your skincare goals, analyze and evaluate your skin condition. After your consultation, you will receive an email with a customized at-home skincare routine tailored to your needs. Half of the consultation cost will be issued as a gift.</div>}>
					<SelectProf/>

				</Block>


			</Section>
		</>
	);
}
export async function getStaticProps() {
	let page = {
		type: 'about',
	}

	return {
		props: {
			page
		}
	};
}