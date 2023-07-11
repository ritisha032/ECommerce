import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <ul className="mt-2">
            <li>
              Information Collection: We may collect personal information such
              as name, email address, and contact details when you interact with
              our website or services.
            </li>

            <li>
              Data Usage: We use the collected information to provide and
              improve our services, personalize user experiences, and
              communicate with you about updates or relevant information.
            </li>

            <li>
              Information Sharing: We do not sell, trade, or rent your personal
              information to third parties. However, we may share it with
              trusted partners who assist us in operating our website or
              servicing you, subject to confidentiality obligations.
            </li>

            <li>
              Data Security: We implement industry-standard security measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, or destruction.
            </li>

            <li>
              Cookies and Tracking: Our website may use cookies and similar
              tracking technologies to enhance user experience and gather
              information about usage patterns. You can adjust your browser
              settings to manage cookies preferences.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
