export function Article(props) {
  return <article className="article">{props.children}</article>;
}

export function ArticleTitle(props) {
  return <div className="article-title">{props.children}</div>;
}

export function ArticleImage(props) {
  return (
    <div className="article-image">
      <img src={props.image} alt="cute dog" />
    </div>
  );
}

export function ArticleContent(props) {
  return <div className="article-content">{props.children}</div>;
}
