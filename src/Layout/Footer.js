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
                    backgroundPosition: 'right',
                    minHeight: '500px'
                }}
            />
        );
    }
}
