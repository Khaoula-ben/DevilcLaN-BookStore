import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Book extends Component {

    constructor(props) {
        super(props);



    }

    render() {



        return (
            <div id="page">

                <div className="arrow-left-prev">
                    <Link to='/' className="waves-effect">
                        <i className="fa fa-angle-left"></i>
                    </Link>
                </div>

                <div className="content-container ">
                    <div className="page-block login" align="center">
                        <h5> Your favorite books are here </h5>
                    </div>
                </div>

            </div>
        );
    }
}

export default Book;
