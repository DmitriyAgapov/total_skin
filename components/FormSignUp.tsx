import * as React from 'react';
import FormControl, {useFormControl} from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import {Button, TextField} from "@mui/material";
import styled from "styled-components";
import {ButtonUnstyled} from "@mui/base";
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import {useAuth} from "./auth";
import {useState} from "react";

const ModalWrapper = styled.div`
    .tab__label {
        background: transparent;
        border: 0;
        font-size: 1.5rem;
        color: #FAFAFA;
        margin-bottom: 2rem;
        &[tabindex="-1"] {
            color: #9DAFBD;
        }
    }
`
const FormWrapper = styled.div`
  display: grid;
  gap: 1em;

  .form__input {
    border-color: white;

    input {
      background-color: #535E8B;
      color: white;

      box-shadow: none !important;

      ::placeholder {
        color: white;

      }
    }
  }

  .form__text {
    p {
      margin: 0;
    }

    color: #9DAFBD;
    font-size: .75rem
  }
    .form__action {
        display: flex;
        button {
            flex: 1;
            justify-self: center;
            min-width: 100%;
        }
    }
  

`

function FormSignIn() {
	const auth = useAuth();
	const [login, setLogin] = useState(false);
	const [email, setEmail] = useState('admin@demo.com');
	const [password, setPassword] = useState('password');
	const [error, setError] = useState('');

	const signIn = async () => {
		if (!auth.ready) {
			setError('Auth is not ready, try again in a moment.');
			return;
		}
		if (!email.length || !password.length) {
			setError('Please enter a username and password.');
			return;
		}
		setError('');
		const result = await auth.signIn({ email, password });
		if (result.success) {
			// FIXME: there's a cache issue with Urql where it's not reloading the
			// current user properly if we do a client-side redirect here.
			setLogin(true)
			console.log('Succes')
			console.log(result.success)
			// router.push('/');
			// top.location.href = '/';
		} else {
			setEmail('');
			setPassword('');
			setError(result.message);
		}
	};
	return <Box component="form" noValidate autoComplete="off" onSubmit={event => {
		event.preventDefault();
		signIn();}}>
		<FormWrapper className={"form__twocol"}>
			<TextField placeholder="Email" variant="outlined" className={"form__input"} value={email}
			           onChange={event => {
				           setEmail(event.target.value);
			           }}/>
			<TextField placeholder="Password" type={"password"} variant="outlined" className={"form__input"} value={password}
			           onChange={event => {
				           setPassword(event.target.value);
			           }}/>
			<div className={"form__text"}>
				<p>By clicking any social and Sign up button you are agree with <a href={"#"}>Terms &
					Conditions</a> and <a href={"#"}>Privacy Policy</a></p>
			</div>
			<div className={"form__action"}>
				<ButtonUnstyled type={"submit"} className={"button button-primary button-block"}>Sign
					In</ButtonUnstyled>
			</div>
		</FormWrapper>
	</Box>;
}

const FormSignUp = () => {
	return (
        <ModalWrapper>
	        <TabsUnstyled defaultValue={0}>
		        <TabsListUnstyled>
			        <TabUnstyled className={'tab__label'}>SignUp</TabUnstyled>
			        <TabUnstyled className={'tab__label'}>Login</TabUnstyled>
		        </TabsListUnstyled>
		        <TabPanelUnstyled value={0}>
			        <Box component="form" noValidate autoComplete="off">
				        <FormWrapper className={'form__twocol'}>
					        <TextField placeholder="Name" variant="outlined" className={'form__input'}/>
					        <TextField placeholder="Last name" variant="outlined" className={'form__input'}/>
					        <TextField placeholder="Email" variant="outlined" className={'form__input'}/>
					        <TextField placeholder="Phone" variant="outlined" className={'form__input'}/>
					        <TextField placeholder="Password" type={'password'} variant="outlined"
					                   className={'form__input'}/>
					        <div className={'form__text'}>
						        <p>By clicking 'Sign up' you agree to the Total Skin<a href={'#'}>Terms &
							        Conditions</a> and <a href={'#'}>Privacy Policy</a></p>
					        </div>
					        <div className={'form__action'}>
						        <ButtonUnstyled type={"submit"} className={'button button-primary button-block'}>Sign
							        up</ButtonUnstyled>
					        </div>
				        </FormWrapper>
			        </Box>
		        </TabPanelUnstyled>
		        <TabPanelUnstyled value={1}>
			        <FormSignIn/>
		        </TabPanelUnstyled>
	        </TabsUnstyled>
        </ModalWrapper>
	);
}
export default FormSignUp