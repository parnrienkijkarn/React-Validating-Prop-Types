import PropTypes from "prop-types";

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

Ads.propTypes = {
  title: PropTypes.string.IsRequired,
  img: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.shape({
    createdOn: PropTypes.instanceOf(Date),
    author: PropTypes.string.IsRequired,
  }),
};

export default Ads;
