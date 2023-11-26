import style from './Post.module.css';

function Post({ name, body }) {
  return (
    <div className={style.post}>
      <h1 className={style.post__name}>{name}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
