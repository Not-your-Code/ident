import React from 'react'
import './Navbar.css'
//       <img src={require('../Assests/logo/logo.png')} />
// list w-50nav-link
 
export default function Navbar() {
    return (
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={require('../Assests/logo/logo.png')} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
        // <nav className='container-fluid nav'>
        //     <div id='logo'>
        //         <img src={require('../Assests/logo/logo.png')} />
        //     </div>



        //     <ul className='list w-50'>
        //         <button className='toggle' >Toggle</button>
        //         <li className='nav-link active '>Home</li>
        //         <li className='nav-link active '>About Us</li>

        //         <li class="nav-item dropdown active">
        //             <a class="nav-link dropdown-toggle"   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Department
        //             </a>
        //             <ul class="dropdown-menu menu " aria-labelledby="navbarDropdown">
        //                 <li><a class="dropdown-item"  >Department</a></li>
        //                 <li><a class="dropdown-item"  >Department Single</a></li>

        //             </ul>
        //         </li>
             
        //         <li className='nav-link active'>Contact</li>
        //         <li className='btncont active'>
        //             <button id='btn'>Appointment</button>
        //         </li>

        //     </ul>


        // </nav>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary nav sticky-top">
//             <div class="container-fluid d-flex align-items-center">
//                 <a class="navbar-brand logo"  >
//                 <img src={require('../Assests/logo/logo.png')} />
//                 </a>
//                 {/*  */}
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 {/*  */}
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page"  >Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link"  >About Us</a>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Department
//                             </a>
//                             <ul class="dropdown-menu">
//                             <li><a class="dropdown-item"  >Department</a></li>
//                                 <li><a class="dropdown-item"  >Another action</a></li>
//                                 <li><a class="dropdown-item"  >Department Single</a></li>
//                             </ul>
//                         </li>
//                         <li className="nav-item dropdown active">
//                     <a className="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Doctors
//                     </a>
//                     <ul className="dropdown-menu">
//                         <li><a className="dropdown-item"  >Our Doctor</a></li>
//                         <li><a className="dropdown-item"  >Doctor Timetable</a></li>
//                         <li><a className="dropdown-item"  >Doctor Modern</a></li>
//                     </ul>
//                 </li>
//                 <li className='btncont active'>
// <button id='btn'>Appointment</button>
// </li>
//                     </ul>

//                 </div>
//             </div>
//         </nav>

    );
}
