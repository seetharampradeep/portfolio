import '../Styles/Navbar.scss';

const Navbar = () => (
<nav className="nav navbar navbar-expand-lg navbar-light sticky-top text-uppercase">
  <div className='logo ps-5'>
    <a href="#about">PORTIFOLIO</a>
  </div>
  <div className='d-flex gap-0 gap-4 justify-content-center w-100 py-3'>
    <a href="#about">HOME</a>
    <a href="#skills">EXPERIENCE</a>
    <a href="#projects">PORTIFOLIO</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
);
export default Navbar;
