import styles from "./Markdown.module.sass";
import React from "react";
import ReactMarkdown from "react-markdown";
import '../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
var hljs = require("highlight.js");
var md = require("markdown-it")({
    // langPrefix: "",

    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});

export default class MarkdownPane extends React.Component {

    state = {

        content: "",
    }

    componentDidMount() {

        fetch(this.props.input)
            .then(res => res.text())
            .then(content => this.setState((state) => ({...state, content})))
            .catch((err) => console.error(err));
    }

    render() {

        const content = this.state.content;

        console.log(content);

        return (
            <div className={styles.markdown} dangerouslySetInnerHTML={{__html: md.render(content)}}>
                {/*<ReactMarkdown source={content}/>*/}
            </div>
        )
    }
}