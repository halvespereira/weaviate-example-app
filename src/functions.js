import weaviate from "weaviate-client";

const client = weaviate.client({
  scheme: "https",
  host: "demo.dataset.playground.semi.technology/",
});

export const weaviateMagic = (keyword, articles, setArticles) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};
