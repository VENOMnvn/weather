import './navbar.css';

const Navbar = ()=>{
return <nav id="navbar" className="navbar">
<span className="material-symbols-outlined"> menu </span>
<a data-scroll="home" href="#home" className="active">
  {" "}
  Home{" "}
</a>
<a data-scroll="about" href="#about">
  {" "}
  Pincode{" "}
</a>
<a data-scroll="work" href="#work">
  {" "}
  location{" "}
</a>
</nav>
}
export default Navbar;