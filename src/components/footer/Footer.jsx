import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return <div className='container py-4 d-flex align-items-top justify-content-between'>
    <div className='w-25 pe-4'>
      <Link to='/'>
        <h1>
          Funiro.
        </h1>
      </Link>
      <p>
        400 University Drive Suite 200 Coral Gables, FL 33134 USA
      </p>
    </div>
    <div className="w-25 d-grid gap-3">
      <h3>Links</h3>
      <Link to='/'>
        Home
      </Link>
      <Link to='/shop'>
        Shop
      </Link>
      <Link to='/about'>
        About
      </Link>
      <Link to='/contact'>
        Contact
      </Link>
    </div>
    <div className='w-25 d-grid gap-3'>
      <h3>
        Help
      </h3>
      <a href="#">
        Payment Options
      </a>
      <a href="#">
        Returns
      </a>
      <a href="#">
        Privacy Policies
      </a>
    </div>
    <div className='w-25 d-grid gap-3'>
      <h3>Newsletter</h3>
      <form>
        <input type="text" placeholder='Enter Your Email Address'/>
        <button>SUBSCRIBE</button>
      </form>
    </div>
    {/* <p>
      2023 furino. All rights reverved
    </p> */}
  </div>;
}

export default Footer;
