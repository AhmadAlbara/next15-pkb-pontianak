import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto  ">
      {/* HERO */}
      <section className="relative h-96">
        <Image
          src="/images/beranda.jpg"
          alt="Partai PKB"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bangkit Bersama PKB</h1>
          <p className="text-lg md:text-xl">Partai Kebangkitan Bangsa untuk Indonesia Maju</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Tentang PKB</h2>
        <p className="text-gray-700 text-lg">
          PKB didirikan untuk memperjuangkan aspirasi rakyat Indonesia melalui nilai-nilai keagamaan, 
          kebangsaan, dan kemanusiaan. Kami berkomitmen membangun Indonesia yang adil, makmur, dan bermartabat.
        </p>
      </section>

      {/* VISI MISI */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-2">Visi</h3>
              <p className="text-gray-700">
                Mewujudkan Indonesia yang adil, makmur, sejahtera, dan bermartabat berdasarkan nilai-nilai Pancasila.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Misi</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Memperjuangkan keadilan sosial untuk seluruh rakyat Indonesia</li>
                <li>Menguatkan ekonomi kerakyatan</li>
                <li>Memperkokoh persatuan dan kesatuan bangsa</li>
                <li>Meningkatkan kesejahteraan masyarakat melalui kebijakan pro-rakyat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Berita Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/berita${item}.jpg`}
                alt={`Berita ${item}`}
                width={400}
                height={250}
                objectFit="cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-primary">Judul Berita {item}</h3>
                <p className="text-gray-600 text-sm mt-2">Ringkasan singkat berita terbaru partai PKB...</p>
                <Link href={`/berita/${item}`} className="text-blue-600 text-sm font-medium mt-2 inline-block">
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFIL KETUA */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/ketua.jpg"
              alt="Ketua PKB"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Ketua Umum PKB</h2>
            <h3 className="text-xl font-semibold text-gray-800">Nama Ketua</h3>
            <p className="text-gray-700 mt-2">
              Ketua Umum PKB adalah sosok yang berpengalaman dalam dunia politik, sosial, dan keagamaan. 
              Dengan kepemimpinan beliau, PKB terus berjuang untuk rakyat.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Bergabung Bersama PKB</h2>
        <p className="text-lg text-gray-700 mb-6">
          Bersama kita wujudkan Indonesia yang lebih adil, makmur, dan bermartabat.
        </p>
        <Link href="" className="bg-primary text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition">
        
          Daftar Sekarang
        </Link>
      </section>
    </div>
  );
}
