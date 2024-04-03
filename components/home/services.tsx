import { BriefcaseIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    name: 'Products',
    description: 'Eco friendly products that are sustainable and recyclable.',
    icon: ShoppingBagIcon,
    path: '/search'
  },
  {
    name: 'Consulting services',
    description:
      'Talk to us if you would like to know more about sustainable living or are looking to setup a sustainable business.',
    icon: BriefcaseIcon,
    path: '/consulting'
  }
];

export default function Services() {
  return (
    <div className="bg-white py-12 sm:py-6 dark:bg-neutral-900 ">
      <div className="mx-auto max-w-7xl px-2 lg:px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-0-uranian_blue-500">
            Our offerings
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <Link href={feature.path} passHref>
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-0-tea_rose_(red)-800">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-0-fern_green-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600 dark:text-0-tea_rose_(red)-800">
                    {feature.description}
                  </dd>
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
