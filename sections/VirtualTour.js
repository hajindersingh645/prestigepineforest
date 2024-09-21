import Link from "next/link";

const VirtualTour = () => {
  return (
    <section id="virtual-tour" className="">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Virtual Tour</h2>
        </div>
        <div className="pricing--col">
          <div className="flex_">
            <video
              src="/WhatsApp Video 2024-09-21 at 10.07.54_71263b67.mp4"
              type="mp4"
              controls="true"
              className="w-full"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
