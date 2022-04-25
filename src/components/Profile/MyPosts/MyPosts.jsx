import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    
    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    New post
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you?' likesCount='15'/>
                <Post message="It's my first post" likesCount='20'/>
            </div>
        </div>
    );
}


export default MyPosts;