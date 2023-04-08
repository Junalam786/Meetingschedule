import React from 'react';
import "./table.css"

function Meetings({ meetings }) {
    const Row = (props) => {
        return (
            <tr>
                <td>{props.data.clientName}</td>
                <td>{props.data.time}</td>
                <td>{props.data.duration}</td>
                <td>&#8377; {props.data.cost}</td>
            </tr>
        )
    }
    return (
        <>
            <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center' }}>All Meetings</div>
            <br />
            <div className='App'>
                <table>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Start time</th>
                            <th>Duration</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSON.parse(localStorage.getItem("meeting") || "[]").map((x, i) => <Row key={i} data={x} />)}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Meetings;