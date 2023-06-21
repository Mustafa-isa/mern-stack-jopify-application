import {Outlet ,Link} from 'react-router-dom'
import Wrapper from '..//../assets/wrappers/SharedLayout'
import Navbar from '../../components/Navbar'
function SharedLayout() {
  return (
<Wrapper>
<main className="dashboard">
  <div>small side bar</div>
  <div>big side bar</div>
</main>
<Navbar></Navbar>
<div className="dashboard-page">
<Outlet/>
</div>
</Wrapper>
  )
}

export default SharedLayout