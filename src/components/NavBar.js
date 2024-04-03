import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.NavBarContainer}>
      <Link to='/'>Current</Link>
      <Link to='/ChooseLocation'>Enter Location</Link>
      <Link to='/Map'>World Map</Link>
    </div>
  );
}

export default NavBar;