import React from "react";
import Link from 'next/link';

const CustomLink = ({href, type, text}) => {
    return (
    <Link href={href}>
        <a className={`button button-${type}`}>{text}</a>
    </Link>
    )
}
export default CustomLink