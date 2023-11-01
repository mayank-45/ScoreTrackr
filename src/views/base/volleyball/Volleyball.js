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
import Cards from './Volleyball_team';
import Carousels from './Volleyball_match';
import { Link } from 'react-router-dom';

const Volleyball = () => {
  return (
    <div className="content-wrapper">
      <CContainer fluid>
        <CRow>
          <CCol lg="6">
            <CCard className="card-primary card-outline">
              <CCardHeader>
                <h5 className="m-0">Volleyball Teams</h5>
              </CCardHeader>
              <CCardBody>
                <h6 className="card-title">Manage Teams</h6>
                <p className="card-text">Manage and optimize volleyball teams.</p>
                <Link to='/Volleyball_team'>Manage Team</Link>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol lg="6">
            <CCard className="card-primary card-outline">
              <CCardHeader>
                <h5 className="m-0">Volleyball Match</h5>
              </CCardHeader>
              <CCardBody>
                <h6 className="card-title">Manage volleyball matches</h6>
                <p className="card-text">
                  Use this customizable scoreboard to track volleyball matches.
                </p>
                {/* <button onClick={goToCarousels}>Go to Carousels</button> */}
                <Link to='/Volleyball_match'>Manage Match</Link>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

    </div>
  )
}

export default Volleyball
