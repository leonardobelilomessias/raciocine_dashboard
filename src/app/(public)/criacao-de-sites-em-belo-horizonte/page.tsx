import React from "react";

export default  function WebDevelopmentOffer  () {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Desenvolvimento de Sites</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100">
            Contato
          </button>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-blue-800">
          Transforme sua Presença Online com um Site Profissional
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Criamos websites modernos, responsivos e otimizados para SEO, 
          perfeitos para destacar sua marca no mercado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Design Personalizado</h3>
            <p className="text-gray-600">
              Websites únicos criados para refletir a identidade da sua marca.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Responsividade</h3>
            <p className="text-gray-600">
              Sites que se adaptam a todos os dispositivos, de desktops a smartphones.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">SEO Otimizado</h3>
            <p className="text-gray-600">
              Mais visibilidade no Google com otimização profissional de SEO.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Velocidade</h3>
            <p className="text-gray-600">
              Experiência de navegação rápida e fluida para seus usuários.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Integrações</h3>
            <p className="text-gray-600">
              Conectamos seu site às principais ferramentas, como WhatsApp e Google Analytics.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Suporte Contínuo</h3>
            <p className="text-gray-600">
              Oferecemos suporte técnico para manter seu site sempre atualizado.
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white mt-12 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold">Oferta Exclusiva</h3>
          <p className="text-lg mt-2">
            Crie seu site agora e ganhe uma <strong>consultoria gratuita</strong> em marketing digital!
          </p>
          <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Solicitar Orçamento
          </button>
        </div>
      </main>

      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
