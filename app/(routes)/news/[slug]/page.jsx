// app/news/[slug]/page.jsx

import NEWS_ITEMS from "@/constants/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsDetail({ params }) {
 


  const newsItem = NEWS_ITEMS.find(item => item.slug === params.slug);


  if (!newsItem) {
    return <p className="p-4">Berita tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{newsItem.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{new Date(newsItem.date).toLocaleDateString('id-ID')}</p>
      <Image src={newsItem.src} alt={newsItem.alt} width={800} height={400} className="rounded mb-4" />
      <p>{newsItem.description}</p>
      <Link href="/news" className="inline-block mt-4 text-primary hover:underline">
        ← Kembali ke Berita
      </Link>
    </div>
  );
}
