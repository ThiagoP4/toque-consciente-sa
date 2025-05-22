
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const ApoioPage = () => {
  const emergencyContacts = [
    {
      name: "Disque Saúde",
      number: "136",
      description: "Canal oficial do Ministério da Saúde para informações, orientações e dúvidas sobre saúde em geral, incluindo DSTs e HIV/AIDS."
    },
    {
      name: "Centro de Valorização da Vida (CVV)",
      number: "188",
      description: "Apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo."
    },
    {
      name: "Disque 100",
      number: "100",
      description: "Canal para denúncias de violações de direitos humanos e para obter informações sobre políticas públicas e serviços."
    }
  ];
  
  const supportOrganizations = [
    {
      name: "UNAIDS Brasil",
      website: "https://unaids.org.br/",
      description: "Programa das Nações Unidas que lidera o esforço mundial para acabar com a AIDS como ameaça de saúde pública até 2030."
    },
    {
      name: "Associação Brasileira Interdisciplinar de AIDS (ABIA)",
      website: "http://abiaids.org.br/",
      description: "Organização que busca promover o acesso ao tratamento e assistência, e defender os direitos humanos das pessoas que vivem com HIV/AIDS."
    },
    {
      name: "Grupo de Incentivo à Vida (GIV)",
      website: "https://giv.org.br/",
      description: "ONG que oferece apoio a pessoas vivendo com HIV/AIDS e seus familiares, promovendo o enfrentamento ao estigma e à discriminação."
    }
  ];
  
  const supportMessages = [
    "Você não está sozinho(a) nessa jornada. Buscar ajuda é um sinal de coragem, não de fraqueza.",
    "Receber um diagnóstico de DST não define quem você é. Você continua sendo a mesma pessoa valiosa de antes.",
    "Existem tratamentos eficazes para a maioria das DSTs. Com cuidado médico adequado, você pode viver uma vida plena e saudável.",
    "Compartilhar seus sentimentos com pessoas de confiança ou profissionais pode diminuir a carga emocional que você carrega.",
    "Lembre-se que sentimentos de medo, vergonha ou culpa são normais, mas eles diminuem com o tempo e com o apoio adequado."
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-lilac-50 to-blue-50 py-12">
          <div className="container-page">
            <h1 className="text-4xl font-bold mb-4">Apoio Emocional</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Lidar com questões de saúde sexual pode ser desafiador emocionalmente.
              Aqui você encontra recursos de apoio, contatos úteis e mensagens de acolhimento.
            </p>
          </div>
        </section>
        
        {/* Support Messages Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-lilac-50">
          <div className="container-page max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Mensagens de Acolhimento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportMessages.map((message, index) => (
                <Card key={index} className="bg-white border-none shadow-sm">
                  <CardContent className="p-6">
                    <blockquote className="italic text-lg text-gray-700">
                      "{message}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-gradient-to-br from-lilac-400 to-blue-400 text-white md:col-span-2 border-none">
                <CardContent className="p-6">
                  <blockquote className="text-xl md:text-2xl font-medium">
                    "Cuidar da saúde é um ato de amor próprio. Você merece respeito, 
                    cuidado e uma vida plena, independente do seu diagnóstico."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Emergency Contacts Section */}
        <section className="section-spacing bg-white">
          <div className="container-page max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Contatos de Emergência
            </h2>
            <div className="space-y-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-blue-500 text-white p-6 flex items-center justify-center md:w-1/4">
                        <div className="text-center">
                          <p className="text-sm uppercase font-semibold">Ligue</p>
                          <p className="text-3xl font-bold">{contact.number}</p>
                        </div>
                      </div>
                      <div className="p-6 md:w-3/4">
                        <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                        <p className="text-gray-600">{contact.description}</p>
                        <Button variant="outline" className="mt-4" asChild>
                          <a href={`tel:${contact.number}`}>Ligar agora</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Support Organizations */}
        <section className="section-spacing bg-gray-50">
          <div className="container-page max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Organizações de Apoio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportOrganizations.map((org, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-bold mb-2">{org.name}</h3>
                    <p className="text-gray-600 flex-grow mb-4">{org.description}</p>
                    <Button variant="outline" size="sm" asChild className="mt-auto w-full">
                      <a href={org.website} target="_blank" rel="noopener noreferrer">
                        Visitar site
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Self-care Section */}
        <section className="section-spacing bg-white">
          <div className="container-page max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Dicas de Autocuidado
            </h2>
            <div className="bg-lilac-50 rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Para a saúde mental</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-400 font-bold">•</span>
                      <span>Busque apoio terapêutico profissional se estiver se sentindo sobrecarregado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-400 font-bold">•</span>
                      <span>Pratique técnicas de relaxamento como meditação e respiração consciente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-400 font-bold">•</span>
                      <span>Conecte-se com grupos de apoio, onde você pode compartilhar experiências</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lilac-400 font-bold">•</span>
                      <span>Estabeleça limites saudáveis nos relacionamentos e na comunicação</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cuidados diários</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Mantenha uma alimentação equilibrada para fortalecer o sistema imunológico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Pratique atividades físicas regularmente conforme suas possibilidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Tenha um sono de qualidade, essencial para o bem-estar físico e mental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>Siga corretamente as recomendações médicas e tratamentos prescritos</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="text-center">
                <p className="text-gray-700 mb-6">
                  Lembre-se que autocuidado não é egoísmo, mas uma necessidade.
                  Priorize sua saúde e bem-estar todos os dias.
                </p>
                <Button asChild>
                  <Link to="/contato">Precisa de mais apoio? Entre em contato</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApoioPage;
