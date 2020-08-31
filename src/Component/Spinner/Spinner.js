import React from 'react';
import Styles from './Spinner.module.scss';
import {useSelector} from 'react-redux';

const Spinner = () => {
   let isloading = useSelector(state => state.menu.loading)
 return (
    <div className={isloading ? Styles.ldsRing : Styles.hidden}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
 )
};

export default Spinner;