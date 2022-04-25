import s from './Post.module.css';

const Post = (props) => {
    return (        
        <div className={s.item}>
            <img src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300" />
            {props.message}
            <div>
                <span>Likes </span>
                {props.likesCount}
            </div>
        </div>            
    );
}

export default Post;