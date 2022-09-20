import Ads from "./components/Ads";
import {
  Article,
  ArticleTitle,
  ArticleImage,
  ArticleContent,
} from "./components/Article";

function App() {
  const articleHeader = {
    title: "Article Header",
    image: "https://placedog.net/500",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent vehicula sollicitudin elit. Sed justo leo,
      consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem`,
  };

  const adsData = {
    title: "TechUp Ads",
    image: "https://placedog.net/500",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent vehicula sollicitudin elit. Sed justo leo,
    consequat ac tortor a, aliquet ultricies nisi. Vestibulum in volutpat lorem`,
    extraInfo: {
      createdOn: new Date(),
      author: "John",
    },
  };

  return (
    <main className="App">
      <Article>
        <ArticleTitle>{articleHeader.title}</ArticleTitle>
        <ArticleImage image={articleHeader.image} />
        <ArticleContent>{articleHeader.content}</ArticleContent>
      </Article>
      <hr />
      <Ads
        title={adsData.title}
        image={adsData.image}
        content={adsData.content}
        extraInfo={adsData.extraInfo}
      />
    </main>
  );
}

export default App;
