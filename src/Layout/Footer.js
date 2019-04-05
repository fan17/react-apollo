import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer
                style={{
                    position: 'absolute',
                    bottom: '0',
                    backgroundColor: '#111',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundImage:
                        'url(https://yoursocialstatus.com/wp-content/uploads/2017/01/rocket-1.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right'
                }}
            >
                <div
                    style={{
                        width: '960px',
                        padding: '0 2em',
                        backgroundPosition: 'right'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            minHeight: '500px',
                            alignItems: 'center'
                        }}
                    >
                        <div>
                            <img
                                src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
