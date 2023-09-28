import { useEffect, useState } from 'react';
import './nav-home.css';
import { useLocation } from 'react-router-dom';

const Navbar = ()=>{
  const location = useLocation();
  const [isPincode,setPincode] = useState(true);

  useEffect(()=>{
    if(location.pathname ==='/location'){
      setPincode(false);
    }
    else{
      setPincode(true);
    }

  },[location]);

return <nav id="navbar" className="navbar">
<span className="material-symbols-outlined"> menu </span>

<a data-scroll="about" href="/" className={isPincode?"active":""}>
  {" "}
  Pincode{" "}
</a>
<a data-scroll="work" href="/location" className={!isPincode?"active":""}>
  {" "}
  location{" "}
</a>
</nav>
}
export default Navbar;