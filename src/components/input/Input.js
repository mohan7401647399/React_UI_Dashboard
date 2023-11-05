import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { Form, InputGroup } from 'react-bootstrap';


export default function Input() {
    return (
        <InputGroup className="mb-4 mt-3 w-75 col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <InputGroup.Text><BsSearch /></InputGroup.Text>
            <Form.Control aria-label="Search" placeholder='Search' />
            <InputGroup.Text><IoMdNotificationsOutline/></InputGroup.Text>
        </InputGroup>
    )
}
