import React, { useState } from "react";
import './addteam.css';
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";

const AddTeam = () => {
    const [teamName, setTeamName] = useState("");
    const [institute, setInstitute] = useState("");
    const [players, setPlayers] = useState("");
    const [numPlayers, setNumPlayers] = useState(1);
    // const [playerInfo,setPlayerInfo] = useState([])
    //const [players, setPlayers] = useState([]);
    let player = {}
    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault();
        let player_info = []
        for(let i=0;i<numPlayers;i++)
        {
            let data = {
                full_name:player[`full_name_${i}`],
                email_id:player[`email_id_${i}`], 
                mobile_number:player[`mobile_number_${i}`]
            }
            player_info.push(data)
        }
        console.log(player_info)
        const team = {
            team_name:teamName,
            institute_name:institute,
            player_count:numPlayers,
            player_info
        }
        let result = await fetch('http://localhost:5000/registerVolleyballTeam',{
            method:'post',
            body:JSON.stringify({team}),
            headers:{
                'Content-Type':'application/json'
              }
        })
        // result = await result.json()
        if(result)
        {
            alert('Team Registered Successfully')
            navigate('/Volleyball_team')
        }
        else
        {
            console.log(result)
            alert('Error..!!!')
        }
        // TODO: Make an API call to submit the team data
    };
    const generateTable = () => {
        const rows = [];
        let player_info={}
        for (let i = 0; i < numPlayers; i++) {
            rows.push(
                <tr>
                    <td>
                        <input
                            type="text"
                            name={`name${i}`}
                            placeholder="Full Name"
                            onChange={(e)=>{console.log(e.target.value)
                                player_info[`full_name_${i}`]=e.target.value
                                console.log(player_info)
                                player=player_info
                            }}
                        />
                    </td>
                    <td>
                        <input
                            type="email"
                            name={`email${i}`}
                            placeholder="Email ID"
                            onChange={(e)=>{console.log(e.target.value)
                                player_info[`email_id_${i}`]=e.target.value
                                console.log(player_info)
                                // setPlayerInfo(player_info)
                                player=player_info
                            }}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name={`mobile${i}`}
                            placeholder="Mobile Number"
                            onChange={(e)=>{console.log(e.target.value)
                                player_info[`mobile_number_${i}`]=e.target.value
                                console.log(player_info)
                                // setPlayerInfo(player_info)
                                player=player_info
                            }}
                        />
                    </td>
                </tr>
            );
        }
        return rows;
    };


    return (
        <div>
            <h1>Add Team</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="teamName"
                    placeholder="Enter Team Name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <input
                    type="text"
                    name="institute"
                    placeholder="Enter Institute Name"
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                />
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
                {/* <Link to='/Volleyball_team'>Submit</Link> */}
                <Link onClick={handleSubmit}>Submit</Link>
            </table>
        </div>
    );
};

export default AddTeam;