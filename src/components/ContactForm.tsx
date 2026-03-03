'use client'

import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const handleSubmit = () => {
    const name = (document.getElementById('name') as HTMLInputElement)?.value
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value
    const service = (document.getElementById('service') as HTMLSelectElement)?.value
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value
    
    const waMessage = `Halo, saya ${name || '[Nama]'}.%0A%0ANomor HP: ${phone || '[Nomor]'}%0ALayanan: ${service || '[Layanan]'}%0A%0APesan:%0A${message || '[Pesan]'}`
    
    window.open(`https://wa.me/6285268645461?text=${waMessage}`, '_blank')
  }

  return (
    <div className="bg-white p-8 rounded-xl border shadow-sm">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Masukkan nama Anda"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Nomor WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Contoh: 08123456789"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Layanan yang Dibutuhkan
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
          >
            <option value="">Pilih layanan</option>
            <option value="travel-antar-kota">Travel Antar Kota</option>
            <option value="rental-mobil">Rental Mobil</option>
            <option value="antar-jemput-bandara">Antar Jemput Bandara</option>
            <option value="sewa-mobil-driver">Sewa Mobil + Driver</option>
            <option value="paket-wisata">Paket Wisata</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tuliskan pesan atau pertanyaan Anda..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
          ></textarea>
        </div>
        <Button 
          type="button"
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={handleSubmit}
        >
          <Send className="h-4 w-4 mr-2" />
          Kirim via WhatsApp
        </Button>
      </form>
    </div>
  )
}
