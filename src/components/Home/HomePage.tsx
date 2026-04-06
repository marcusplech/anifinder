import Landing from "./Landing";
import HomePageClient from "./HomePageClient";

const HomePage = () => {
  return (
    <div className="main content" style={{ minHeight: "100vh" }}>
      <Landing />
      <HomePageClient />
    </div>
  );
};

export default HomePage;
