import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-bar'>
        <div>
          <Link to='/' className='nav-link'>Home</Link>
        </div>
        <div>
          <Link to='/about' className='nav-link'>About</Link>
        </div>
        <div>
          <Link to='/contact' className='nav-link'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar