import React from "react";
import { FetchMenuSectionItemsById} from "../../Utils";
import Grid from "@material-ui/core/Grid";
import MenuItemCard from "../../Component/MenuItemCard/MenuItemCard";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Styles from "./Demo.module.scss";
import { connect } from "react-redux";
import { fetchmenuoptionsstart } from "../../Redux/Actions/MenuAction";
import { useParams } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Demo = ({ saveMenuoption, location: { pathname } }) => {
  const classes = useStyles();
  const { Id } = useParams();
  const data = FetchMenuSectionItemsById(Id);

  let template = data.map((items) => {
    return items.map(
      ({
        MenuItemId,
        ImageUrl,
        Price,
        Name,
        Description,
        MenuItemOptionSets,
        Alcohol
      }) => {
       return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={Styles.menuItem}
            key={MenuItemId}
          >
            <MenuItemCard
              ImageUrl={ImageUrl}
              Price={Price}
              Name={Name}
              Description={Description}
              MenuItemOptionSets={MenuItemOptionSets}
              Id={MenuItemId}
              Alcohol={Alcohol}
            />
          </Grid>
        );
      }
    );
  });
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3} className={Styles.grid}>
          {template}
        </Grid>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveMenuoption: (menuoptions) => dispatch(fetchmenuoptionsstart(menuoptions)),
});
export default connect(null, mapDispatchToProps)(Demo);
