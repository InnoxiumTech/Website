import styles from "./Markdown.module.sass";
import React from "react";
import ReactMarkdown from "react-markdown";

export default class MarkdownPane extends React.Component {

    state = {

        content: null,
    }

    componentDidMount() {

        fetch(this.props.input)
            .then(res => res.text())
            .then(content => this.setState((state) => ({...state, content})))
            .catch((err) => console.error(err));
    }

    render() {

        const { content } = this.state;

        return (
            <div className={styles.markdown}>
                <ReactMarkdown source={content}/>
            </div>
        )
    }
}