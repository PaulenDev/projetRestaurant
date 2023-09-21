import React from 'react'
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from '../images/banner.jpeg';
import "../styles/HomeStyles.css";


const Home = () => {
    return (
        <Layout>
            <div className="home" style={{backgroundImage: `url(${Banner})`}}>
                <div className="headerContainer">
                    <h1>MonRestaurant</h1>
                    <p>Best Food In France</p>
                    <Link to="/menu">
                        <button>COMMANDER</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
export default Home
