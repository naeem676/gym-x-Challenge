import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light mt-3">
                    <div class="container-fluid">
                        <h4 style={{color:'white'}}>POWER <span style={{color:'gold'}}>X</span></h4>
                       
                        <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-5 ">
                            <Link class="nav-link text-white" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item mr-5">
                            <Link class="nav-link text-white" aria-current="page">Service</Link>
                            </li>
                            <li class="nav-item mr-5">
                            <Link class="nav-link text-white" aria-current="page">Our Classes</Link>
                            </li>
                            <li class="nav-item mr-5">
                            <Link class="nav-link text-white" aria-current="page">About us</Link>
                            </li>
                            <li class="nav-item mr-5">
                            <Link class="nav-link text-white" aria-current="page">Blog</Link>
                            </li>
                            <li class="nav-item mr-5">
                            <Link class="nav-link text-white" aria-current="page">Pricing</Link>
                            </li>
                            <li class="nav-item mr-5">
                            <Link class="nav-link text-white" aria-current="page">Contact Us</Link>
                            </li>
                            
                            
                        </ul>
                        </div>
                    </div>
                    </nav>
        </div>
    );
};

export default Nav;