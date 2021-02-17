import weaviate from "weaviate-client";

const client = weaviate.client({
  scheme: "https",
  host: "demo.dataset.playground.semi.technology/",
});

export const weaviateMagic = (keyword, setArticles, setIsSearching) => {
  setIsSearching(true);
  client.graphql
    .get()
    .withNearText({
      concepts: [keyword],
      certainty: 0.7,
    })
    .withClassName("Article")
    .withFields("title url wordCount")
    .withLimit(100)
    .do()
    .then((res) => {
      setArticles(res.data.Get.Article);
      setIsSearching(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
