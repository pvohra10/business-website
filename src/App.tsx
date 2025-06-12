import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Gallery4 } from './components/ui/gallery4'


import './App.css'
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from './components/ui/carousel'

function App() {

  return (
    <>

      {/*flex = side by side, p-x = padding, max-w-x and mx-auto = constrain width, bg-x background, rounded-xl = rounding, shadow-lg = shadow
     gap-x-4 to handle spacing between logo and text 
     fixed = */}

      <div className=" w-full p-0 m-0 bg-[#07020D] min-h-screen overflow-x-hidden  ">
        {/* HEADER */}
        <header className="z-50 flex flex-row p-6 fixed top-0 left-0 w-full  h-26 bg-black space-x-20  shadow-lg  text-center  items-center">


          <img src="https://picsum.photos/200/500" className="h-16 w-16 m-25 rounded-full" alt="Vite logo" />


          {/* Navigation Links */}
          <div className="flex gap-4 rounded-lg px-3 flex-1 bg-[#FFFCF9] absolute left-1/2 transform -translate-x-1/2 scale-120">

            <a
              href="https://vitejs.dev"
              target="_blank"
              className="font-bold border-2 border-white px-3 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-100"
            >
              <div>Home</div>
            </a>

            <a
              href="https://vitejs.dev"
              target="_blank"
              className="font-bold border-2 border-white px-3 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-100"
            >
              <div>About</div>
            </a>
            <a
              href="https://vitejs.dev"
              target="_blank"
              className="font-bold border-2 border-white px-3 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-100"
            >
              <div>Gallery</div>
            </a>
            <a
              href="https://vitejs.dev"
              target="_blank"
              className="font-bold border-2 border-white px-3 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-100"
            >
              <div>Contact</div>
            </a>
            <a
              href="https://vitejs.dev"
              target="_blank"
              className="font-bold border-2 border-white px-3 bg-[#FFFCF9] rounded-lg hover:text-black hover:scale-110 hover:border-black transition duration-100"
            >
              <div>Pricing</div>
            </a>
          </div>


        </header>

        {/* Background Image */}
        <div className="flex items-center justify-center h-screen bg-[url('/src/assets/background2.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="text-center p-8 rounded-lg bg-black scale-100 bg-opacity-60 text-[#FFFAFF] hover:scale-125 transition duration-100 cbg-opacity-80 transition duration-10 hover:shadow-lg">
            <h1 className="text-4xl font-bold box-decoration-clone bg-linear-to-r from-sky-600 to-blue"><span className="inline-block">Mountain Climbers</span></h1>
            <p className="mt-2 text-lg">For all your Geronimo! needs</p>
          </div>
        </div>


        {/* About */}
        <div className=" flex blur-2px items-center p-6 w-full h-100 bg-[#FFFCF9] space-x-4  shadow-lg size-26 text-center">
          <img src="https://picsum.photos/1200/1200" className="m-12 h-40 w-40 rounded-lg" alt="Vite logo" />
          <div className="box-border p-4 rounded-lg bg-[#07020D] text-[#FFFCF9]">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">ndimentum elementum mauris. Nullam efficitur placerat pretium. In varius nisi nec posuere aliquam. Sed sapien libero, molestie quis purus vel, malesuada placerat arcu. Mauris leo turpis, iaculis ut turpis quis, faucibus lobortis urna. Donec a risus quam. Donec vitae nibh a velit dictum pellentesque non eget dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut molestie erat quis aliquet semper. Nunc sed nulla ultrices velit tempus commodo ac a nisl. Aenean mattis fringilla magna in tincidunt.</p>
          </div>
        </div>
        <div className=" backdrop-blur-md text-colour-white text-center p-4 bg-black">
          <div className="border-2 border-[#FFFCF9] rounded-lg p-4">
            <h1 className="text-2xl text-white font-bold">Our Services</h1>
            <p className="mt-2 text-lg text-white">We offer a range of cleaning services to meet your needs, including residential and commercial window cleaning, pressure washing, and more.</p>


            <Carousel

              opts={{ loop: true }}
              orientation="horizontal"
              className="w-3/4 items-center justify-center m-auto mt-8 bg-black shadow-lg rounded-lg"
            >

              {/* The sliding content */}
              <CarouselContent>

                <CarouselItem>
                  <img
                    src={"https://picsum.photos/1400/400"}
                    alt="Cleaning Image 1"
                    className="w-full h-100 rounded-lg blur-sm"
                  />
                </CarouselItem>

                <CarouselItem>
                  <img
                    src={"https://picsum.photos/1400/400"}
                    alt="Cleaning Image 2 "
                    className="w-full h-100 rounded-lg blur-sm"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={"https://picsum.photos/1400/400"}
                    alt="Cleaning Image 3"
                    className="w-full h-100 rounded-lg blur-sm"
                  />
                </CarouselItem>
              </CarouselContent>
              {/* Navigation buttons */}
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 scheme-dark" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2 scheme-dark" />
            </Carousel>
          </div>
        </div>


        {/* 
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button asChild>
            <a href="https://vitejs.dev" target="_blank" className="font-bold rounded-lg px-3 bg-[#0E9594]  hover:bg-[#0D0630] hover:text-white">
              hi
            </a>
          </Button>

          <Button onClick={() => alert('Hello, world!')} className="mt-4 bg-[#0E9594] hover:bg-[#0D0630] text-white font-bold py-2 px-4 rounded">
            Click me
          </Button>
        </div> */}



        <footer className="flex items-center justify-center p-6 bg-black text-[#FFFCF9]">
          <p>&copy; 2023 Spot On Cleaning. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
