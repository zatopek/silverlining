const people = [
  {
    name: 'Maurya Velpula',
    role: ' Founder / CEO',
    imageUrl: '/about/maurya_profile.jpg',
    bio: 'Maurya has a passion for sustainable eco friendly alternatives to everyday products. She decided to leave her corporate career behind her to start this company and do her bit in saving the planet. Maurya is a IIT and IIM graduate and has worked in the corporate world for 20 years before starting this company.',
    xUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/maurya-velpula-02aa0a16/'
  }
  // More people...
];

export default function About() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About the team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Silverlining we care for our environment! We are committed to reducing waste and
            inspiring sustainable practices in as many people and businesses as possible. We wish to
            see less plastic and more eco-friendly materials used in our businesses, offices and
            homes.
          </p>
          <hr></hr>
          <p className="text-md leading-8 text-gray-600">
            Our aim is to:
            <ul className="list-decimal pl-10 ">
              <li>Promote eco friendly products that:</li>
              <li>
                <ul className="list-item pl-10 ">
                  <li>reduce plastic footprint and</li>
                  <li>harmful chemicals in the water supply</li>
                </ul>
              </li>
              <li>Provide solutions to reduce plastic and harmful chemicals in the water supply</li>
              <li>Reduce waste and revive environment</li>
              <li>
                Support businesses in replacing plastic and forever chemicals in their products and
                operations
              </li>
              <li>Curate kits/solutions for home and offices to make the switch</li>
            </ul>
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img
                className="aspect-[4/5] w-52 flex-none rounded-full object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">X</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
