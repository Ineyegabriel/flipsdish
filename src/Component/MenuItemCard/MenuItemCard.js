import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { useLocation } from "react-router";
import Styles from "./MenuItemCard.module.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 300,
    height: 345,
    backgroundColor: theme.palette.background.paper,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MenuItemCard = ({
  Id,
  ImageUrl,
  Price,
  Name,
  Description,
  MenuItemOptionSets,
  Alcohol
}) => {
 
  

  let location = useLocation();
  let { pathname } = location;
  const classes = useStyles();
  let template = (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        title={Name}
      />
      <CardMedia className={classes.media} image={ImageUrl} title={Name} />
      <CardContent className={Styles.addonButton}>
        <Typography variant="body2" color="textSecondary" component="p">
          {Description ? Description:`Do not forget to check out our vast options ${Name}`}
        </Typography>
      </CardContent>
      <CardContent className={Styles.addonButton}>
        { MenuItemOptionSets.length > 0 ? 
        <Link
            to={{
              pathname: "/viewitem",
              state: {
                from: pathname,
                Id,
                ImageUrl,
                Price,
                Name,
                Description,
                MenuItemOptionSets,
                Alcohol
              },
            }}
          >
            Browse Options
          </Link>: null}
      </CardContent>
    </Card>
  );

  return ImageUrl ? template : null;
};

export default MenuItemCard;
