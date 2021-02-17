import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { weaviateMagic } from "./functions";
import Container from "@material-ui/core/Container";
import Article from "./Article";

function App() {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState(null);

  return (
    <div className="App">
      <form>
        <TextField
          id="weaviate-search-text-field"
          label="Type keyword"
          type="search"
          variant="outlined"
          className="searchInput"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          className="searchButton"
          style={{ height: "55px" }}
          onClick={() => weaviateMagic(keyword, articles, setArticles)}
        >
          Search
        </Button>
      </form>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <div
          style={{
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {articles
            ? articles.map((article, idx) => (
                <Article article={article} key={idx} />
              ))
            : null}
        </div>
      </Container>
    </div>
  );
}

export default App;
