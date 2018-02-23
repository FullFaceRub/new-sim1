import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component{

    
    render(){
        return(
            <div>
                <Link to={`/shelf/a`}>Shelf A</Link>
            </div>
        )
    }
}