import React, { Component } from 'react';
import Apollo from './Apollo/Apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './routes';
import Footer from './Layout/Footer';
import './index.css';

class App extends Component {
    render() {
        return (
            <Apollo>
                <BrowserRouter>
                    <div className="App">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={() => route.header()}
                            />
                        ))}
                        <main
                            style={{
                                margin: '2em 1em',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ maxWidth: '960px' }}>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props => route.main(props)}
                                    />
                                ))}
                            </div>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Apollo>
        );
    }
}

export default App;
