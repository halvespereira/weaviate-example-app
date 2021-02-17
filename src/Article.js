import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    marginBottom: "20px",
    width: "700px",
    padding: "10px",
    background: "#3f51b5",
  },
  typography: {
    textAlign: "left",
    color: "#fff",
  },
  button: {
    color: "#fff",
  },
});

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.typography} component="h3" variant="h5">
        Title: {article.title}
      </Typography>
      <Typography className={classes.typography} component="h3" variant="h5">
        Word count: {article.wordCount}
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography className={classes.typography} component="h3" variant="h5">
          url:
        </Typography>
        <Button
          href={article.url}
          target="_blank"
          color="primary"
          className={classes.button}
        >
          {article.url}
        </Button>
      </div>
    </Card>
  );
};

export default Article;
