import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import AiDestinationFinder from '../components/AiDestinationFinder';
import FeaturedPackages from '../components/FeaturedPackages';
import Destinations from '../components/Destinations';
import HowItWorks from '../components/HowItWorks';
import SpecialOffer from '../components/SpecialOffer';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-[#082f49]">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <AiDestinationFinder />
      <FeaturedPackages />
      <Destinations />
      <HowItWorks />
      <SpecialOffer />
      <Testimonials />
    </div>
  );
};

export default Home;
