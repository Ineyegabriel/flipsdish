import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import Styles from "./MenuItemCard.module.scss";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import { getMasterOptionSet } from "../../Utils";



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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));


const MenuItemCard = ({
  MenuItemId,
  ImageUrl,
  Price,
  Name,
  Description,
  MenuItemOptionSets,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const getOptionsPrice = (menuoptionsSet) => (
    menuoptionsSet.map(({ MenuItemOptionSetItems })=>(
      MenuItemOptionSetItems.map(item => (
        
      ))
    ))
  )
  let addons = getOptionsPrice;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  let template = (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {Price}
          </Avatar>
        }
        title={Name}
        subheader="September 14, 2016"
      />
      <Link to="/">
        <CardMedia className={classes.media} image={ImageUrl} title={Name} />
      </Link>
      <CardContent className={Styles.addonButton}>
        <Typography variant="body2" color="textSecondary" component="p">
          {Description}
        </Typography>
      </CardContent>
      <CardContent className={Styles.addonButton}>
        {Price > 0 ? null : (
          <Button
            onClick={()=>{
              getOptionsPrice(MenuItemOptionSets);
              handleExpandClick()
            }}
            aria-expanded={expanded}
            aria-label="show more"
            variant="contained"
          >
            Browse
          </Button>
        )}
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse>
    </Card>
  );

  return ImageUrl ? template : null;
};

export default MenuItemCard;