import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { Link } from 'react-router-dom'


let user = localStorage.getItem('user')
let role=null
if(user){
console.log(JSON.parse(user).role==='Admin')
 role = user.role
}
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  role==='Admin'?{
    component: CNavItem ,
    name: 'Logout',
    to: '/login',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  }:{
    component: CNavItem ,
    name: 'Admin Login',
    to: '/login',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Sports Score',
  },
  {
    component: CNavGroup,
    name: 'Outdoor Sports',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Volleyball',
        to: '/base/volleyball',
      },
      {
        component: CNavItem,
        name: 'Kabbadi',
        to: '/base/kabbadi',
      },
      {
        component: CNavItem,
        name: 'Basketball',
        to: '/base/basketball',
      },
      {
        component: CNavItem,
        name: 'Football',
        to: '/base/football',
      },
      {
        component: CNavItem,
        name: 'Tug of War',
        to: '/base/tugofwar',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Indoor Sports',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Chess',
        to: '/base/chess',
      },
      {
        component: CNavItem,
        name: 'Table Tennis',
        to: '/base/tabletennis',
      },
    ]
  },
  

]

export default _nav
