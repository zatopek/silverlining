import Link from 'next/link';

export default function AboutCTA() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-1 dark:bg-neutral-900">
      <div className="mx-auto max-w-lg px-2 text-center lg:px-2">
        <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 className="inline max-w-xl text-0-uranian_blue-300 underline sm:block dark:text-0-uranian_blue-500">
            <Link href="/about">Want to learn more about us?</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
