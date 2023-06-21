import {Outlet ,Link} from 'react-router-dom'
import Wrapper from '..//../assets/wrappers/SharedLayout'
import Navbar from '../../components/Navbar'
import SmallSidebar from '../../components/SmallSidebar'
function SharedLayout() {
  return (
<Wrapper>
<main className="dashboard">
<SmallSidebar/>
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