function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <header className="bg-blue-600 text-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">
          Visualización de Competitividad Turística
        </h1>
        <p className="mt-2 text-lg">Taller Complementario - Big Data II</p>
      </header>

      <main className="p-8 max-w-5xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Integrantes</h2>
          <ul className="list-disc list-inside">
            <li>Mauricio Hereidia</li>
            <li>Antonella Lezcano</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Descripción del Proyecto
          </h2>
          <p>
            Este proyecto analiza la competitividad turística de Buenos Aires
            frente a diferentes monedas, usando un dataset de Buenos Aires Data.
            A través de gráficos de líneas, barras y dispersión, exploramos la
            evolución y comparación de los índices turísticos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Visualizaciones
          </h2>

          <div className="space-y-16">
            {/* Gráfico 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <iframe
                src="/evolucion_temporal_competitividad_turistica.html"
                className="w-[700px] h-[600px] border rounded shadow ml-[-200px]"
              ></iframe>
              <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Evolución Temporal
                </h3>
                <p className="text-gray-700">
                  Este gráfico de líneas permite visualizar cómo ha cambiado la
                  competitividad turística a lo largo del tiempo. Se eligió este
                  tipo de visualización por su capacidad para mostrar tendencias
                  y variaciones cronológicas de forma clara.
                </p>
              </div>
            </div>

            {/* Gráfico 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <iframe
                src="/comparacion_competitividad_entre_monedas.html"
                className="w-[700px] h-[600px] border rounded shadow ml-[-200px]"
              ></iframe>
              <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Comparación entre Monedas
                </h3>
                <p className="text-gray-700">
                  Se utilizó un gráfico de barras para comparar cómo varía la
                  competitividad turística en relación con distintas monedas.
                  Este tipo de gráfico permite comparar de manera directa las
                  magnitudes entre categorías.
                </p>
              </div>
            </div>

            {/* Gráfico 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <iframe
                src="/comparacion_multilateral_vs_bilateral.html"
                className=" h-[600px] w-[700px] border rounded shadow ml-[-200px]"
              ></iframe>
              <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Multilateral vs Bilateral
                </h3>
                <p className="text-gray-700 mr-[200px">
                  Este gráfico de dispersión permite identificar la relación
                  entre el índice multilateral y bilateral de competitividad. Es
                  ideal para observar correlaciones y patrones entre dos
                  variables numéricas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-100 text-center p-4 text-sm text-gray-700">
        © 2025 - Visualización de Datos | Tecnicatura Superior en Desarrollo de
        Software Multiplataforma
      </footer>
    </div>
  );
}

export default App;
