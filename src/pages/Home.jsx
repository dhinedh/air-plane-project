import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import AiDestinationFinder from '../components/AiDestinationFinder';
import FeaturedPackages from '../components/FeaturedPackages';
import Destinations from '../components/Destinations';
import SportsCategories from '../components/SportsCategories';
import HowItWorks from '../components/HowItWorks';
import SpecialOffer from '../components/SpecialOffer';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <SportsCategories />
      <Destinations />
      <FeaturedPackages />
      <WhyChooseUs />
      <AiDestinationFinder />
      <HowItWorks />
      <Testimonials />
      <SpecialOffer />
    </div>
  );
};

export default Home;
