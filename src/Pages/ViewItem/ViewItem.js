import React from "react";
import { useLocation,useHistory } from "react-router";
import Banner from "../../Component/Banner/Banner";
import Style from "./ViewItem.module.scss";
import { getMasterOptionIsMasterFalse,getMasterOptionIsMasterTrue } from "../../Utils";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Listroot: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0
  },
}));
const ViewItem = () => {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();

  const gobackHandler = () => {
    history.goBack();
  }
  let {
    state: {
      ImageUrl,
      Name,
      Description,
      MenuItemOptionSets,
      Alcohol,
    },
  } = location;

  let fetchedisMasterFalse = getMasterOptionIsMasterFalse(MenuItemOptionSets);
  const combination = fetchedisMasterFalse.map((items) => (
    items.map((item) => (
       item.map(({ MenuItemOptionSetItemId, Name, Price, ImageUrl }) =>(
        <React.Fragment key={MenuItemOptionSetItemId}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={Style.ImageHolder}>
                {ImageUrl ? (
                  <img src={ImageUrl} alt="" className={Style.itemImage} />
                ) : (
                  <ImageIcon />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Name}
              className={Style.itemtitle}
              secondary={Alcohol ? <span>Alcoholic Drink</span> : null}
            />
            <ListItemText
              className={Style.itemtitle}
              secondary={Price ? <span>{Price}</span> : null}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
        )
      )
    ))
  ));
  let fetchedisMasterTrue = getMasterOptionIsMasterTrue(MenuItemOptionSets);
  const Modifications = fetchedisMasterTrue.map((items) => (
    items.map((item) => (
       item.map(({ MenuItemOptionSetItemId, Name, Price, ImageUrl }) =>(
        <React.Fragment key={MenuItemOptionSetItemId}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={Style.ImageHolder}>
                {ImageUrl ? (
                  <img src={ImageUrl} alt="" className={Style.itemImage} />
                ) : (
                  <ImageIcon />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Name}
              className={Style.itemtitle}
              secondary={Alcohol ? <span>Alcoholic Drink</span> : null}
            />
            <ListItemText
              className={Style.itemtitle}
              secondary={Price ? <span>{Price}</span> : null}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
        )
      )
    ))
  ));

  return (
    <div className={Style.Container}>
      <button className={Style.back} onClick={gobackHandler}>&#x3c;</button>
      <Banner itemImage={ImageUrl} itemType={Name} />
      <div className={[Style.title, Style.row].join(" ")}>{Name}</div>
      <div className={[Style.desc, Style.row, Style.centered].join(" ")}>
        <span>{Description}</span>
      </div>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={5} lg={5}>
            <div className={Style.GridCard}>
                <List className={[classes.Listroot, Style.header].join(" ")}>
                  <ListItem className={Style.OptionHead}>
                    <ListItemText
                      primary={<h2>Modifications/Brands</h2>}
                      className={Style.OptionType}
                    />
                  </ListItem>
                </List>
                <List className={classes.Listroot}>
                  {Modifications}
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7} lg={7}>
              <div className={Style.GridCard}>
                <List className={[classes.Listroot, Style.header].join(" ")}>
                  <ListItem className={Style.OptionHead}>
                    <ListItemText
                      primary={<h2>Add-ons/Inclusives/Types</h2>}
                      className={Style.OptionType}
                    />
                  </ListItem>
                </List>
                <List className={classes.Listroot}>
                  {combination}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default ViewItem;
