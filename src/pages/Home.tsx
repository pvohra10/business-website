// import '../App.css'
// import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
// import SplitText from "../components/ui/SplitText";
// import Particles from '../components/ui/Particles';
// import ContactForm from '../components/ui/form';

// const handleAnimationComplete = () => {
//     console.log('All letters have animated!');
//     console.log('Google Maps API Key:', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
// };

// function Home() {
//     return (
//         <div className="w-full p-0 m-0 bg-[#07020D] min-h-screen overflow-x-hidden">

//             {/* HEADER */}
//             <header className="gap-4 z-50 fixed top-0 left-0 w-full bg-black shadow-lg text-center px-4 py-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
//                 {/* Logo */}
//                 <img src="https://picsum.photos/200/500" className="h-14 w-14 rounded-full" alt="Logo" />

//                 {/* Navigation */}
//                 <nav className=" flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-[#FFFCF9] px-4 py-2 rounded-lg">
//                     {['Home', 'About', 'Gallery', 'Contact', 'Pricing'].map((label) => (
//                         <a
//                             key={label}
//                             onClick={() => {
//                                 const el = document.getElementById(label);
//                                 if (label === "Pricing") {
//                                     window.location.href = '/Pricing';
//                                     return;
//                                 }
//                                 if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                             }}
//                             className="font-bold border-2 border-white px-3 py-1 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-150"
//                         >
//                             {label}
//                         </a>
//                     ))}
//                 </nav>
//             </header>

//             {/* HERO SECTION */}
//             <section id="Home" className="relative flex items-center justify-center min-h-screen sm:bg-[url('/src/assets/new_background.png')] bg-cover bg-center bg-no-repeat px-4">
//                 {/* Make sure particles are behind */}
//                 <div className="absolute inset-0 z-0">
//                     <Particles
//                         particleColors={['#ffffff', '#ffffff']}
//                         particleCount={200}
//                         particleSpread={10}
//                         speed={0.1}
//                         particleBaseSize={100}
//                         moveParticlesOnHover={true}
//                         alphaParticles={false}
//                         disableRotation={false}
//                     />
//                 </div>

//                 {/* The box content */}
//                 <div className="relative z-10 text-center p-4 sm:p-8 rounded-lg bg-black bg-opacity-60 text-[#FFFAFF] hover:scale-105 transition duration-200 shadow-lg w-full max-w-md">
//                     <SplitText
//                         text="Spot-On Cleaning"
//                         className="text-2xl font-bold text-center"
//                         delay={100}
//                         duration={0.6}
//                         ease="power3.out"
//                         splitType="chars"
//                         from={{ opacity: 0, y: 40 }}
//                         to={{ opacity: 1, y: 0 }}
//                         threshold={0.1}
//                         rootMargin="-100px"
//                         textAlign="center"
//                         onLetterAnimationComplete={handleAnimationComplete}
//                     />
//                     <p className="mt-2 text-base sm:text-lg">For all your cleaning needs</p>
//                 </div>
//             </section>

//             {/* ABOUT */}
//             <section id="About" className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-[#FFFCF9] shadow-lg text-center w-full h-3/4">
//                 <img src="https://picsum.photos/1200/1200" className="h-60 w-2/3 rounded-lg" alt="About image" />

//                 <div className="bg-[#07020D] text-[#FFFCF9] p-4 rounded-lg text-left w-1/2 gap-40">
//                     <h1 className="text-2xl text-center font-bold">About Us</h1>
//                     <p className="mt-2 text-base text-center sm:text-lg w-full">

//                         At Spot On Cleaning, we’re proud to serve the heart of Mississauga with dependable, detail-oriented cleaning services that go beyond surface shine. As a locally owned and operated business, we understand the unique needs of homes and businesses in our community — and we treat every space like it’s our own.

//                         From downtown condos to suburban family homes and professional office spaces, our team delivers spotless results using safe, eco-friendly products and proven cleaning methods.
//                     </p>

//                 </div>
//             </section>

//             {/* SERVICES + CAROUSEL */}
//             <section id="Gallery" className="backdrop-blur-md text-white text-center p-6 bg-black">
//                 <div className="border-2 border-[#FFFCF9] rounded-lg p-6 max-w-6xl mx-auto">
//                     <h1 className="text-2xl font-bold">Our Services</h1>
//                     <p className="mt-2 text-base sm:text-lg">
//                         We offer a range of cleaning services including residential and commercial window cleaning, pressure washing, and more.
//                     </p>

//                     <Carousel
//                         opts={{ loop: true }}
//                         orientation="horizontal"
//                         className="w-full mt-8 bg-black shadow-lg rounded-lg"
//                     >
//                         <CarouselContent>
//                             {[1, 2, 3].map((num) => (
//                                 <CarouselItem key={num}>
//                                     <img
//                                         src={`https://picsum.photos/1400/400?random=${num}`}
//                                         alt={`Cleaning Image ${num}`}
//                                         className="w-full max-h-64 sm:max-h-96 object-cover rounded-lg blur-sm"
//                                     />
//                                 </CarouselItem>
//                             ))}
//                         </CarouselContent>
//                         <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
//                         <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
//                     </Carousel>
//                 </div>
//             </section>

//             <section id="Contact" className="flex items-center justify-center p-6 bg-white text-black text-center ">



//                 <ContactForm />
//             </section>


//             {/* FOOTER */}
//             <footer className="flex items-center justify-center p-6 bg-black text-[#FFFCF9] text-sm sm:text-base">
//                 <p>&copy; 2023 Spot On Cleaning. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default Home;




import '../App.css'
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import SplitText from "../components/ui/SplitText";
import Particles from '../components/ui/Particles';
import ContactForm from '../components/ui/form';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    console.log('Google Maps API Key:', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
};

function Home() {
    return (
        <div className="w-full p-0 m-0 bg-[#07020D] min-h-screen overflow-x-hidden">

            {/* HEADER */}
            <header className="gap-4 z-50 fixed top-0 left-0 w-full bg-black shadow-lg text-center px-4 py-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
                {/* Logo */}
                <img src="https://picsum.photos/200/500" className="h-14 w-14 rounded-full" alt="Logo" />

                {/* Navigation */}
                <nav className=" flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-[#FFFCF9] px-4 py-2 rounded-lg">
                    {['Home', 'About', 'Gallery', 'Contact', 'Pricing'].map((label) => (
                        <a
                            key={label}
                            onClick={() => {
                                const el = document.getElementById(label);
                                if (label === "Pricing") {
                                    window.location.href = '/Pricing';
                                    return;
                                }
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="font-bold border-2 border-white px-3 py-1 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-150"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </header>

            {/* HERO SECTION */}
            <section id="Home" className="relative flex items-center justify-center min-h-screen sm:bg-[url('/src/assets/new_background.png')] bg-cover bg-center bg-no-repeat px-4">
                {/* Make sure particles are behind */}
                <div className="absolute inset-0 z-0">
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
                </div>

                {/* The box content */}
                <div className="relative z-10 text-center p-4 sm:p-8 rounded-lg bg-black bg-opacity-60 text-[#FFFAFF] hover:scale-105 transition duration-200 shadow-lg w-full max-w-md">
                    <SplitText
                        text="Spot-On Cleaning"
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
                    <p className="mt-2 text-base sm:text-lg">For all your cleaning needs</p>
                </div>
            </section>

            {/* ABOUT */}
            <section id="About" className="bg-[#FFFCF9] py-16">
                <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
                    <img
                        src="https://picsum.photos/1200/900"
                        alt="Technician cleaning a residential window with professional tools"
                        className="h-auto w-full rounded-2xl object-cover shadow-lg"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="rounded-2xl bg-[#07020D] p-6 text-[#FFFCF9] shadow-lg">
                        <h2 className="text-center text-2xl font-bold sm:text-left">About Us</h2>
                        <p className="mt-3 text-pretty text-base leading-7 text-[#FFFCF9]/90">
                            At Spot‑On Cleaning, we serve Mississauga with dependable, detail‑oriented services that go beyond surface shine.
                            As a locally owned business, we understand the needs of condos, family homes, and offices — and we treat every space like our own.
                            We use eco‑friendly products and proven methods for a spotless, safe result.
                        </p>
                        <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-[#FFFCF9]/80 sm:grid-cols-2">
                            <li>• Fully insured & vetted team</li>
                            <li>• Eco‑friendly supplies</li>
                            <li>• Transparent pricing</li>
                            <li>• Satisfaction guarantee</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SERVICES + CAROUSEL */}
            <section id="Gallery" className="bg-black py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-white/10 p-6 shadow-lg">
                        <h2 className="text-center text-2xl font-bold">Our Services</h2>
                        <p className="mx-auto mt-2 max-w-3xl text-center text-base text-white/80">
                            Residential & commercial window cleaning, pressure washing, and more.
                        </p>

                        <Carousel opts={{ loop: true }} orientation="horizontal" className="mt-8 w-full rounded-xl">
                            <CarouselContent>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <CarouselItem key={num}>
                                        <img
                                            src={`https://picsum.photos/1600/700?random=${num}`}
                                            alt={`Example project ${num}: streak‑free windows and frames`}
                                            className="h-[42vh] w-full rounded-xl object-cover md:h-[54vh]"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="Contact" className="bg-white py-16 text-black border border-black/10 shadow-lg">
                <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ">
                    <div>
                        <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
                        <p className="mt-2 max-w-prose text-black/70">
                            Tell us about your space and preferred timing. We typically respond within one business day.
                        </p>
                        <dl className="mt-6 grid grid-cols-1 gap-4 text-sm text-black/80 sm:grid-cols-2">
                            <div>
                                <dt className="font-semibold">Service Area</dt>
                                <dd>Mississauga & nearby GTA</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Hours</dt>
                                <dd>Mon–Sat, 8:00–6:00</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Email</dt>
                                <dd>spoton@example.com</dd>
                            </div>
                            <div>
                                <dt className="font-semibold">Phone</dt>
                                <dd>(555) 123‑4567</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="rounded-2xl   sm:p-6">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black py-8 text-[#FFFCF9]">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Spot‑On Cleaning. All rights reserved.</p>
                    <a href="#Home" className="text-sm underline underline-offset-4" aria-label="Back to top">
                        Back to top ↑
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
