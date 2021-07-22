import React from "react";

export default class Example1 extends React.Component {
    state = {
        count: 0
    }

    render() {
        const {count} = this.state;

        return (<div>
            <p>You clicked {count} times in Class Component</p>
            <button onClick={this.click}>Click me</button>
        </div>)

    }

    componentDidMount() {
        console.log('componentDidMount', this.state.count);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state.count);
    }

    click = () => {
        this.setState({ count: this.state.count + 1});
    }
}
