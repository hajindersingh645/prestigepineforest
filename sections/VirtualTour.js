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
              src="https://res.cloudinary.com/dgzo0kdef/video/upload/v1729341861/next-foot-step/d5vigdckkbgspxt5rpba.mp4"
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
