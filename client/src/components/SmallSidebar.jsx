import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/AppContext'

import Logo from './Logo'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
const show_sidebar =useAppContext().state.show_sidebar
const dispatch =useAppContext().dispatch
const  toggleSidebar =()=>{
  dispatch({
    type:"SHOW_SIDE_BAR"
  })
}
  return (
    <Wrapper>
      <div
        className={
          show_sidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {/* <NavLinks toggleSidebar={toggleSidebar} /> */}
          navlinks
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
