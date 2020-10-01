import React, {Component} from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';
import './Home.css';

class Home extends Component {

    render() {
        return(
            <div>
                <header className="Home">
                    <ul>
                        <li>
                            <NavLink to="/users" exact>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses">Courses</NavLink>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/users" exact component={Users} />
                    <Route path="/courses" component={Courses} />
                    <Redirect from="/all-courses" exact to="/courses" />
                    {/* <Redirect from="/" to="/users" /> */}
                    <Route render={() => <h2>Page Not Found</h2>} />
                </Switch>
            </div>
            
        )
    }
}

export default Home;