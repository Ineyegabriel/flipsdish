import React from "react";
import Spinner from "../../Component/Spinner/Spinner";
import MenuCard from "../../Component/MenuCard/MenuCard";
import Styles from "./Home.module.scss";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {FetchData, FetchMenuSectionItems} from '../../Utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  let menuData = FetchData();

  if (!menuData) return <Spinner />;
  let Homepage = FetchMenuSectionItems().map(items => {
    return items.map(({Name, ImageUrl, MenuSectionId}) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={Styles.menuItem}
              key={MenuSectionId}
            >
              <MenuCard itemtitle={Name} imgsrc={ImageUrl} id={MenuSectionId}/>
            </Grid>
          )
    )
  });
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Homepage}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
