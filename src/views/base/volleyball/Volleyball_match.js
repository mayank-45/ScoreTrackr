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
import img1 from './images/img_1_sq.jpg';

const VolleyballMatches = () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <h1>Volleyball Matches</h1>
            </CCardHeader>
            <CCardBody>
              {/* Your small boxes content */}
              {/* Create and style small boxes with CoreUI components */}
              <h3>Recent Matches</h3>
              <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center text-lg-left">
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                        <img src={img1} alt="Image" className="img-fluid" />
                      </div>
                      <div className="text">
                        <h3 className="h5 mb-0 text-black">Packers</h3>
                        <span className="text-uppercase small country">Brazil</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                  <div className="d-inline-block">
                    <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 text-center text-lg-right">
                  <div className>
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                        <img src="./images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                      </div>
                      <div className="text order-1 w-100">
                        <h3 className="h5 mb-0 text-black">Steelers</h3>
                        <span className="text-uppercase small country">London</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div className="col-lg-6 m-2">
        <CCard className="card-outline">
          <CCardHeader>
            <h5 className="m-0">Create New Volleyball Match</h5>
          </CCardHeader>
          <CCardBody>
            <h6 className="card-title">Start New Volleyball Match</h6>
            <p className="card-text">
              Use this customizable scoreboard to track volleyball match.
            </p>
            <Link to='/Volleyball_rules' >Start Match</Link>
          </CCardBody>
        </CCard>
      </div>
    </CContainer>
  );
};

export default VolleyballMatches;
