const counter = (state=0 , action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMEMT":
            return state - 1;
        default:
            return state;
    }
}

const store = Redux.createStore(counter);

store.subscribe( () => console.log(store.getState()) );

class CounterApp extends React.Component {
    render() {        
        return <p>Value: {this.props.value}
            <br />
            <input type="button" value="Increment" onClick={this.props.onIncrement} />
            <input type="button" value="Decrement" onClick={this.props.onDecrement} />
        </p>;
    }
}

const mapStateToProps = state => {
    return {
        value: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {
            dispatch({type: "INCREMENT"});
        },
        onDecrement: () => {
            dispatch({type: "DECREMEMT"});
        }
    }
}

const App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CounterApp);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>, 
document.getElementById('app'));