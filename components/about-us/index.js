export default function AboutUs () {
 return (
     <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

         <div className="max-w-2xl mx-auto sm:py-16 lg:max-w-none ">

             <div
                 id={"about"}
                 className=" flex flex-row flex-wrap justify-around rounded-3xl shadow-lg bg-white max-w-7xl p-10 items-center"
             >
                 <img className="hidden sm:block" src="/jennifer.png" alt="" width="450px" />
                 <div className="flex flex-col gap-5 items-center">
                     <h1 className="font-black text-4xl"> ABOUT US</h1>
                     <p className="max-w-xl">
                         Mauris convallis, magna quis viverra consectetur, ante erat
                         consequat elit. Un feugiat mi massa feugiat dolor. Donec mollis,
                         nibh quis lobortis molestie, lacus metus aliquet nisi, a aliquam
                         diam justo quis sapien.
                     </p>
                 </div>
                 <img className="block sm:hidden" src="/jennifer.png" alt="" width="400px" />
             </div>
         </div>
     </div>
 );
}
