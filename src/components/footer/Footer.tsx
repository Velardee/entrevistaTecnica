const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Logo y descripción */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Copic Markers</h2>
            <p className="mt-2 text-sm text-gray-400">
              Los mejores marcadores para ilustradores, artistas y diseñadores.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.311h3.591l-.468 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.015 7.052.072 5.772.13 4.6.397 3.545 1.452 2.49 2.507 2.223 3.68 2.165 4.96.012 8.736 0 8.332 0 12s.015 3.264.072 4.548c.058 1.28.326 2.453 1.38 3.508.975.975 2.148 1.246 3.508 1.308C8.264 23.985 8.668 24 12 24s3.736-.015 4.948-.072c1.28-.058 2.453-.326 3.508-1.38.975-.975 1.246-2.148 1.308-3.508.057-1.284.072-1.688.072-4.948s-.015-3.736-.072-4.948c-.058-1.28-.326-2.453-1.38-3.508-.975-.975-2.148-1.246-3.508-1.308C15.264.015 14.668 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2024 Copic Markers. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
