import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <section id="location" className="bg-primary-bg">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Location Map</h2>
        </div>
        <div className="">
          {/* <div className="content">
            <p className="text">
              {`Situated in the heart of Whitefield, Bangalore's IT hub, Prestige Pine Forest offers a prime location that combines convenience and tranquility. With easy accessibility to major highways like Outer Ring Road and Old Madras Road, residents can enjoy seamless connectivity to all parts of the city.`}
            </p>
            <p>
              {`The proximity to top-notch educational institutions like Ryan International School and Vydehi School of Excellence makes it an ideal choice for families with children. Additionally, renowned hospitals such as Columbia Asia Hospital are just a stone's throw away, ensuring quick access to healthcare facilities`}
            </p>
            <p>
              {`For those who love shopping and entertainment, Forum Shantiniketan Mall and Phoenix Marketcity provide a wide range of options within close proximity. And if you're looking for some greenery amidst the bustling city life, the beautiful Kundalahalli Lake Park is just a short drive away.`}
            </p>
            <p>
              {`With its strategic location in Whitefield, Prestige Pine Forest offers not only luxurious residences but also unmatched conveniences right at your doorstep. Whether it's work or leisure activities you seek, everything is within reach when you choose to call this prestigious development your home.`}
            </p>
          </div> */}
          <div className="pt-5 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31103.53931685325!2d77.742528!3d12.975535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112fed1acb05%3A0xa9c51a9e20a4c5b1!2sPrestige%20Pine%20Forest!5e0!3m2!1sen!2sin!4v1745291263718!5m2!1sen!2sin"
                allowFullScreen
                className="absolute w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src="/images/location-map.jpg"
                alt="location map"
                layout="fill"
                objectFit="cover"
                objectPosition="0% 75%"
                className="z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
