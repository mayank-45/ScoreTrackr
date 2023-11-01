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

const VolleyballMatchSelection = () => {
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
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                    </select>
                  </CCol>
                  <CCol sm="6">
                    <select className="custom-select">
                      <option>Select Team 2</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                    </select>
                  </CCol>
                </CRow>
              </div>
              {/* Rest of your content */}
              <div className="form-check">
                <CFormCheck
                  type="checkbox"
                  id="acknowledgeRules"
                  label="I have read all the volleyball rules and agree to continue."
                  onChange={handleCheckboxChange}
                />
              </div>
              <Link to='/Kabbadi_score'>Start Scoring</Link>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default VolleyballMatchSelection;
