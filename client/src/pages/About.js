import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us-ECommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to ApniDukaan! We're an ecommerce store dedicated to
            providing you with a seamless and enjoyable shopping experience. Our
            curated selection of high-quality products ensures that you'll find
            exactly what you're looking for. With a focus on customer
            satisfaction, our friendly and knowledgeable team is here to assist
            you whenever you need help. We value your privacy and have
            implemented robust security measures to protect your information.
            Thank you for choosing ApniDukaan. Start exploring our collection
            today and discover the perfect items for your needs. Happy shopping!
            ApniDukaan Team
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
