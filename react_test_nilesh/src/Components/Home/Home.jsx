//-- React Standard
import React, { Component } from "react";
import { connect } from 'react-redux';

//-- Custom
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Banner from "../Common/Banner/Banner";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                <Header />
                <Banner />

                <main id="main">

                </main>


                <Footer />
            </div>
        );
    }
}

//-- Here we are adding Reducer names, so it can be get data from reducers using store
function mapStateToProps(state) {
    const { language } = state;
    return {
        language
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };