import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.theculturetrip.com/wp-content/uploads/2022/02/2hg34b8-1.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>      
    );
}

export default Profile;