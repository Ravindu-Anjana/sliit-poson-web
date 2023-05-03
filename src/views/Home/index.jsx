/**
 * Home Page
 */
import { Header, Footer } from "../../components";

import Hero from "../Hero";
import VesakZone from "../VesakZone";
import Mentors from "../Mentors";
import Committee from "../Committee";
import OurWork from "../OurWork";
import Feedback from "../Feedback";

const Home = () => {
  return (
    <>
      <Header />
      <section id="home">
      <Hero />
      </section>
      <VesakZone />
      <section id="mentors">
      <Mentors />
      </section>
      <section id="members">
      <Committee />
      </section>
      <section id="ourwork">
      <OurWork />
      </section>
      <section id="contactus">
      <Feedback />
      </section>
      <Footer />
    </>
  );
};

export default Home;
