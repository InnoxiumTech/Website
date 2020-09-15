import React from 'react';
import './NavBar.css'

const navbarItems = [

    {
        title: "Home",
        page: "home"
    },
    {
        title: "Projects",
        page: "projects"
    },
    {
        title: "About",
        page: "about"
    }
].reverse();
const navBarList = navbarItems.map((item) => (

    <li key={item.page} className="navBarItem">
        {item.title}
    </li>
));

export class NavBar extends React.Component {

    render() {

        return (

            <nav className={"navBar"}>
                <ul>{navBarList}</ul>
            </nav>
        );
    }
}