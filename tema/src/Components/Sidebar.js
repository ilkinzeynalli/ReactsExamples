import React, { Component } from 'react'
import {
    Link,
} from "react-router-dom";

import Dashboard from './Dashboard';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>

                    <hr class="sidebar-divider my-0"></hr>

                    <li class="nav-item active">
                        <Link to="/" class="nav-link">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                Dashboard
                        </Link>
                    </li>
                    <hr class="sidebar-divider"></hr>
                    <div class="sidebar-heading">
                        Interface
                    </div>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <Link class="collapse-item" to="/Buttons">Buttons</Link>
            <Link class="collapse-item" to="/Cards">Cards</Link>
          </div>
        </div>
      </li>
                            
                </ul>

            </div>


        )
    }
}
