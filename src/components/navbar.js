import { useEffect, useState } from 'react';
import './nav-home.css';
import { useLocation } from 'react-router-dom';

const Navbar = (params)=>{
  const location = useLocation();
  const [isPincode,setPincode] = useState(true);
  const [isMetric,setMetric] = useState(true);

  useEffect(()=>{
    if(location.pathname ==='/location'){
      setPincode(false);
    }
    else{
      setPincode(true);
    }
  },[location]);

  const changeUnits = ()=>{
    setMetric(!isMetric);
    params.changeMetric(!isMetric);
  }

return <div>
<nav id="navbar" className="navbar">
<span className="material-symbols-outlined"> menu </span>

<a data-scroll="about" href="/" className={isPincode?"active":""}>
  {" "}
  Pincode{" "}
</a>
<a data-scroll="work" href="/location" className={!isPincode?"active":""}>
  {" "}
  location{" "}
</a>
<a className='units' onClick={changeUnits}> {isMetric ?"KM/H - C":"MPH - F"}</a>
</nav>
</div>
}
export default Navbar;