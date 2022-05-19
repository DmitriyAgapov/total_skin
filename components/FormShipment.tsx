import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
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
  .form__checkbox {
    grid-column: 1/-1;
    label {
      max-width: fit-content;
    }
  }
  
`
const FormShipmentDetails = () => {
    return (
        <Box component="form" noValidate autoComplete="off">
            <FormWrapper className={'form__twocol'}>
                <TextField placeholder="Street Address" variant={"outlined"}/>
                {/*<MyFormHelperText />*/}

                <TextField placeholder="Appartment/Unit" />
                {/*<MyFormHelperText />*/}

                <TextField placeholder="City/Town" />
               <TextField placeholder="State" />
                <TextField placeholder="Zip code" />
                <FormGroup className={'form__checkbox'}>
                    <FormControlLabel control={<Checkbox  />} label="Save address and contact information for future orders
" />
                    <FormControlLabel control={<Checkbox />} label="My billing and delivery information are the same." />
                </FormGroup>
                <ButtonUnstyled type={"submit"} className={'button button-primary button-block'}>Continue to payment</ButtonUnstyled>
            </FormWrapper>
        </Box>
    );
}
export default FormShipmentDetails