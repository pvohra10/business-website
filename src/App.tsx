import './App.css'
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import SplitText from "./components/ui/SplitText";
import Particles from './components/ui/Particles';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function MainPage() {
  return (
    <div className="w-full p-0 m-0 bg-[#07020D] min-h-screen overflow-x-hidden">
      
      {/* HEADER */}
      <header className="z-50 fixed top-0 left-0 w-full bg-black shadow-lg text-center px-4 py-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        {/* Logo */}
        <img src="https://picsum.photos/200/500" className="h-14 w-14 rounded-full" alt="Logo" />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-[#FFFCF9] px-4 py-2 rounded-lg">
          {['Home', 'About', 'Gallery', 'Contact', 'Pricing'].map((label) => (
            <a
              key={label}
              href="#"
              className="font-bold border-2 border-white px-3 py-1 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-150"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[url('/src/assets/background2.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />

  <div className="text-center p-4 sm:p-8 rounded-lg bg-black bg-opacity-60 text-[#FFFAFF] hover:scale-105 transition duration-200 shadow-lg w-full max-w-md z-10">
    <SplitText
      text="Mountain Climbers!"
      className="text-2xl font-bold text-center"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
    <p className="mt-2 text-base sm:text-lg">For all your Geronimo! needs</p>
  </div>
</section>

      {/* ABOUT */}
      <section className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-[#FFFCF9] shadow-lg text-center">
        <img src="https://picsum.photos/1200/1200" className="h-40 w-40 rounded-lg" alt="About image" />
        <div className="bg-[#07020D] text-[#FFFCF9] p-4 rounded-lg text-left max-w-xl">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="mt-2 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat pretium.
            Donec vitae nibh a velit dictum pellentesque non eget dui.
          </p>
        </div>
      </section>

      {/* SERVICES + CAROUSEL */}
      <section className="backdrop-blur-md text-white text-center p-6 bg-black">
        <div className="border-2 border-[#FFFCF9] rounded-lg p-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="mt-2 text-base sm:text-lg">
            We offer a range of cleaning services including residential and commercial window cleaning, pressure washing, and more.
          </p>

          <Carousel
            opts={{ loop: true }}
            orientation="horizontal"
            className="w-full mt-8 bg-black shadow-lg rounded-lg"
          >
            <CarouselContent>
              {[1, 2, 3].map((num) => (
                <CarouselItem key={num}>
                  <img
                    src={`https://picsum.photos/1400/400?random=${num}`}
                    alt={`Cleaning Image ${num}`}
                    className="w-full max-h-64 sm:max-h-96 object-cover rounded-lg blur-sm"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex items-center justify-center p-6 bg-black text-[#FFFCF9] text-sm sm:text-base">
        <p>&copy; 2023 Spot On Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;