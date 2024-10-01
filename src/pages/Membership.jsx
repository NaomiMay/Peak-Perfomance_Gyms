import "../styles/Membership.css";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import MembershipCard from "../components/Membership-card/MemCard";
import Contact from "../components/Contact-form/Contact-form";
import heroImage from "../assets/images/memberships-hero.jpg";
import yoga from "../assets/images/yoga2.jpg";
import plank from "../assets/images/plank.jpg";
import box from "../assets/images/box.jpg";
import deadlift from "../assets/images/deadlift.jpg";
import boxer from "../assets/images/boxer.jpg";
import dance from "../assets/images/dance.jpg";

export default function Membership(props) {
  return (
    <div>
      <Hero
        heroImage={heroImage}
        title="MEMBERSHIPS"
        subtitle="Get your first week free!"
      />
      <main>
        <section className="cardContainer">
          <MembershipCard
            cardImage={yoga}
            heading={"Surry Hills"}
            blurb={"From $31 per week"}
          />
          <MembershipCard
            cardImage={plank}
            heading={"Newtown"}
            blurb={"From $24 per week"}
          />
          <MembershipCard
            cardImage={box}
            heading={"The Bunker"}
            blurb={"From $18 per week"}
          />
          <MembershipCard
            cardImage={deadlift}
            heading={"Potts Point"}
            blurb={"From $19 per week"}
          />
          <MembershipCard
            cardImage={boxer}
            heading={"Ruby Bay"}
            blurb={"From $16 per week"}
          />
          <MembershipCard
            cardImage={dance}
            heading={"Bondi Beach"}
            blurb={"From $22 per week"}
          />
        </section>
        <Contact showButton={true} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
