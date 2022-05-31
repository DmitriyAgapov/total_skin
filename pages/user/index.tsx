import Section from "../../components/Section/Section";

import {BlockProduct} from "../../components/Block/BlockProduct";
import {BasicTabs} from "../../components/Tab";
import React from "react";

const UserPage = () => {
    return (
        <Section variant={'section-page page__user'}>
            <BasicTabs />
        </Section>
    )
}
export default UserPage