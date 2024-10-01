import "../styles/Home.css";
import ContactForm from "../components/Contact-form/Contact-form";
import Hero from "../components/Hero/Hero";
import heroImage from "../assets/images/home-hero.jpg";
import punch from "../assets/images/punch-bag.jpg";
import warrior from "../assets/images/warrior.jpg";
import jump from "../assets/images/jump.jpg";
import Footer from "../components/Footer/Footer";
import GymCard from "../components/Gym-card/Gymcard";

export default function Home(props) {
  return (
    <div className="homeBody">
      <div className="heroContainerHome">
        <Hero
          heroImage={heroImage}
          title="PEAK PERFORMANCE"
          subtitle="Sydney Gyms"
        />
      </div>

      <main className="homeMain">
        <div className="aboutContainer">
          <h2>About Us</h2>
          <p>
            Welcome to Peak Performance Gyms, Sydney’s leading fitness
            community! With six state-of-the-art locations across the city, we
            are committed to providing the ultimate fitness experience for all
            levels. Our gyms are designed to inspire, motivate, and challenge
            you, whether you’re just starting your fitness journey or aiming to
            push your limits.
            <p>
              Our newest facility, The Urban Oasis, offers a unique blend of
              modern fitness equipment and a calming atmosphere, perfect for
              anyone seeking a balanced and revitalizing workout space in the
              heart of the city.
            </p>
            <p>
              At Peak Performance Gyms, we offer a wide range of services, from
              dynamic group classes to personal training, ensuring you have all
              the tools you need to achieve your goals. Our community-focused
              environment fosters connection, support, and motivation, making
              every visit more than just a workout.
            </p>
            <p>
              Join us at Peak Performance and take your fitness to new heights!
            </p>
          </p>
        </div>
        <div className="ourGyms">
          <h2>Our Gyms</h2>
          <div className="gymImageContainer">
            <GymCard
              gymCardImage={punch}
              gymName="The Bunker"
              description="The Bunker specializes in high-intensity Boxing, CrossFit, and Calisthenics, pushing your limits and enhancing overall fitness in a motivating environment."
            />
            <GymCard
              gymCardImage={warrior}
              gymName="Urban Oasis"
              description="Oasis Studio offers a peaceful space for yoga enthusiasts, featuring diverse styles from restorative to power yoga, designed to enhance flexibility and inner calm."
            />
            <GymCard
              gymCardImage={jump}
              gymName="Potts Point"
              description="Our Potts Point location focuses on strength and endurance training with expert-designed workouts to build muscle and boost stamina."
            />
          </div>
        </div>
        <div>
          <ContactForm showButton={true} className="homeContactForm" />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
