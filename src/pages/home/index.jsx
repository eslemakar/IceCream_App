import Hero from "../../components/hero";
import CardButton from "../../components/button/card-button";
import TrendButton from "../../components/button/trend-button";
import List from "../../components/list";
const Home = () => {
  return (
    <div className="relative">
      <Hero />

      <CardButton />
      <TrendButton />

      <List />
    </div>
  );
};

export default Home;
