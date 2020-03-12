import React, {Component} from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import './headerStyle.scss';

export class Header extends Component {

    render() {
        return (
            <div className='header-container'>
                <nav className='navbar navbar-expand-lg pl-0 pb-0'>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <NavLink to={'/movies'} exact={true} activeClassName='active' className='nav-link'>
                                    Movies
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={'/people'} exact={true} activeClassName='active' className='nav-link'>
                                    People
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={'/planets'} exact={true} activeClassName='active' className='nav-link'>
                                    Planets
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={'/species'} exact={true} activeClassName='active' className='nav-link'>
                                    Species
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={'/starships'} exact={true} activeClassName='active' className='nav-link'>
                                    Star Ships
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={'/vehicles'} exact={true} activeClassName='active' className='nav-link'>
                                    Vehicles
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);
