import React from "react";

const Location = () => {
  return (
    <section id="location">
      <div className="container">
        <h2 className="title">location</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="content">
            <p className="text-2xl font-display font-semibold mt-7 mb-3">
              Codename Raintree Park
            </p>
            <p className="text-lg font-medium  capitalize">
              Introducing New Launch Raintree Park - Royal Township Project In
              Varthur, Whitefield, East Bangalore. Nestled In A Prime Location
            </p>
          </div>
          <div className="image lg:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31106.310617538922!2d77.744833!3d12.953361000000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzEyLjEiTiA3N8KwNDQnNDEuNCJF!5e0!3m2!1sen!2sus!4v1724669908549!5m2!1sen!2sus"
              allowFullScreen
              className="w-full h-[600px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
