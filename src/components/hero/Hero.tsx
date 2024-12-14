
const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10 pb-36 pt-10">
      <div className="max-w-lg px-5">
        <h1 className="font-bold text-6xl text-gray-700 py-2">358 Colores</h1>
        <p className="font-medium text-2xl text-gray-700 py2">
          Conocidos por su calidad profesional, los marcadores Copic son la
          herramienta favorita de artistas y diseñadores en todo el mundo. Con
          una gama infinita de colores vibrantes, son recargables, mezclables y
          cuentan con puntas reemplazables para un rendimiento duradero.{" "}
        </p>
      </div>
      <div className="px-5 max-w-7xl">
        <img src="https://copic.jp/images/product/copic-set/copic_sketch.jpg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
