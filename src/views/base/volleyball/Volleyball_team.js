import React, { useState } from 'react'
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
import { useEffect } from 'react'
import ReactImg from 'src/assets/images/react.jpg'
import { Link } from 'react-router-dom';

const Cards = () => {
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
  const generateTeams = ()=>{
    const player = []
    teams.map((i,index)=>{
      player.push( <CTableRow key={i._id}>
      <CTableDataCell>{index+1}</CTableDataCell>
      <CTableDataCell>{i.team_name}</CTableDataCell>
      <CTableDataCell>{i.institute_name}</CTableDataCell>
      <CTableDataCell>{i.player_count}</CTableDataCell>
      <Link>View Team</Link>
    </CTableRow>)
  }
  )
  return player
  }
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <h1>Volleyball Teams</h1>
            </CCardHeader>
            <CCardBody>
              <Link to='/Addteam'><h4>Add Volleyball Team</h4></Link>
              <CTable striped bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableDataCell>Id No.</CTableDataCell>
                    <CTableDataCell>Name</CTableDataCell>
                    <CTableDataCell>Institute</CTableDataCell>
                    <CTableDataCell>Total Players</CTableDataCell>
                    {/* <CTableDataCell>Action</CTableDataCell> */}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {teams?generateTeams():<></>}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
    
  )
}

export default Cards
