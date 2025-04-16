import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  DollarSign,
  Globe,
  TrendingUp,
  Book,
} from "lucide-react";

// Imágenes de Buenos Aires (usaremos placeholders)
const BA_IMAGES = [
  "/api/placeholder/1200/600", // Representaría una imagen de Buenos Aires
  "/api/placeholder/800/500", // Representaría el Obelisco
  "/api/placeholder/800/500", // Representaría Puerto Madero
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Cambiar imagen de fondo cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === BA_IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animaciones para los componentes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h2 className="mt-4 text-white text-xl font-medium">
            Cargando visualizaciones...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <div className="relative h-screen max-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${BA_IMAGES[currentImage]})`,
            opacity: 0.8,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/30" />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Visualización de Competitividad Turística
            </h1>
            <p className="text-xl mb-2">Taller Complementario - Big Data II</p>
            <p className="text-lg opacity-90">
              Tecnicatura en Desarrollo de Software Multiplataforma
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center"
              >
                <Globe className="mr-2 h-5 w-5 " />
                Explorar datos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-6 py-3 rounded-lg font-medium flex items-center"
              >
                <Book className="mr-2 h-5 w-5" />
                Ver metodología
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-24"
        >
          {/* Integrantes con tarjetas */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-10 inline-block border-b-4 border-blue-500 pb-2">
              Integrantes del Proyecto
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105">
                <div className="bg-blue-100/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-900">MH</span>
                </div>
                <h3 className="text-xl font-semibold">Mauricio Heredia</h3>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105">
                <div className="bg-blue-100/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-900">AL</span>
                </div>
                <h3 className="text-xl font-semibold">Antonella Lezcano</h3>
              </div>
            </div>
          </motion.section>

          {/* Dataset con diseño de tarjeta */}
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Dataset Utilizado</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                El dataset seleccionado proviene de la plataforma{" "}
                <span className="font-semibold text-blue-700">
                  Buenos Aires Data
                </span>{" "}
                y contiene información sobre la{" "}
                <span className="font-semibold text-blue-700">
                  competitividad turística
                </span>{" "}
                de la ciudad de Buenos Aires frente a distintas monedas
                extranjeras. Este conjunto de datos proporciona indicadores
                tanto{" "}
                <span className="font-semibold text-blue-700">
                  bilaterales como multilaterales
                </span>
                , permitiendo evaluar el desempeño turístico desde múltiples
                perspectivas.
              </p>

              <div className="mt-10 mb-10">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-blue-600" />
                  Variables incluidas
                </h3>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {[
                      ["Año (anio)", "Año de referencia del indicador"],
                      ["Mes (mes)", "Mes de referencia del indicador"],
                      [
                        "Multilateral",
                        "Índice de competitividad turística real multilateral",
                      ],
                      ["USD", "Índice bilateral en dólares estadounidenses"],
                      ["Real", "Índice bilateral en reales brasileños"],
                      ["Peso Chileno", "Índice en pesos chilenos"],
                      ["Euro", "Índice en euros"],
                      ["Libra Esterlina", "Índice en libras esterlinas"],
                      ["Guaraní", "Índice en guaraníes"],
                      ["Nuevo Shekel", "Índice en nuevo shekel israelí"],
                      ["Peso Mexicano", "Índice en pesos mexicanos"],
                      ["Peso Uruguayo", "Índice en pesos uruguayos"],
                    ].map(([name, desc], idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded text-sm mr-2 whitespace-nowrap">
                          {name}
                        </span>
                        <span className="text-gray-700">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  Motivo de la elección
                </h3>
                <p className="text-lg leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  Este dataset es fundamental para analizar cómo la
                  competitividad turística de Buenos Aires ha variado en
                  relación con las monedas de los principales países emisores de
                  turismo. Al estudiar estos indicadores, es posible comprender
                  mejor la posición de la ciudad en el mercado turístico
                  internacional y cómo factores económicos, como las
                  fluctuaciones cambiarias, pueden influir en la afluencia de
                  turistas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Visualizaciones con tabs */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-10">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Visualizaciones</h2>
            </div>

            <VisualizationTabs />
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Visualización de Datos</h3>
              <p className="text-blue-200">
                Tecnicatura Superior en Desarrollo
                <br />
                de Software Multiplataforma
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Recursos</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://data.buenosaires.gob.ar/dataset/competitividad-turistica"
                      className="text-blue-200 hover:text-white"
                    >
                      Dataset
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://data.buenosaires.gob.ar/"
                      className="text-blue-200 hover:text-white"
                    >
                      Buenos Aires Data
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Enlaces</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/mau-jsx/BigData-Landing-Page"
                      className="text-blue-200 hover:text-white"
                    >
                      Repositorio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            © 2025 - Visualización de Datos | Tecnicatura Superior en Desarrollo
            de Software Multiplataforma
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente para las visualizaciones con pestañas
function VisualizationTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Evolución Temporal",
      description:
        "Este gráfico de líneas permite visualizar cómo ha cambiado la competitividad turística a lo largo del tiempo. Se eligió este tipo de visualización por su capacidad para mostrar tendencias y variaciones cronológicas de forma clara.",
      iframe: "/evolucion_temporal_competitividad_turistica.html",
    },
    {
      title: "Comparación entre Monedas",
      description:
        "Se utilizó un gráfico de barras para comparar cómo varía la competitividad turística en relación con distintas monedas. Este tipo de gráfico permite comparar de manera directa las magnitudes entre categorías.",
      iframe: "/comparacion_competitividad_entre_monedas.html",
    },
    {
      title: "Multilateral vs Bilateral",
      description:
        "Este gráfico de dispersión permite identificar la relación entre el índice multilateral y bilateral de competitividad. Es ideal para observar correlaciones y patrones entre dos variables numéricas.",
      iframe: "/comparacion_multilateral_vs_bilateral.html",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex border-b overflow-x-auto whitespace-nowrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-4 font-medium text-sm transition-colors duration-300 ${
              activeTab === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-6">
        <p className="text-lg mb-6">{tabs[activeTab].description}</p>
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-inner">
          <iframe
            src={tabs[activeTab].iframe}
            className="w-full h-[600px] border-0"
            title={tabs[activeTab].title}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
