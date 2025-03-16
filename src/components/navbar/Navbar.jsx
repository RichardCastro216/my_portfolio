import React, {useState} from 'react';
import '../Menu/Menu.css';
import { SlMenu } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import '../../App.css';
import './navbar.css';

function Navbar() {

    // git remote set-url origin {new_repository_url}
    // git push -u origin master


    // To https://url
//  ! [rejected]        main -> main (non-fast-forward)
// error: failed to push some refs to 'https://github.com/url'
// hint: Updates were rejected because the tip of your current branch is behind        
// hint: its remote counterpart. If you want to integrate the remote changes,
// hint: use 'git pull' before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.

  return (
    <>
        <div className="menuContainer">
            <Menu />
        </div>
      <nav>
            <ul>
                <li>
                    <NavLink to="/" end>
                        <h2>Richard Castro</h2>
                    </NavLink>
                </li>
                <li>
                    <span className="menu-icon">
                        <SlMenu size="1.5rem"/>
                    </span>
                </li>
            </ul>
        </nav>
    </>
        
        
  )
}

export default Navbar;