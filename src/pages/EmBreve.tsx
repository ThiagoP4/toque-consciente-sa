
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const EmBreve = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  
  // Configurar o título e descrição com base na rota
  const pageConfig = {
    'locais': {
      title: 'Mapa de Locais de Atendimento',
      description: 'Em breve você poderá encontrar postos de saúde, locais de testagem gratuita e ONGs próximos a você em todo o Brasil.',
      features: [
        'Busca por CEP, cidade ou estado',
        'Filtros por tipo de serviço (testagem, tratamento, aconselhamento)',
        'Informações detalhadas sobre cada local',
        'Integração com mapas e rotas'
      ]
    },
    'autoavaliacao': {
      title: 'Autoavaliação e Lembrete',
      description: 'Em breve você poderá fazer uma autoavaliação básica e configurar lembretes para testagem regular.',
      features: [
        'Questionário simples sobre fatores de risco e sintomas',
        'Recomendações personalizadas com base em suas respostas',
        'Lembretes configuráveis para testagem a cada 3 ou 6 meses',
        'Histórico de autoavaliações e lembretes'
      ]
    }
  };
  
  const currentPage = pageConfig[path as keyof typeof pageConfig] || {
    title: 'Página em Desenvolvimento',
    description: 'Esta funcionalidade estará disponível em breve.',
    features: []
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center">
        <div className="container-page py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              {currentPage.title}
            </h1>
            <div className="relative mb-10">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
            </div>
            <p className="text-xl text-gray-700 mb-8">
              {currentPage.description}
            </p>
            
            {currentPage.features.length > 0 && (
              <div className="bg-gray-50 p-8 rounded-xl mb-10">
                <h2 className="text-xl font-semibold mb-4">O que você poderá encontrar aqui:</h2>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  {currentPage.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <p className="text-gray-600 italic mb-10">
              Estamos trabalhando para disponibilizar esta funcionalidade o mais breve possível.
              Enquanto isso, explore outros recursos do nosso site!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">Voltar para Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/infos">Ver Informações sobre DSTs</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmBreve;
