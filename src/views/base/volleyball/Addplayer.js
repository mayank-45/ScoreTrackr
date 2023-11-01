import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AddEditPlayers = () => {
    const [numPlayers, setNumPlayers] = useState(1);
    const [players, setPlayers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Make an API call to submit the players data
    };

    const generateTable = () => {
        const rows = [];
        for (let i = 0; i < numPlayers; i++) {
            rows.push(
                <tr>
                    <td>
                        <input
                            type="text"
                            name={`name${i}`}
                            placeholder="Full Name"
                        />
                    </td>
                    <td>
                        <input
                            type="email"
                            name={`email${i}`}
                            placeholder="Email ID"
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name={`mobile${i}`}
                            placeholder="Mobile Number"
                        />
                    </td>
                </tr>
            );
        }
        return rows;
    };

    return (
        <div>
            <h1>Add/Edit Players</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="numPlayers"
                    value={numPlayers}
                    onChange={(e) => setNumPlayers(e.target.value)}
                />

            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email ID</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>{generateTable()}</tbody>
                <Link to='/Volleyball_team'>Submit</Link>
            </table>
        </div>
    );
};

export default AddEditPlayers;