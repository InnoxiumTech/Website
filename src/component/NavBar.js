import React from 'react';
import styles from './NavBar.module.sass'
import {Link} from "react-router-dom";
import navItems from '../content/NavItems.json'

export default class NavBar extends React.Component {

    render() {

        return (

            <div className={styles.navBarDiv}>
                <img className={styles.logo} src={"./logo_transparent.svg"} alt={"Innoxium Tech"} />
                <nav className={styles.navBar}>
                    <ul className={styles.navUl}>
                        {
                            navItems.reverse().map((item, index) => (

                                <li key={index} className={styles.navBarItem}>
                                    <Link to={"/" + item.page}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}