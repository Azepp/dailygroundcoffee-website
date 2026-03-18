import Beranda from '@/components/beranda'
import Tentang from '@/components/tentang'
import Navbar from '@/components/navbar'
import Menu from '@/components/menu'
import Tempat from '@/components/tempat'
import Event from '@/components/event'
import Kunjungi from '@/components/kunjungi'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background font-sans relative">
      <Navbar />

      <Beranda />

      <div className="flex flex-col gap-6 px-4">
        <Tentang />
        <Menu />
        <Tempat />
        <Event />
      </div>

      <Kunjungi />

      <Footer />
    </div>
  )
}
