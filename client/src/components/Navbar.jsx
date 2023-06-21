import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
import  Logo from './Logo'
import { useState } from 'react'
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useAppContext().dispatch
  const user = useAppContext().state.user
  const [showLogout, setShowLogout] = useState(false)
const toggleSidebar =()=>{
dispatch({
  type:"SHOW_SIDE_BAR"
})
}
const logOut =()=>{
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  dispatch({
    type:"LOGOUT"
  })
  navigate('/landing')
}
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
          {
            user && user.name
          }
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logOut}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
