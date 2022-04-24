import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail.js';
import { faker } from '@faker-js/faker';
import ApprovalCard from './ApprovalCard.js';
const root = ReactDOM.createRoot(document.querySelector('#root'));

//author name
const auth1 = 'Jane';
const auth2 = 'Bob';
const auth3 = 'Jaaz';

//current time
const date = new Date();
const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//comments
const comment1 = 'hey there';
const comment2 = 'whaaaaat this is so dope';
const comment3 = 'yyyeeeeee!!!!';

//author profile
const profile1 = faker.image.avatar();
const profile2 = faker.image.avatar();
const profile3 = faker.image.avatar();

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author={auth1} 
                    date={time} comment={comment1} 
                    profile={profile1}
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={auth2} 
                    date={time} 
                    comment={comment2} 
                    profile={profile2}
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={auth3} 
                    date={time} 
                    comment={comment3} 
                    profile={profile3}/>
            </ApprovalCard>
        </div>
    )
}

root.render(
    <App />
)