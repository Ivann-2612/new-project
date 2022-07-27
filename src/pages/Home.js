import Slider from "../components/slider/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="container">
        <h1>Home</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link to="">
          <div className="box">
            <div
              className="left"
              style={{
                backgroundImage:
                  "url(https://derivative.ca/sites/default/files/styles/frontpage_slideshow/public/field/field-slide-image/TSCN_DT5_4_a.jpg)",
              }}
            ></div>
            <div className="right">
              <div className="right-overlay">
                <div>
                  <p>Company post</p>
                  <h2>2022 OFFICIAL UPDATE</h2>
                </div>
                <div>
                  <Link to="/">Read more..</Link>

                  <p>Official build,2022,Company</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
