import React, { useEffect,useState } from 'react'
import { NavLink, Navigate,useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { logo } from 'src/assets/brand/logo'
import { Button } from '@coreui/coreui'
let user = localStorage.getItem('user')
let role=null
if(user){
console.log(JSON.parse(user).role==='Admin')
 role = user.role
}
const AppHeader = () => {
  const [role,setRole] = useState(null)
  useEffect(()=>{
    let user = localStorage.getItem('user')
if(user){
console.log(JSON.parse(user).role==='Admin')
 setRole(JSON.parse(user).role)
}
  },[])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const handleLogout = ()=>{
    localStorage.clear()
    console.log("hello");
    window.location.href = "/"
  }
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          {role?<CNavItem>
            <CNavLink onClick={handleLogout} component={NavLink} style={{marginLeft:"1000px"}}>
              Logout
            </CNavLink>
          </CNavItem>:<CNavItem>
            <CNavLink to="/login" component={NavLink} style={{marginLeft:"1000px"}}>
              Admin Login
            </CNavLink>
          </CNavItem>}
          {/* <CNavItem>
            <CNavLink to="/login" component={NavLink} style={{marginLeft:"1000px"}}>
              Admin Login
            </CNavLink>
          </CNavItem> */}
          {/* <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        {/* <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
