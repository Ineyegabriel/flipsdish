import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Styles from './NavBar.module.scss'
import {FetchMenuSectionItems} from '../../Utils';


  const NavBar = () => {
  
    let NavItems = FetchMenuSectionItems().map(items => {
      return items.map(({Name, ImageUrl, MenuSectionId}) => (
        <Link to={`/demo/${MenuSectionId}`} className={Styles.a} key={MenuSectionId}>
           <Button className={Styles.navButtons}>{Name}</Button>
        </Link>
            )
      )
    });
  return (
    <nav className={Styles.root}>
      <Link to="/" className={Styles.a} >
           <Button className={Styles.navButtons}>HOME</Button>
        </Link>
          {NavItems}
    </nav>
  );
}

export default NavBar;