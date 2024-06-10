import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Text from "@/components/Text";
import Cards from "@/components/Cards";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import analytics from "@/assets/analytics.png";
import tokens from "@/assets/credit_token.png";
import collaboration from "@/assets/code_collaboration.png";
import digital_token from "@/assets/digital_token.png";

import "./index.css";

function App() {
  return (
    <main className="pt-10 bg-hero-bg">
      <NavBar />
      <div className="">
        <Hero />
        <Partners />
        <Text
          title="Features that work for your future."
          paragraphe="Check out our amazing features and experience the power of Vaultflow for yourself."
        />
        <div className="mx-auto w-[70%] gap-10 justify-center flex pb-[80px]">
          <Cards
            logo={analytics}
            title="Analytics Dashboard"
            paragraphe="Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
            redirection="View dashboard"
          />
          <Cards
            logo={tokens}
            title="Digital Credit Tokens"
            paragraphe="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
            redirection="View tokens"
          />
        </div>
        <div className="mx-auto w-[70%] justify-center flex pb-20">
          <Cards
            logo={collaboration}
            title="Code collaboration"
            paragraphe="Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."
            redirection="View code collaboration"
            hasImage={true}
            image={digital_token}
          />
        </div>
        <Banner
          title="Our powerful analytics provides invaluable insights."
          paragraphe="Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. "
          textButton="Download the app"
        />
        <Footer />
      </div>
    </main>
  );
}

export default App;
