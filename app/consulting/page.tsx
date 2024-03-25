import { GlobeAsiaAustraliaIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    name: 'Replacing plastics',
    description:
      'We can review your plastic consumption and suggest suitable alternatives in your packaging that are not only friendly to the environment but also economical in the long run',
    href: '#',
    icon: GlobeAsiaAustraliaIcon
  },
  {
    name: 'Waste management',
    description:
      ' We can convert your facility into a zero waste or carbon neutral endeavor with our waste management solutions. To us waste management is not about transporting waste to a faraway dump ground. It is much more than that. Waste is either recycled, upcycled or eliminated with minimal impact to the environment to the extent possible.',
    href: '#',
    icon: TruckIcon
  },
  {
    name: 'Low waste lifestyle',
    description:
      'Are you going to be new home owners or want to reduce your carbon footprint? Make us part of your home planning to include alternate energy sources, water preservation / harvesting and waste management in your wish list for your dream home.',
    href: '#',
    icon: TruckIcon
  },
  {
    name: 'Zero waste events',
    description:
      ' Are you planning an event? Let us help it be a zero waste event so that you can enjoy your event without any guilt.',
    href: '#',
    icon: TruckIcon
  },
  {
    name: 'Corporate social responsibility',
    description:
      'We can help identify projects that you can support as part of your CSR initiatives. Even if you are not ready to make the switch yet, you can still contribute to eco-friendly initiatives.',
    href: '#',
    icon: ShieldCheckIcon
  }
];

export default function ConsultingLanding() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            For corporates
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Build a business which adopts an earth-centric approach in all its products and
            operations. Your corporate social responsibility is not something that happens in the
            periphery but is reflected in every aspect of your business – from design, production,
            distribution, consumption, and end-of-life disposal. Our consulting services are
            designed to help you switch to sustainable materials or make conscious decisions in your
            operations.
            <Link href="/consulting/contact">
              <span className="font-semibold text-gray-900">
                {' '}
                Contact us <span aria-hidden="true">→</span>
              </span>
            </Link>
            .
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-0-fern_green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-0-fern_green-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
