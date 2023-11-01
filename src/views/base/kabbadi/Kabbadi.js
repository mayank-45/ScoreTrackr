import React, { useState } from 'react';
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CLink,
} from '@coreui/react'
import { Link } from 'react-router-dom';

const Kabbadi = () => {
  return (
    <div className="content-wrapper">
      <CContainer fluid>
        <CRow>
          <CCol lg="6">
            <CCard className="card-primary card-outline">
              <CCardHeader>
                <h5 className="m-0">Kabbadi Teams</h5>
              </CCardHeader>
              <CCardBody>
                <h6 className="card-title">Manage Teams</h6>
                <p className="card-text">Manage and optimize Kabbadi teams.</p>
                <Link to='/Kabbadi_team'>Manage Team</Link>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol lg="6">
            <CCard className="card-primary card-outline">
              <CCardHeader>
                <h5 className="m-0">Kabbadi Match</h5>
              </CCardHeader>
              <CCardBody>
                <h6 className="card-title">Manage Kabbadi matches</h6>
                <p className="card-text">
                  Use this customizable scoreboard to track Kabbadi matches.
                </p>
                {/* <button onClick={goToCarousels}>Go to Carousels</button> */}
                <Link to='/Kabbadi_match'>Manage Match</Link>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      
    </div>
  )
}

export default Kabbadi
