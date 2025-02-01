const VideoSection = (props) => {
    //Use Destructuring
    return (
        <>
            <div className="home">
                <section className="video-section">
                    <video autoPlay muted loop className="background-video">
                        <source src={props.currentElem.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <h1>{props.currentElem.videoHeader}</h1>
                        <p>{props.currentElem.videoDescription}</p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default VideoSection;
