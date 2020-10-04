import React from "react";
import styles from "./Footer.module.sass";

export default class Footer extends React.Component {

    render() {

        return (

            <footer className={styles.footer}>
                <a className={styles.link} href="https://github.com/InnoxiumTech">Github</a>
                <span className={styles.dot}>•</span>
                <a className={styles.link} href="https://twitter.com/InnoxiumTech">Twitter</a>
                <span className={styles.dot}>•</span>
                <a className={styles.link} href="https://discord.gg/pTbr7XK">Discord</a>
            </footer>
        );
    }
}