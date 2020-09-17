import React from 'react';
import styles from './NavBar.module.sass'
import {Link} from "react-router-dom";

const navbarItems = [

    {
        isLink: true,
        title: "Home",
        page: "home",
    },
    {
        isLink: true,
        title: "Projects",
        page: "projects",
    },
    {
        isLink: true,
        title: "About",
        page: "about",
    }
].reverse();

const navBarList = navbarItems.map((item) => (

    <li key={item.page} className={styles.navBarItem}>
        <Link to={"/" + item.page}>{item.title}</Link>
    </li>
));

export class NavBar extends React.Component {

    render() {

        return (

            <div className={styles.navBarDiv}>
                <img className={styles.logo} src={"./logo_transparent.svg"} alt={"Innoxium Tech"} />
                <nav className={styles.navBar}>
                    <ul className={styles.navUl}>{navBarList}</ul>
                </nav>
            </div>
        );
    }
}