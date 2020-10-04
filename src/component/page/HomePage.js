import React from 'react';
import styles from "./HomePage.module.sass";

export default class HomePage extends React.Component {

    render() {

        return (
            <div className={styles.page}>
                <p> This is the home page </p>
            </div>
        )
    }
}