import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';
const root = ReactDOM.createRoot(document.querySelector('#root'));


const profileAvatar = faker.image.avatar();

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={profileAvatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    )
}

root.render(
    <App />
)