import AboutCTA from 'components/home/aboutcta';
import { Hero } from 'components/home/hero';
import Newsletter from 'components/home/newsletter';
import Services from 'components/home/services';
import Footer from 'components/layout/footer';

export const runtime = 'edge';

export const metadata = {
  description: 'eco friendly, sustainable, zero waste products for your home',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-2 sm:pt-60 lg:px-8 lg:pt-10">
          <Hero
            title="Hi, there! Ready to start your eco journey?"
            description=""
            ctaText1="We believe that sustainable living is possible right from inside our homes and offices."
            ctaText2="There is so much innovation happening around us, which is our silver lining."
            ctaText3="We aim to promote eco-friendly alternatives and make them an integral part of our lifestyle."
            image1="/home/sapling.jpg"
            image2="/home/water.jpg"
            image3="/home/lava.jpg"
            image4="/home/forest.jpg"
            image5="/home/fish.jpg"
          />
          <Services />
          <Newsletter />
          <AboutCTA />
        </div>
        <Footer />
      </div>
    </>
  );
}
