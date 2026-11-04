import { Header } from "../components/Header";
import { About } from "../components/About";

export const Home = () => {
  return (
    <div className="home">
      <div className="subhome">
        <Header />
        <About />
      </div>
    </div>
  );
};
