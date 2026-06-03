import { useState } from 'react'
import { CalendarDays, Check, ShieldCheck, Sparkles, Star, Users, Car } from 'lucide-react'
import heroImg from '../assets/hero.png'
import { supabase } from '../supabaseClient'

const plans = [
  {
    name: 'Bronze',
    price: 'R$ 59,90',
    accent: 'text-amber-500',
    border: 'border-amber-500/35',
    items: ['Lavagem externa', 'Aspiração interna', 'Limpeza de vidros'],
  },
  {
    name: 'Prata',
    price: 'R$ 89,90',
    accent: 'text-zinc-200',
    border: 'border-zinc-400/35',
    items: ['Lavagem completa', 'Aspiração interna', 'Hidratação de painéis'],
  },
  {
    name: 'Diamante',
    price: 'R$ 149,90',
    accent: 'text-sky-400',
    border: 'border-sky-400/35',
    items: ['Lavagem completa', 'Cera protetora', 'Limpeza detalhada'],
  },
  {
    name: 'Obsidian',
    price: 'R$ 249,90',
    accent: 'text-purple-400',
    border: 'border-purple-400/35',
    items: ['Polimento técnico', 'Hidratação de couro', 'Proteção premium'],
  },
]

export default function Home() {
  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [carModel, setCarModel] = useState('')
  const [carYear, setCarYear] = useState('')
  const [carColor, setCarColor] = useState('')
  const [carPlate, setCarPlate] = useState('')
  const [selectedDate, setSelectedDate] = useState('Ter 21')
  const [selectedTime, setSelectedTime] = useState('14:00')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [notes, setNotes] = useState('')

  const handleSchedule = async () => {
    const { data, error } = await supabase
      .from("appointments")
      .insert([
        {
          nome,
          telefone,
          carro_modelo,
          ano,
          cor,
          placa,
          data_agendamento,
          horario
        }
      ])

    console.log("DATA:", data)
    console.log("ERROR:", error)

    if (error) {
      console.error(error)
      alert(error.message)
      return
    }

    alert('Agendamento realizado com sucesso!')
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-black">
              VP
            </div>
            <div>
              <h1 className="text-lg font-black leading-none tracking-tight">VP Estética</h1>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">Automotiva</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
            <a href="#inicio" className="text-[#D3AF37]">Início</a>
            <a href="#planos" className="hover:text-[#D3AF37]">Planos</a>
            <a href="#sobre" className="hover:text-[#D3AF37]">Sobre</a>
          </nav>

          <a
            href="#agendar"
            className="inline-flex items-center gap-2 rounded-xl bg-[#D3AF37] px-5 py-3 text-sm font-black text-black shadow-lg shadow-[#D3AF37]/20 transition hover:-translate-y-0.5 hover:bg-[#f0c84a]"
          >
            <CalendarDays size={17} />
            Agendar lavagem
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-screen pt-24">
        <div className="absolute inset-0">
          <img src={heroImg} alt="VP Estética Automotiva" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(211,175,55,0.15),transparent_30%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#D3AF37]/25 bg-[#D3AF37]/10 px-4 py-2 text-xs font-bold text-[#D3AF37]">
              <Sparkles size={15} /> Estética automotiva premium
            </span>

            <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Cuidado que seu <span className="text-[#D3AF37]">carro</span> merece.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Agende sua lavagem online, escolha o melhor horário, informe os dados do veículo e acompanhe tudo de forma simples.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#agendar" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D3AF37] px-7 py-4 font-black text-black shadow-xl shadow-[#D3AF37]/20 transition hover:-translate-y-0.5 hover:bg-[#f0c84a]">
                <CalendarDays size={19} /> Agendar lavagem
              </a>
              <a href="#planos" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Ver planos
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['Premium', ShieldCheck],
                ['Profissional', Users],
                ['Rápido', CalendarDays],
                ['Garantido', Star],
              ].map(([label, Icon]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur">
                  <Icon className="mx-auto mb-2 text-[#D3AF37]" size={22} />
                  <p className="text-xs font-bold text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="agendar" className="rounded-[2rem] border border-white/10 bg-[#0c0c0c]/85 p-5 shadow-2xl backdrop-blur-xl lg:p-7">
            <div className="mb-6 text-center">
              <CalendarDays className="mx-auto text-[#D3AF37]" size={32} />
              <h3 className="mt-3 text-2xl font-black">Agendar lavagem</h3>
              <p className="mt-1 text-sm text-white/55">Preencha os dados para reservar seu horário</p>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-3 text-sm font-black">1. Escolha a data</p>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {['Seg 20', 'Ter 21', 'Qua 22', 'Qui 23', 'Sex 24', 'Sáb 25', 'Dom 26'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`rounded-xl border px-3 py-3 text-xs font-bold ${selectedDate === day ? 'border-[#D3AF37] bg-[#D3AF37] text-black' : 'border-white/10 bg-white/5 text-white/75'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-black">2. Escolha o horário</p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((hour) => (
                    <button
                      key={hour}
                      onClick={() => setSelectedTime(hour)}
                      className={`rounded-xl border px-4 py-3 text-sm font-bold ${selectedTime === hour ? 'border-[#D3AF37] bg-[#D3AF37] text-black' : 'border-white/10 bg-white/5 text-white/75'}`}
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-black">3. Seus dados</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#D3AF37]"
                    placeholder="Seu nome"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#D3AF37]"
                    placeholder="Telefone"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-black">4. Dados do veículo</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#D3AF37]"
                    placeholder="Modelo do carro"
                  />
                  <input
                    value={carYear}
                    onChange={(e) => setCarYear(e.target.value)}
                    className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#D3AF37]"
                    placeholder="Ano"
                  />
                  <input
                    value={carColor}
                    onChange={(e) => setCarColor(e.target.value)}
                    className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#D3AF37]"
                    placeholder="Cor"
                  />
                  <input
                    value={carPlate}
                    onChange={(e) => setCarPlate(e.target.value)}
                    className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#D3AF37]"
                    placeholder="Placa (opcional)"
                  />
                </div>
              </div>

              <button
                onClick={handleSchedule}
                className="w-full rounded-2xl bg-[#D3AF37] py-4 font-black text-black shadow-lg shadow-[#D3AF37]/20 transition hover:-translate-y-0.5 hover:bg-[#f0c84a]"
              >
                Confirmar agendamento
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="bg-[#080808] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D3AF37]">Nossos planos</p>
            <h2 className="mt-3 text-4xl font-black">Escolha o cuidado ideal</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl border ${plan.border} bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.055]`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Plano</p>
                <h3 className={`mt-1 text-2xl font-black ${plan.accent}`}>{plan.name}</h3>
                <p className="mt-5 text-3xl font-black">{plan.price}</p>
                <p className="text-xs text-white/40">a partir de</p>
                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-white/75">
                      <Check size={16} className="text-[#D3AF37]" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}