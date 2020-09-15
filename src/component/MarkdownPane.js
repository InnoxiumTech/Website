const React = require("react");
const ReactMarkdown = require("react-markdown")
require("./Markdown.module.sass");

export class MarkdownPane extends React.Component {

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
            <div className={"markdown"}>
                <ReactMarkdown source={content}/>
            </div>
        )
    }
}