import React from 'react';
import { Table } from "reactstrap";

export const TableView = (props) => {

    return (

        <Table bordered responsive>
            <tbody>
                <tr key={1}>
                    <th>Attributes Name</th>
                    {props.viewData.map(item => {
                        return (<td>{item.name}</td>);
                    })}

                </tr>
                <tr key={2}>
                    <th>Height</th>
                    {props.viewData.map(item => {
                        return (<td>{item.height}</td>);
                    })}
                </tr>
                <tr key={3}>
                    <th>Base Experience</th>
                    {props.viewData.map(item => {
                        return (<td>{item.base_experience}</td>);
                    })}
                </tr>
                <tr key={4}>
                    <th>Weight</th>
                    {props.viewData.map(item => {
                        return (<td>{item.weight}</td>);
                    })}
                </tr>
                <tr key={5}>
                    <th>Types</th>
                    {props.viewData.map(item => {
                        return (<td>{item.types}</td>);
                    })}
                </tr>
            </tbody>
        </Table>
    );
}