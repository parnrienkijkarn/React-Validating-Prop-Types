function Ads(props) {
  return (
    <div className="ads-container">
      <h1 className="title">{props.title}</h1>
      <div className="img">
        <img src={props.image} alt="cute ads" />
      </div>
      <div className="content">{props.content}</div>
      <div className="author">Author: {props.extraInfo.author}</div>
    </div>
  );
}

export default Ads;
