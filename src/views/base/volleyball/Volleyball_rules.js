// VolleyballMatchSelection.js
import React, { useState } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
  CFormCheck,
  CCardHeader,
} from '@coreui/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const VolleyballMatchSelection = () => {
  const [teams,setTeams] = useState([])
  useEffect(async()=>{
    let result = await fetch('http://localhost:5000/getVolleyballTeams',{
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    })
    result = await result.json() 
    if(result)
    {
      console.log(result)
      setTeams(result)
    }
  },[])
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleContinueClick = () => {
    if (isCheckboxChecked) {
      // Redirect to the desired page (volleyball_start.php)
      // You can use React Router for navigation or a simple window.location.href
      window.location.href = 'volleyball_start.php';
    }
  };

  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <h1>Select Teams</h1>
            </CCardHeader>
            <CCardBody>
              <div className="form-group">
                <CRow>
                  <CCol sm="6">
                    <select className="custom-select">
                    <option>Select Team 1</option>
                      {teams?teams.map((i)=>{return(<option key={i._id}>{i.team_name}</option>)}):<></>}
                    </select>
                  </CCol>
                  <CCol sm="6">
                    <select className="custom-select">
                      <option>Select Team 2</option>
                      {teams?teams.map((i)=>{return(<option key={i._id}>{i.team_name}</option>)}):<></>}
                    </select>
                  </CCol>
                </CRow>
              </div>
              <div className="card-body">
                {/* Rest of your content */}
                <p>A match is played best of five sets.</p>
                <p>The first four sets are played to 25 points, with the final set being played to 15 points.</p>
                <p>A team must win a set by two points.</p>
                <p>If the score is tied at 24-24 or 14-14 in the fifth set, the set continues until one team has a two-point lead.</p>
                <p>The team that wins three sets first wins the match.</p>
                <h3>Here is a breakdown of how points are scored in volleyball:</h3>

                <p>The team that serves the ball first wins the point if the opposing team fails to return the ball over the net.</p>
                <p>If the opposing team returns the ball over the net the team that served the ball can score a point by hitting the ball into the opposing teams court and touching the ground.</p>
                <p>The opposing team can also score a point if the serving team commits a fault.</p>

                <h3>Some common faults include:</h3>

                <p>Stepping over the line while serving.</p>
                <p>If any part of the body touches the net.</p>
                <p>Double hit when the same player hits the ball twice in succession.</p>
                <p>A team taking more than three touches before hitting it over the net.</p>
                <p>Hitting the ball beyond the boundary line.</p>
              </div>
              <div className="form-check">
                <CFormCheck
                  type="checkbox"
                  id="acknowledgeRules"
                  label="I have read all the volleyball rules and agree to continue."
                  onChange={handleCheckboxChange}
                />
              </div>
              <Link to='/Volleyball_score'>Start Scoring</Link>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default VolleyballMatchSelection;
