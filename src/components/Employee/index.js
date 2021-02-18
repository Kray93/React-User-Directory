import React from 'react';
import "./style.css";
export default function Employee(props){
    return (
        <tr key={props.id}>
            <td><img alt="Employee Pic" src={props.picURL}/></td>
            <td>{`${props.firstName} ${props.lastName}`}</td>
            <td>{props.email}</td>
            <td>{props.cell}</td>
            <td>{`${props.city}, ${props.state}`}</td>
        </tr>
    )
}