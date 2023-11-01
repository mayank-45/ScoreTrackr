import React from 'react'
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
  CButton,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Kabbadi_team = () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <h1>Kabbadi Teams</h1>
            </CCardHeader>
            <CCardBody>
              <CTable striped bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableDataCell>Id No.</CTableDataCell>
                    <CTableDataCell>Name</CTableDataCell>
                    <CTableDataCell>Institute</CTableDataCell>
                    <CTableDataCell>Total Players</CTableDataCell>
                    <CTableDataCell>Action</CTableDataCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>CSPIT IT Boys</CTableDataCell>
                    <CTableDataCell>CSPIT</CTableDataCell>
                    <CTableDataCell>10</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        href="add_player_volley.js"
                        color="primary"
                        size="sm"
                      >
                        Edit
                      </CButton>
                      {' '}
                      <CButton
                        href="delete_team_volley.js"
                        color="danger"
                        size="sm"
                      >
                        Delete
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Kabbadi_team
