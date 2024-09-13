"use client";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const gallery = [
  {
    id: `gallery-image-1`,
    image: `/images/gallery/gallery_img1.jpg`,
  },
  {
    id: `gallery-image-2`,
    image: `/images/gallery/gallery_img2.jpg`,
  },
  {
    id: `gallery-image-3`,
    image: `/images/gallery/gallery_img3.jpg`,
  },
  {
    id: `gallery-image-5`,
    image: `/images/gallery/gallery_img5.jpg`,
  },
  {
    id: `gallery-image-6`,
    image: `/images/gallery/gallery_img6.jpg`,
  },
  {
    id: `gallery-image-7`,
    image: `/images/gallery/gallery_img7.jpg`,
  },
  {
    id: `gallery-image-8`,
    image: `/images/gallery/gallery_img8.jpg`,
  },
];

export default function ProjectGallery() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
  }, []);
  return (
    <section id="gallery" className="">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Gallery</h2>
        </div>
        <div className="text-left">
          <div className="gallery--wrapper grid grid-cols-1 md:grid-cols-4">
            {gallery.map((galleryItem) => (
              <div className="gallery--item" key={galleryItem.id}>
                <Link
                  className="gallery--image"
                  href={galleryItem.image}
                  data-fancybox
                  data-caption={`Codename Raintree Park - Gallery`}
                >
                  <Image
                    src={`${galleryItem.image}`}
                    Ṇ
                    alt={`Codename Raintree Park`}
                    fill
                    sizes="(max-width: 768px) 100vw"
                  />
                </Link>
              </div>
            ))}
          </div>
          <p className="pt-4">{`The gallery of Prestige Pine Forest is a visual treat for anyone who appreciates exquisite design and architecture. With stunning images showcasing the beauty and elegance of these residences, the gallery allows potential buyers to get a glimpse into their dream home.`}</p>
          <p>{`With every click, you'll find yourself falling more in love with Prestige Pine Forest's impeccable craftsmanship and thoughtful design elements. Step into our virtual world through our online gallery and let it inspire you as you embark on this exciting journey towards owning your dream home`}</p>
        </div>
      </div>
    </section>
  );
}
