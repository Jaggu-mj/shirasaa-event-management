import React from "react";
import "../Style/home.css";
import "../Style/global.css"
import videosDetails from "../api/videosDetails.json";
import VideoSection from "../components/VideoSection"
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home-container">
            <div className="video-container">
                {videosDetails.map((vid) => (
                    <VideoSection key={vid.id} currentElem={vid} />
                ))}
            </div>
            <CardSection />
            <Footer />
        </div>
    );
};

export default Home;
