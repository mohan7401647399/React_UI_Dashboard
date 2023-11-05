import React from 'react';
import { MdEventAvailable, MdPayment, MdOutlineAssuredWorkload } from "react-icons/md";
import { AiOutlineMedicineBox, AiOutlineSetting } from "react-icons/ai";
import { BiMessageCheck, BiSolidDashboard, BiHelpCircle } from "react-icons/bi";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styled from 'styled-components';

export default function sidebar() {
    const Secion = styled.div`
    border-left: 4px solid blue;  
`
    return (
        <div className='p-auto'>
            <h2 className="text-primary p-2 m-1">Guvi Sales</h2>
            <ListGroup className='border-0'>
                <Secion>
                    <ListGroupItem className="text-primary border-top-0 border-end-0 border-bottom-0">
                        <BiSolidDashboard />
                        <span> Dashboard</span>
                    </ListGroupItem>
                </Secion>
                <ListGroupItem className='border-0'>
                    <MdEventAvailable />
                    <span> Lab Test</span>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <MdOutlineAssuredWorkload />
                    <span> Appointment</span>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <AiOutlineMedicineBox />
                    <span> Medicine Order</span>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <BiMessageCheck />
                    <span> Message</span>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <MdPayment />
                    <span> Payment</span>
                </ListGroupItem>
                <ListGroupItem className='border-0'>
                    <AiOutlineSetting />
                    <span> Settings</span>
                </ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem className='border-0 mt-5 fixed-bottom'>
                    <BiHelpCircle />
                    <span> Help</span>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}
