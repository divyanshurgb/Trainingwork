
import React from 'react'

const ErrorComponent = () => <div> {props.ignore</div>
export default class Counter extends React.Component {
    constructor(props)) {
        console.log('Constructor')
        super(props) 

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter+1})
    }
    
    static getDerivedStateFromProps(props, state) {
        return null
    }

    componentDidMount() {
        console.log('Component Did Mount')
        console.log('-------------------')
    }

    shouldComponetUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp) {
                console.log('Should Component Update - DO NOT RENDER')
                return false
            }
        console.log('shouldComponetUpdate - RENDER')
        return true
    }

    render () {
        console.log('Render')

        return <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <div className="counter">
                Counter: {this.state.counter}
            </div>    
        </div>
    }
}

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update')
    console.log('--------------------')
}

componentWillUnmount() {
    console.log('Component Will Unmount')
    console.log('--------------------')
}

componetDidCatch(error, info) {
    console.log('Component Did Catch')
}

ReactDOM.render(<App />, document.getElementById('root'))