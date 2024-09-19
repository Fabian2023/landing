// Components/Menu.js
import back from "../images/backloading.png";

const Menu = () => {
  return (
    <nav
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <h1 className="text-8xl mb-20 mt-[-180px] font-bold text-white">EXPERIENCES</h1>
      <ul className="space-y-20 flex flex-col items-center"> {/* Centra los elementos de la lista horizontalmente */}
        <li className="text-4xl">
          {/* <a 
            href="https://speak-ia-stand-mocion.vercel.app/" 
            className="text-white text-6xl border-2 border-white px-6 py-3 rounded-3xl hover:bg-white hover:text-black transition duration-300"
             
            rel="noopener noreferrer"
          >
            Speak IA
          </a>
        </li>
        <li className="text-4xl">
          <a 
            href="https://photo-booth-republica-sigma.vercel.app/" 
            className="text-white text-6xl border-2 border-white px-6 py-3 rounded-3xl hover:bg-white hover:text-black transition duration-300"
            
            rel="noopener noreferrer"
          >
            Photobooth
          </a>
        </li>
        <li className="text-4xl"> */}
          <a 
            href="https://mocion-memory-match.netlify.app/" 
            className="text-white text-6xl border-2 border-white px-6 py-3 rounded-3xl hover:bg-white hover:text-black transition duration-300"
            
            rel="noopener noreferrer"
          >
            Memory Match
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
