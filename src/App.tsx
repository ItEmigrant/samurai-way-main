import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://th.bing.com/th/id/OIP.sxdELx88HQjlvgfXWUENawHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
            </header>
            <nav className='nav'>
                <div><a> Profile </a></div>
                <div><a> Message </a></div>
                <div><a> News </a></div>
                <div><a> Music</a></div>
                <div><a> Settings</a></div>
            </nav>
            <div className='content'>
                <div><img
                    src='https://th.bing.com/th/id/OIP.8xzxxZAXah8Uv7uhtR3e7QHaCs?w=312&h=127&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>
                </div>
                <div>Ava description</div>
                <div>My post
                    <div>New post</div>
                </div>

                <div>
                    <div> post1</div>
                    <div>post2</div>
                </div>

            </div>
        </div>
    );
}

export default App;
