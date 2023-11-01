// VolleyballMatches.js
import React from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
} from '@coreui/react';
import { Link } from 'react-router-dom';

const KabbadiMatches = () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <h1>Kabbadi Matches</h1>
            </CCardHeader>
            <CCardBody>
              {/* Your small boxes content */}
              {/* Create and style small boxes with CoreUI components */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div className="col-lg-6 m-2">
        <CCard className="card-outline">
          <CCardHeader>
            <h5 className="m-0">Create New Kabbadi Match</h5>
          </CCardHeader>
          <CCardBody>
            <h6 className="card-title">Start New Kabbadi Match</h6>
            <p className="card-text">
              Use this customizable scoreboard to track Kabbadi match.
            </p>
            <Link to='/Kabbadi_rules' >Start Match</Link>
          </CCardBody>
        </CCard>
      </div>
    </CContainer>
  );
};

export default KabbadiMatches;
