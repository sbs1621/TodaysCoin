import React, { Component } from 'react';
//import BooleanComponent from './03/BooleanComponent';
import './sass/materialize.scss';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className='nav-wrapper'>
                        <div>오늘의 코인</div>
                    </div>
                </nav>
                <h1>머티리얼 CSS</h1>
            </div>
        );
    }
}

export default App;