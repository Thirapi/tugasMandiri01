import logo from '/assets/navLogo.svg'

function Header() {
    return (
      <header>
        <nav className='nav'>
          <img className='nav--logo' src={logo} />
          <ul className='nav--logo_item'>
            <li>Products</li>
            <li>Payment Confirmation</li>
            <li>Track Order</li>
          </ul>
          <ul className='nav--item'>
            <li>Search</li>
            <li>Login/Sign Up</li>
            <li>Cart (0)</li>
          </ul>
        </nav>
      </header>
    )
  };

  export default Header;