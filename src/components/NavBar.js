import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav'>
      <Link to='/'>STOCKS</Link>
      <div>
        <Link to='/stocks'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
      </div>
    </div>
  );
}

export default NavBar;
