import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Volleyball = React.lazy(() => import('./views/base/volleyball/Volleyball'))
const Volleyball_team = React.lazy(() => import('./views/base/volleyball/Volleyball_team'))
const Volleyball_match = React.lazy(() => import('./views/base/volleyball/Volleyball_match'))
const Volleyball_rules = React.lazy(() => import('./views/base/volleyball/Volleyball_rules'))
const Volleyball_score = React.lazy(() => import('./views/base/volleyball/Volleyball_score'))
const Addteam = React.lazy(() => import('./views/base/volleyball/addteam'))
const Addplayer = React.lazy(() => import('./views/base/volleyball/Addplayer'))

const Kabbadi = React.lazy(() => import('./views/base/kabbadi/Kabbadi'))
const Kabbadi_team = React.lazy(() => import('./views/base/kabbadi/Kabbadi_team'))
const Kabbadi_match = React.lazy(() => import('./views/base/kabbadi/Kabbadi_match'))
const Kabbadi_rules = React.lazy(() => import('./views/base/kabbadi/Kabbadi_rules'))
const Kabbadi_score = React.lazy(() => import('./views/base/kabbadi/Kabbadi_score'))

const Chess = React.lazy(() => import('./views/base/chess/chess'))
const Tabletennis = React.lazy(() => import('./views/base/tabletennis/tabletennis'))



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />

            <Route path="*" name="Home" element={<DefaultLayout />} />

            <Route path='/volleyball' name='volleyball' element={<Volleyball />} />
            <Route path='/Volleyball_team' name="cards" element={<Volleyball_team />} />
            <Route path='/Volleyball_match' name="carousels" element={<Volleyball_match />} />
            <Route path='/Volleyball_rules' name="collapses" element={<Volleyball_rules />} />
            <Route path='/Volleyball_score' name="score" element={<Volleyball_score />} />
            <Route path='/Addteam' name="Addteam" element={<Addteam />} />
            <Route path='/Addplayer' name="Addplayer" element={<Addplayer />} />

            <Route path='/kabbadi' name='kabbadi' element={<Kabbadi />} />
            <Route path='/Kabbadi_team' name="Kabbadi_team" element={<Kabbadi_team />} />
            <Route path='/Kabbadi_match' name="Kabbadi_match" element={<Kabbadi_match />} />
            <Route path='/Kabbadi_rules' name="Kabbadi_rules" element={<Kabbadi_rules />} />
            <Route path='/Kabbadi_score' name="Kabbadi_score" element={<Kabbadi_score />} />

            <Route path='/chess' name='chess' element={<Chess />} />
            <Route path='/tabletennis' name='tabletennis' element={<Tabletennis />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
