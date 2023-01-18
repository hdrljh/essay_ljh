import Avatar from "./Avatar";

function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar user={props.author} />
        <img className="avater"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="user-info-name">
          {props.author.name}
        </div>
      </div>
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  );
}

export default Comment;