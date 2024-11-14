import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
  {
    title: "title 1",
    description: "desc 1",
    img: "/article_section/img1.png",
    url: "/",
  },
  {
    title: "title 2",
    description: "desc 2",
    img: "/article_section/img2.png",
    url: "/",
  },
  {
    title: "title 3",
    description: "desc 3",
    img: "/article_section/img3.png",
    url: "/",
  },
];

const Artikel = () => {
  return (
    <div className="relative flex flex-col w-screen justify-center items-center gap-y-10 max-w-full h-[600px] overflow-clip">
      <h2 className="text-pink-main font-bold text-5xl">Useful Pet Article</h2>
      <div className="w-[80vw] relative h-fit flex gap-x-10">
        {articles.map(({ title, description, img, url }, index) => (
          <Link
            href={url}
            className="w-96 h-[400px] flex flex-col gap-y-2 items-start relative rounded-2xl p-4 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)]"
            key={index}>
            <div className="relative w-full aspect-[364/243] overflow-clip rounded-xl">
              <Image
                src={img}
                alt={`article image-${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                draggable="false"
              />
            </div>
            <span className="bg-pink-main rounded-full px-3 py-1 text-[12px] text-white font-bold">
              Pet Article
            </span>
            <p className="text-black font-bold text-xl">{title}</p>
            <p className="text-black font-medium text-sm">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artikel;
