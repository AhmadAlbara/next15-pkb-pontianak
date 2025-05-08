// app/news/[slug]/page.jsx

import BackButton from "@/components/elements/BackButton";
import NEWS_ITEMS from "@/constants/news";
import Image from "next/image";


export default function NewsDetail({ params }) {
  const newsItem = NEWS_ITEMS.find((item) => item.slug === params.slug);

  if (!newsItem) {
    return <p className="p-4">Berita tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 ">
      <BackButton />
      <h1 className="text-2xl font-bold my-2 ">{newsItem.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(newsItem.date).toLocaleDateString("id-ID")}
      </p>
      <Image
        src={newsItem.src}
        alt={newsItem.alt}
        width={800}
        height={100}
        className="rounded mb-4 w-full"
        
      />
      <p>{newsItem.description}</p>
    </div>
  );
}
