import React from 'react';
import Styles from './MenuCard.module.scss';
import {Link} from 'react-router-dom';

const MenuCard = ({itemtitle,imgsrc,id}) => {
    const imgstyle = {
        backgroundImage: `url(${imgsrc})`,
    };
    
    
    return (
        
             <Link to={`/demo/${id}`} className={Styles.menu_item}>
                    <div className={Styles.background_image} style={imgstyle}></div>
                    <div className={Styles.content}>
                    <div className={Styles.title}>{itemtitle}</div>
                    </div>
            </Link>
    
            
    );
};
export default MenuCard;