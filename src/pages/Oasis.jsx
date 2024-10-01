import "../styles/Oasis.css";
import Hero from "../components/Hero/Hero";
import heroImage from "../assets/images/oasis-hero.jpg";
import Footer from "../components/Footer/Footer";
import om from "../assets/images/om.jpg";
import man from "../assets/images/oasis-man.jpg";
import spa from "../assets/images/spa.jpg";
import yoga from "../assets/images/yoga.jpg";
import sauna from "../assets/images/sauna.jpg";

export default function Oasis() {
  return (
    <div className="oasisBody">
      <div className="heroContainer">
        <Hero heroImage={heroImage} title="THE URBAN OASIS" />
      </div>
      <main className="oasisMain">
        <div className="oasisAbout">
          <div className="blurbContainer">
            <h2>Step into a Downtown Oasis</h2>
            <p>
              Welcome to Urban Oasis, Peak Performance Gyms' newest location in
              the heart of Surry Hills! This state-of-the-art wellness and
              rejuvenation center is designed to help you find balance, recover,
              and enhance your overall well-being. Offering a serene
              environment, Urban Oasis is more than just a gym — it’s a
              sanctuary dedicated to health, healing, and relaxation.
              <p>
                Our focus on recovery and health is supported by premium
                facilities, including saunas, hydrotherapy pools, and
                specialized recovery spaces. Whether you’re recovering from a
                tough workout or simply seeking relaxation, Urban Oasis provides
                everything you need for both body and mind.
              </p>
              <p>
                In addition to our wellness services, we offer a fully equipped
                Pilates and yoga studio, perfect for those looking to improve
                flexibility, strength, and mindfulness. Our expert instructors
                guide you through classes that cater to all experience levels,
                ensuring you get the most out of each session.
              </p>
              <p>
                At Urban Oasis, we’re dedicated to helping you restore your body
                and mind, creating a holistic experience that elevates your
                fitness journey.
              </p>
            </p>
          </div>
          <img src={om} className="om"></img>
        </div>
        <div className="facilitiesContainer">
          <h2>Facilities</h2>
          <p className="facilitiesP">
            Urban Oasis offers a wide range of wellness-focused facilities,
            including magnesium showers and spas, a sauna, dedicated yoga and
            Pilates studios, and even an aerialist studio where we hold
            specialized classes for those seeking a unique and engaging fitness
            experience.
          </p>
          <div className="facilityPhotos">
            <img src={man} className="facilityImage"></img>
            <img src={spa} className="facilityImage"></img>
            <img src={yoga} className="facilityImage"></img>
            <img src={sauna} className="facilityImage"></img>
          </div>
        </div>
        <div className="offersContainer">
          <h2>What we offer!</h2>
          <div className="allOffers">
            <h4>Multi Club Access</h4>
            <p>
              With Peak Performance Gyms' multi-club access, you can visit any
              of our six unique gym locations across Sydney, including our
              latest wellness center, *Urban Oasis*. Whether you're in the city
              or the suburbs, enjoy seamless access to all our facilities and
              classes without any restrictions, ensuring flexibility and
              convenience for your fitness journey.
            </p>

            <h4>Incredible Value</h4>
            <p>
              At Peak Performance Gyms, we believe in providing unmatched value
              for our members. With a single membership, you get access to a
              wide variety of premium facilities, state-of-the-art equipment,
              expert-led group classes, and wellness services such as saunas and
              recovery spaces—all at an affordable price, ensuring your health
              and fitness goals are within reach.
            </p>

            <h4>Member Benefits</h4>
            <p>
              Being a member of Peak Performance Gyms means enjoying exclusive
              perks, including discounted personal training sessions, priority
              booking for popular classes, and special offers at our partner
              wellness centers. Members also receive complimentary guest passes,
              giving you the opportunity to share the experience with friends
              and family.
            </p>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
