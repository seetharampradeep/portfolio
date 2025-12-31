
import { useSheet } from "../hooks/useSheet";
import type { Profile } from "../types/portfolio";
import "../Styles/Home.scss";
import img from "../Assests/Profile_pic_edited-removebg-preview (2).png"
import { motion } from "framer-motion";

const Home = () => {
  const { data } = useSheet<Profile>("Profile");
  const profile = data[0];

  return profile ? (
    <section className="home-section d-flex align-items-center p-5">
      <div className="container-fluid"
      >
        <motion.div 
          className="row align-items-center p-5"
          initial={{opacity:0,x:'-100vh'}}
          animate={{opacity:1,x:0}} 
          >
          <div className="col-lg-8 col-md-12 home-content text-center text-lg-start">
            <h1 className="intro-text">
              I<span className="highlight">’</span>M
            </h1>
            <h1 className="name-text">{profile.FullName}</h1>
            <p className="role-text mt-4"> 
              {profile.Role}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="user-intro m-auto p-5 text-white user-intro w-50"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.5}}
          whileHover={{scale:1.2}}
        >
          <p className="into-text">
            Experienced Full-Stack Developer with expertise in React, .NET, SQL Server, and Microsoft Azure. Skilled in designing end-to-end web applications, developing RESTful APIs, optimizing database performance, and deploying cloud-native solutions. Proven ability to work across the full software development lifecycle and deliver high-quality, scalable applications
          </p>
        </motion.div>

      </div>
    </section>
  ) : <p>Loading...</p>;
}

export default Home;
