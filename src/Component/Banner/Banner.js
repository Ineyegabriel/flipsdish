import React from 'react';
import Radium from 'radium';
import Style from './Banner.module.scss';

const Banner = ({itemImage,itemType,Name}) => {
   
    const classes = {
        banner:{
            backgroundImage: `url(${require(`/${itemType.replace(/ /g, "")}.jpg`)})`
        }
    }
    return(

        <div className={Style.banner} style={classes.banner}>
            <div className={Style.imagewrapper}>
                <img src={itemImage}  className={Style.itemImg} alt="Menu item"/>
            </div>
        </div>
    )
    


}

export default Radium(Banner);