import PropTypes from "prop-types";

export function Article(props) {
  return <article className="article">{props.children}</article>;
}

Article.PropTypes = {
  children: PropTypes.node,
};

export function ArticleTitle(props) {
  return <div className="article-title">{props.children}</div>;
}

ArticleTitle.PropTypes = {
  children: PropTypes.string,
};

export function ArticleImage(props) {
  return (
    <div className="article-image">
      <img src={props.image} alt="cute dog" />
    </div>
  );
}

ArticleImage.PropTypes = {
  children: PropTypes.string,
};

export function ArticleContent(props) {
  return <div className="article-content">{props.children}</div>;
}

ArticleContent.PropTypes = {
  children: PropTypes.string,
};
