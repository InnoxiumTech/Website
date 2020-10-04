import React from 'react';
import styles from "./HomePage.module.sass";
import MarkdownPane from "../MarkdownPane";

const markdown = require("../../content/HomePage.md");

export default class HomePage extends React.Component {

    render() {

        return (
            <div className={styles.page}>
                <MarkdownPane input={markdown} />
                {/*<h1> Welcome to Candor! A Mod Manager created by Innoxium. </h1>*/}
                {/*<p>*/}
                {/*    Candor was created to remove the need for a new manager for each game released.*/}
                {/*</p>*/}
                {/*<p>*/}
                {/*    We achieve this with the use of 'Modules', user created addon's for Candor which enable it's functionality for a specific game.*/}
                {/*</p>*/}
                {/*<img src="./images/ModScene.png" alt="Candor Mod Frame" />*/}
            </div>
        )
    }
}