import { useState, useEffect, useRef } from 'react';

const WeddingPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };
  
    const handleSeek = (e) => {
      const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    };
  

  return (
    <div className="min-h-screen">
      <section className="relative h-screen w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/CF-7.jpg')"}}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Header - Superpuesto dentro de la sección hero */}
        <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-80' : 'bg-transparent'}`}>
          <nav className="container mx-auto px-6 py-6">
            <ul className="flex justify-center space-x-6 text-sm uppercase">
              <li><a href="#historia" className="text-white hover:text-gray-200 transition-colors duration-300">Nuestra Historia</a></li>
              <li><a href="#itinerario" className="text-white hover:text-gray-200 transition-colors duration-300">Itinerario</a></li>
              <li><a href="#hospedaje" className="text-white hover:text-gray-200 transition-colors duration-300">Hospedaje y Regalos</a></li>
              <li><a href="#dress-code" className="text-white hover:text-gray-200 transition-colors duration-300">Dress Code</a></li>
              <li><a href="#rsvp" className="text-white hover:text-gray-200 transition-colors duration-300">RSVP</a></li>
            </ul>
          </nav>
        </header>

        {/* Contenido del hero */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="text-center text-white">
            <h1 className="text-8xl mb-4 font-rufina">Daniela & Markos</h1>
            <div className='flex justify-between px-24 text-2xl font-semibold pb-4'>
                <span>Sabado</span><span>*</span><span>21 de diciembre</span><span>*</span><span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resto del contenido */}
      <main className="bg-gray-100">
        {/* Music Player */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl mb-8 font-rufina">Escucha nuestra canción</h2>
            <div className="flex justify-center items-end space-x-1 mb-6 h-16">
                {[35, 50, 75, 100, 85, 70, 55, 40, 60, 80].map((height, index) => (
                <div 
                    key={index} 
                    className="w-2 bg-gray-400 rounded-t"
                    style={{height: `${height}%`}}
                ></div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-4">
              <button 
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => {audioRef.current.currentTime = 0;}}
              >
                &#9198; {/* Entidad HTML para "skip back" */}
              </button>
              <button 
                className="p-2 px-4 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={handlePlayPause}
              >
                {isPlaying ? '\u23F8' : '\u25B6'} {/* Entidades HTML para "pause" y "play" */}
              </button>
              <button 
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => {audioRef.current.currentTime = duration;}}
              >
                &#9197; {/* Entidad HTML para "skip forward" */}
              </button>
            </div>
            <div 
                className="mt-4 w-64 mx-auto bg-gray-200 rounded-full h-2.5 cursor-pointer"
                onClick={handleSeek}
            >
                <div 
                className="bg-gray-600 h-2.5 rounded-full" 
                style={{width: `${(currentTime / duration) * 100}%`}}
                ></div>
            </div>
            <audio 
                ref={audioRef}
                src="/I-Love-You.mp3"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            </div>
        </section>

        {/* Invitation */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center flex justify-between">
            <div className='w-2/5'>
              <img 
                  src="./CF-38A.jpg" 
                  alt="anillos" 
                  className='rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-shadow duration-300'
              />
            </div>
            <div className='w-3/5 px-8 text-left flex flex-col'>
              <h2 className="mb-4">Junto a nuestras familias</h2>
              <h1 className="text-8xl mb-8 font-rufina">Daniela & Markos</h1>
              <p className='text-justify mb-6'>LOS INVITAMOS A NUESTRA BODA QUE SE CELEBRARÁ EL SÁBADO 21 DE DICIEMBRE DE 2024 A LAS 10:00 en lA Santa Catedral Católica de San Denis el Areopagita Y LUEGO LA RECEPCIÓN SE OFRECERÁ EN AMALIA HOTEL</p>
              <p>NAFPLIO, GRECIA.</p>
              <p>POR FAVOR CONFIRMAR SU ASISTENCIA HASTA EL 21 NOVIEMBRE, 2024.</p>
              <div className="flex justify-center mt-4">
                <a 
                  href="https://www.google.com/" 
                  className='mt-2 border border-blue-950 shadow-2XL rounded-md px-4 py-2 hover:bg-blue-100 transition-colors duration-300'
                >
                  Confirmar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="historia" className="relative h-screen">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('/CF-57.jpg')"}}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-16">
                <h2 className="text-white text-6xl font-bold animate-appear-grow flex flex-col items-start">
                <span className='font-rufina text-2xl'>Nuestra</span><span className='ps-4 font-updock text-8xl'>Historia de</span><span className='ps-8 font-updock text-8xl font-semibold'>Amor</span>
                </h2>
            </div>
        </section>

        {/* Felices */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center flex justify-between">
              <div className='w-2/5 p-8 bg-white shadow-lg'>
              <img 
                  src="./CF-59.jpg" 
                  alt="anillos2" 
                  className='rounded'
              />
              </div>
              <div className='w-3/5 px-8 text-left flex flex-col justify-center'>
                  <h3 className="text-4xl mb-4 font-dancingscript">Felices para</h3>
                  <h2 className="text-6xl mb-4 font-dancingscript">Siempre</h2>
                  <p className='text-justify mb-6'>DANIELA ES ARQUITECTA  y MARKOS ES  empresariO. AMBOS SE conocen desde que ella tenía ¡15 años!, y aunque lo suyo no fue amor a primera vista, sí se transformó en una HERMOSA relación A PARTIR  de esa primera vez QUE estuvieron uno frente al otro.</p>
              </div>
          </div>
        </section>
        {/*Gran dia */}
        <section id="historia" className="relative h-screen">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('/CF-61.jpg')"}}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-16">
                <h2 className="text-white text-8xl font-bold animate-appear-grow flex flex-col items-start font-dancingscript">
                  Nuestro Gran Día
                </h2>
                <p className='text-white text-2xl'>Grecia * 2021</p>
            </div>
        </section>

        {/* Invitation */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center flex justify-between">
            <div className='w-2/5'>
              <img 
                  src="./CF-62a.jpg" 
                  alt="anillos" 
                  className='rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-shadow duration-300'
              />
            </div>
            <div className='w-3/5 px-8 text-left flex flex-col justify-center'>
              <h2 className="mb-4 mt-8 font-updock text-6xl text-slate-700">Itinerario de</h2>
              <h2 className='font-dancingscript text-8xl text-slate-700 py-16'>Eventos</h2>
              <p className='text-justify mb-6'>A continuación encontrarás nuestro itinerario. disfruta con nosotros cada una de las actividades que hemos organizado para que juntos vivamos momentos inolvidables</p>
            </div>
          </div>
          <div className='flex mt-8 border-t-2'>
            <div className='px-16 pt-8'>
              <h2 className='text-slate-700 font-dancingscript text-2xl'>20 de Diciembre</h2>
              <div className='flex gap-4'>
                <div>12 pm</div>
                <div className='border-l-4 border-dotted border-slate-700 ps-2'>
                  <h2>Ceremonia Católica</h2>
                  <p>Santa Catedral Católica</p>
                  <p>de San Denis el Areopagita</p>
                </div>
              </div>
              <div className='flex gap-4 mt-1'>
                <div>12 pm</div>
                <div className='border-l-4 border-dotted border-slate-700 ps-2'>
                  <h2>Ceremonia Católica</h2>
                  <p>Santa Catedral Católica</p>
                  <p>de San Denis el Areopagita</p>
                </div>
              </div>
            </div>
            <div className='px-16 pt-8'>
              <h2 className='text-slate-700 font-dancingscript text-2xl'>20 de Diciembre</h2>
              <div className='flex gap-4'>
                <div>12 pm</div>
                <div className='border-l-4 border-dotted border-slate-700 ps-2'>
                  <h2>Ceremonia Católica</h2>
                  <p>Santa Catedral Católica</p>
                  <p>de San Denis el Areopagita</p>
                </div>
              </div>
            </div>
            <div className='px-16 pt-8'>
              <h2 className='text-slate-700 font-dancingscript text-2xl'>20 de Diciembre</h2>
              <div className='flex gap-4'>
                <div>12 pm</div>
                <div className='border-l-4 border-dotted border-slate-700 ps-2'>
                  <h2>Ceremonia Católica</h2>
                  <p>Santa Catedral Católica</p>
                  <p>de San Denis el Areopagita</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Daniela & Markos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingPage;