import React, {useState} from 'react';
import '../Menu/Menu.css';
import { SlMenu } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import '../../App.css';
import './navbar.css';

function Navbar(props) {

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
                        <h2 style={{color:'white'}}>Richard Castro</h2>
                    </NavLink>
                </li>
                <li>
                    <button style={{cursor:'pointer',padding:'10px',borderRadius:'30px', backgroundColor:'rgba(0,0,0,0)',border:'2px solid rgba(255,255,255,0.6)',color:'white'}} onClick={()=>props.signOut()}>Sign Out</button>
                </li>
            </ul>
        </nav>
    </>
        
        
  )
}

export default Navbar;