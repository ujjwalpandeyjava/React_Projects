import companyLogo from './images_used/truck.png';
import nvabarCSS from './Navbar.module.css';

function Navbar() {
  return (
    <div className={nvabarCSS.Navbar}>
      < header className={nvabarCSS.NavbarHeader} >
        <img src={companyLogo} alt="Amazon watch test example." style={{ height: '55px', padding: '0px 8px' }} />
      </header >
    </div >
  );
}

export default Navbar;