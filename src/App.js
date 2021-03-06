import React, {Component} from 'react';
import Sidebar from './Component/Sidebar/Sidebar'
import Harder from './Component/Harder/Harder'
import RouterList from './Router/Router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './Public/css/gloab.scss'
import './Public/css/index.scss'

import {Provider} from 'mobx-react'
import store from './Store'


// import Counter from './Component/Counter'
// import {createStore} from 'redux'
// import counter from './Redux'

// const store = createStore(counter)

class App extends Component {
    render() {
        return (
            <Provider {...store}>
                <Router>
                    <div className="App">
                        {/*<Counter*/}
                        {/*value={store.getState()}*/}
                        {/*onIncrement={() => store.dispatch({type: 'INCREMENT'})}*/}
                        {/*onDecrement={() => store.dispatch({type: 'DECREMENT'})}*/}
                        {/*/>*/}
                        <div className="nav">
                            <Harder></Harder>
                        </div>
                        <div className="main__content">
                            <div className="sidebar">
                                <Sidebar></Sidebar>
                            </div>

                            <div className="subject">
                                {/*<RouterList></RouterList>*/}
                                {RouterList.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
