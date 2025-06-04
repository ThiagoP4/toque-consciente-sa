
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const dstCards = [
    {
      title: 'Informações sobre ISTs',
      description: 'Conheça os sintomas, formas de transmissão, prevenção e tratamentos disponíveis.',
      action: 'Saiba mais',
      link: '/infos',
      bgColor: 'bg-blue-400'
    },
    {
      title: 'Quiz Educativo',
      description: 'Teste seus conhecimentos e receba dicas personalizadas sobre prevenção.',
      action: 'Começar quiz',
      link: '/quiz',
      bgColor: 'bg-green-400'
    },
    {
      title: 'Locais de Atendimento',
      description: 'Encontre postos de saúde, locais de testagem gratuita e ONGs próximos de você.',
      action: 'Ver locais',
      link: '/locais',
      bgColor: 'bg-lilac-400'
    },
    {
      title: 'Lembrete',
      description: 'Agende lembretes para exames regulares e consultas de rotina.',
      action: 'Agendar no Google',
      link: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Lembrete+de+Exame+de+Sa%C3%BAde&dates=&details=Lembrete+para+realizar+exames+de+rotina+e+consultas+preventivas',
      bgColor: 'bg-blue-400',
      isExternal: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-green-50 to-lilac-50 py-16 md:py-24">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-green-500 to-lilac-500 text-transparent bg-clip-text">
                Informação é o primeiro passo para a prevenção
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Educação, informação e apoio relacionados a ISTs de forma clara e sem julgamentos.
                Aqui você encontra recursos para se cuidar e proteger quem você ama.
              </p>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6 rounded-xl">
                <Link to="/infos">Saiba como se cuidar</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Cards Section */}
        <section className="section-spacing">
          <div className="container-page">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O que você precisa saber
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dstCards.map((card, index) => (
                <Card key={index} className="card-hover border-none overflow-hidden">
                  <div className={`h-2 ${card.bgColor}`}></div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {card.title === 'Lembrete' && <Calendar size={20} />}
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <Button variant="outline" asChild>
                      {card.isExternal ? (
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                          {card.action}
                        </a>
                      ) : (
                        <Link to={card.link}>{card.action}</Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Numbers & Impact Section */}
        <section className="bg-gray-50 section-spacing">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que isso é importante?
              </h2>
              <p className="text-lg text-gray-600">
                No Brasil, as ISTs são uma questão de saúde pública que afeta milhões de pessoas.
                A informação correta pode fazer toda a diferença.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-blue-500 mb-2">+300mil</p>
                <p className="text-gray-600">Novos casos de HIV por ano no Brasil</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-green-500 mb-2">85%</p>
                <p className="text-gray-600">Das pessoas sexualmente ativas terão contato com HPV</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-lilac-500 mb-2">50%</p>
                <p className="text-gray-600">Das infecções são assintomáticas</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-blue-500 mb-2">100%</p>
                <p className="text-gray-600">Das ISTs são preveníveis com informação correta</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="section-spacing">
          <div className="container-page">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-md">
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                "A informação clara e acessível foi o que me ajudou a superar o estigma e buscar 
                tratamento. Hoje sei que cuidar da minha saúde sexual é um ato de amor próprio e
                responsabilidade com os outros."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Anônimo, 26 anos</p>
                  <p className="text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-400 to-lilac-400 section-spacing">
          <div className="container-page text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para aprender mais?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore nosso conteúdo educativo, faça o quiz ou busque locais de atendimento próximos a você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/infos">Ver informações</Link>
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
