
import { useSheet } from "../hooks/useSheet";
import type { Profile } from "../types/portfolio";
import "../Styles/Home.scss";
import img from "../Assests/Profile_pic_edited-removebg-preview (2).png"

const Home = () => {
  const { data } = useSheet<Profile>("Profile");
  const profile = data[0];

  return profile ? (
    <section className="home-section d-flex align-items-center">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 col-md-12 home-content text-center text-lg-start px-5">
            <h1 className="intro-text">
              I<span className="highlight">’</span>M
            </h1>
            <h1 className="name-text">{profile.FullName}</h1>
            <p className="role-text mt-4"> 
              {profile.Role}
            </p>
          </div>
          <div className="col-lg-4 col-md-12 home-image p-0">
            <img
              src={img}
              alt="Profile"
              className="img-fluid hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  ) : <p>Loading...</p>;
}

export default Home;
