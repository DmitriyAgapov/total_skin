import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import {Button, TextField} from "@mui/material";
import styled from "styled-components";
import {ButtonUnstyled} from "@mui/base";
//
// function MyFormHelperText() {
//     const { focused } = useFormControl() || {};
//
//     const helperText = React.useMemo(() => {
//         if (focused) {
//             return 'This field is being focused';
//         }
//
//         return 'Helper text';
//     }, [focused]);
//
//     return <FormHelperText>{helperText}</FormHelperText>;
// }
const FormWrapper = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 1fr;
  
`
const FormGetIn = () => {
    return (
        <Box component="form" noValidate autoComplete="off">
            <FormWrapper className={'form__twocol'}>
                <TextField placeholder="Name" variant={"outlined"}/>
                {/*<MyFormHelperText />*/}

                <TextField placeholder="Surname" />
                {/*<MyFormHelperText />*/}

                <TextField placeholder="Email" />
                {/*<MyFormHelperText />*/}

                <TextField placeholder="Phone" />
                {/*<MyFormHelperText />*/}
   
                <TextField
                    style={{gridColumn: '1/-1'}}
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={4}

                    variant="outlined"
                />
                <ButtonUnstyled type={"submit"} className={'button button-primary button-block'}>Send</ButtonUnstyled>
            </FormWrapper>


        </Box>
    );
}
export default FormGetIn