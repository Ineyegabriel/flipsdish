import React from 'react';
import {connect} from 'react-redux';
import {fetchmenustartasync} from './Redux/Actions/MenuAction';
import {Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Demo from './Pages/Demo/Demo';
import ViewItem from './Pages/ViewItem/ViewItem';
import './App.scss';


class App extends React.Component {
 
  componentDidMount(){
    const {fetchingmenu} = this.props;
    fetchingmenu();
  }

  render(){
  
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/viewitem' component={ViewItem}/>
            <Layout>
              <Route exact path="/demo/:Id" component={Demo}/>
              <Route exact path='/mains' component={Demo}/>
              <Route exact path='/desserts' component={Demo}/>
              <Route exact path='/drinks' component={Demo}/>
            </Layout>
             
        </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchingmenu: () => dispatch(fetchmenustartasync())
})

export default connect(null, mapDispatchToProps)(App);
