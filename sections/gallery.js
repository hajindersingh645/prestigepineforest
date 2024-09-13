"use client";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const gallery = [
  {
    id: `gallery-image-1`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_1.jpg`,
  },
  {
    id: `gallery-image-2`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_2.jpg`,
  },
  {
    id: `gallery-image-3`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_3.jpg`,
  },
  {
    id: `gallery-image-5`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_5.jpg`,
  },
  {
    id: `gallery-image-6`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_6.jpg`,
  },
  {
    id: `gallery-image-7`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_7.jpg`,
  },
  {
    id: `gallery-image-8`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_8.jpg`,
  },
  {
    id: `gallery-image-9`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_9.jpg`,
  },
  {
    id: `gallery-image-10`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_10.jpg`,
  },
  {
    id: `gallery-image-11`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_11.jpg`,
  },
  {
    id: `gallery-image-12`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_12.jpg`,
  },
  {
    id: `gallery-image-13`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_13.jpg`,
  },
  {
    id: `gallery-image-14`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_14.jpg`,
  },
  {
    id: `gallery-image-15`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_15.jpg`,
  },
  {
    id: `gallery-image-16`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_16.jpg`,
  },
  {
    id: `gallery-image-17`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_17.jpg`,
  },
  {
    id: `gallery-image-18`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_18.jpg`,
  },
  {
    id: `gallery-image-19`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_19.jpg`,
  },
  {
    id: `gallery-image-20`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_20.jpg`,
  },
  {
    id: `gallery-image-21`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_21.jpg`,
  },
  {
    id: `gallery-image-22`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_22.jpg`,
  },
  {
    id: `gallery-image-23`,
    image: `/images/gallery/Prestige_Raintree_Park_Lifestyle_Gallery_23.jpg`,
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
        <h2 className="title">Gallery</h2>
        <div className="text-center">
          <div className="gallery--wrapper">
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
        </div>
      </div>
    </section>
  );
}
