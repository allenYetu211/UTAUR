import React, {Component} from 'react';
import Sidebar from './Component/Sidebar/Sidebar'
import Harder from './Component/Harder/Harder'
import routes from './Router/Router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './Public/css/gloab.scss'
import './Public/css/index.scss'

import Counter from './Component/Counter'
import {createStore} from 'redux'
import counter from './Redux'

const store = createStore(counter)



class App extends Component {
    render() {
        return (
            <Router>

                <div className="App">
                    <Counter
                        value={store.getState()}
                        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
                   />
                    <div className="nav">
                        <Harder></Harder>
                    </div>
                    <div className="main__content">
                        <div className="sidebar">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="subject">
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
