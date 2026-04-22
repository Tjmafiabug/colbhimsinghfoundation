import { Calendar, MapPin, Building2, HandHeart } from 'lucide-react'
import { foundationFacts } from '@/lib/data'

const iconMap = [
  { icon: Calendar, bg: 'bg-saffron/10', color: 'text-saffron' },
  { icon: MapPin,   bg: 'bg-amber-100',  color: 'text-amber-700' },
  { icon: Building2,bg: 'bg-stone-100',  color: 'text-stone-600' },
  { icon: HandHeart,bg: 'bg-orange-100', color: 'text-orange-600' },
]

export function FeatureSections() {
  return (
    <section className="bg-white border-b border-void/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-3 block">Foundation facts</span>
          <h2 className="font-display text-display-xl text-void leading-tight">
            Built on service, sustained by purpose
          </h2>
          <p className="font-sans text-sm text-stone-editorial mt-3 leading-relaxed">
            Everything the Col. Bhim Singh Foundation does is rooted in the legacy of Late Col. Bhim Singh and a commitment to rural Haryana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foundationFacts.map((fact, i) => {
            const { icon: Icon, bg, color } = iconMap[i % iconMap.length]
            return (
              <div
                key={fact.label}
                className="flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`p-5 rounded-full ${bg} mb-5`}>
                  <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.75} />
                </div>
                <div className="font-display text-display-lg text-void leading-none mb-1">
                  {fact.value}
                </div>
                <div className="eyebrow text-saffron mb-2">{fact.label}</div>
                <p className="font-sans text-xs text-stone-muted leading-relaxed max-w-[180px]">
                  {fact.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
