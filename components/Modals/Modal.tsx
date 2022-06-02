import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {observer} from "mobx-react-lite";
import {useStore} from "../StoreProvider";
import FormContactDetails from "../FormContactsDetails";
import FormSignUp from "../FormSignUp";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 375,
    minHeight: 575,
    backgroundColor: '#535E8B',
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = observer(function BasicModal(children) {
    const store = useStore()
    const handleOpen = () => store.menuStore.setOpenModal();
    const handleClose = () => store.menuStore.setCloseModal();

    return (
            <Modal
                open={store.menuStore.openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormSignUp />
                </Box>
            </Modal>

    );
})

export default BasicModal