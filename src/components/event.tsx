import eventLists from '@/constants/eventLists'
import Image from 'next/image'

export default function Event() {
  return (
    <section id="event" className="tempat mb-16">
      <div className="header flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-4xl lg:text-7xl text-center lg:text-start font-bold tracking-tighter">
          Lebih dari <br className="hidden lg:block" />
          Sekedar Kopi
        </h1>

        <div className="flex flex-col gap-4 justify-end items-center lg:items-end lg:w-1/3">
          <p className="text-center lg:text-end lg:text-lg">
            Kami juga sering mengadakan event komunitas seperti live music,
            workshop kopi, dan gathering kecil yang membuat cafe ini terasa
            lebih hidup.
          </p>

          <button
            className={`lg:text-lg cursor-pointer w-fit justify-center py-3 flex gap-1 items-center px-8 font-semibold rounded-full
        transition-all duration-150 bg-foreground text-cream hover:scale-105 active:scale-95`}
          >
            Lihat Event
          </button>
        </div>
      </div>

      <div className="tempat grid md:grid-cols-3 gap-4 relative">
        {eventLists.map((event) => (
          <div
            key={event.id}
            className="relative w-full aspect-3/4 rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(102, 102, 102, 0.00) 56.06%, rgba(0, 0, 0, 0.90) 100%)',
              }}
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-cream">
              <h1 className="text-xl">{event.title}</h1>
              <div className="desc text-xl">
                <p>{event.desc1}</p>
                <p>{event.desc2}</p>
              </div>
            </div>

            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={event.id <= 3}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
