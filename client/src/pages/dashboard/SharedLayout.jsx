import {Outlet ,Link} from 'react-router-dom'
import Wrapper from '..//../assets/wrappers/SharedLayout'

function SharedLayout() {
  return (
<Wrapper>
  <nav>
    <Link to="All_jops">Add Jop</Link>
    <Link to="Add_jop">All Jops</Link>
  </nav>
  <Outlet/>
</Wrapper>
  )
}

export default SharedLayout