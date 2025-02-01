import visionMissionValues from "../api/visionMissionValues.json.json"
import "../Style/CardSection.css";

const CardSection = () => {
    return (
        <>
            <section className="cards-section">
                <video autoPlay muted loop className="background-video">
                    <source src="https://cdn.pixabay.com/video/2018/12/03/19725-304748190_tiny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="cards-container">
                    {visionMissionValues.map((card) => (
                        <div className="card" key={card.id}>
                            <div className="card-content">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
export default CardSection;