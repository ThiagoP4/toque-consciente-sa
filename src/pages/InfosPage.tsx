
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InfosPage = () => {
  const [activeTab, setActiveTab] = useState("hiv");

  // Dados sobre ISTs
  const dstData = {
    hiv: {
      title: "HIV/AIDS",
      description: "O Vírus da Imunodeficiência Humana (HIV) ataca o sistema imunológico, comprometendo a capacidade do corpo de combater infecções.",
      sintomas: [
        "Fase inicial: febre, dor de garganta, fadiga, linfonodos inchados",
        "Fase crônica: pode ser assintomática por anos",
        "Fase avançada (AIDS): perda de peso severa, infecções oportunistas"
      ],
      transmissao: [
        "Relações sexuais desprotegidas",
        "Compartilhamento de seringas",
        "Transmissão vertical (mãe para filho)",
        "Contato com sangue contaminado"
      ],
      prevencao: [
        "Uso de preservativos em todas as relações sexuais",
        "Não compartilhar seringas ou agulhas",
        "PrEP (Profilaxia Pré-Exposição) para pessoas em situação de maior risco",
        "PEP (Profilaxia Pós-Exposição) para situações de emergência"
      ],
      tratamento: [
        "Terapia antirretroviral (TARV)",
        "Tratamento contínuo que permite qualidade de vida",
        "Indetectável = Intransmissível: pessoas em tratamento com carga viral indetectável não transmitem o vírus"
      ],
      color: "blue"
    },
    sifilis: {
      title: "Sífilis",
      description: "Infecção bacteriana causada pelo Treponema pallidum, que se desenvolve em estágios e pode afetar vários órgãos do corpo.",
      sintomas: [
        "Primária: ferida indolor (cancro duro) na região genital, boca ou outro local de contato",
        "Secundária: erupções na pele, feridas na boca, febre, dor de garganta",
        "Latente: sem sintomas visíveis",
        "Terciária: danos ao coração, cérebro e outros órgãos"
      ],
      transmissao: [
        "Contato direto com feridas sifilíticas durante relações sexuais",
        "Transmissão vertical (mãe para filho)",
        "Contato com lesões cutâneas infectadas"
      ],
      prevencao: [
        "Uso de preservativos em todas as relações sexuais",
        "Testagem regular, especialmente durante a gravidez",
        "Tratamento dos parceiros sexuais em caso positivo"
      ],
      tratamento: [
        "Antibióticos, principalmente penicilina",
        "O tratamento é mais eficaz nos estágios iniciais",
        "É necessário fazer acompanhamento pós-tratamento para confirmar cura"
      ],
      color: "green"
    },
    hpv: {
      title: "HPV",
      description: "Papilomavírus Humano é um grupo com mais de 100 tipos de vírus, alguns dos quais podem causar verrugas genitais e câncer.",
      sintomas: [
        "Muitas infecções são assintomáticas",
        "Verrugas genitais (condiloma acuminado)",
        "Alguns tipos podem causar alterações celulares que podem evoluir para câncer"
      ],
      transmissao: [
        "Contato pele a pele durante atividades sexuais",
        "Pode ocorrer mesmo sem penetração",
        "Pode ser transmitido mesmo sem a presença de sintomas visíveis"
      ],
      prevencao: [
        "Vacina contra HPV (disponível no SUS para população específica)",
        "Uso de preservativos (reduz, mas não elimina totalmente o risco)",
        "Exames preventivos regulares (Papanicolau para mulheres)"
      ],
      tratamento: [
        "Não existe tratamento específico para o vírus",
        "Remoção das verrugas através de procedimentos médicos",
        "Tratamento das lesões precursoras do câncer",
        "Acompanhamento médico regular"
      ],
      color: "lilac"
    },
    gonorreia: {
      title: "Gonorreia",
      description: "Infecção causada pela bactéria Neisseria gonorrhoeae que afeta principalmente as mucosas do trato genital, anal e garganta.",
      sintomas: [
        "Em homens: corrimento peniano, dor ao urinar, inflamação do testículo",
        "Em mulheres: frequentemente assintomática, corrimento vaginal, sangramento irregular, dor pélvica",
        "Infecção na garganta ou ânus geralmente assintomática"
      ],
      transmissao: [
        "Relações sexuais desprotegidas (vaginal, anal, oral)",
        "Transmissão vertical (mãe para filho durante o parto)"
      ],
      prevencao: [
        "Uso de preservativos em todas as relações sexuais",
        "Testagem regular, especialmente para pessoas com múltiplos parceiros"
      ],
      tratamento: [
        "Antibióticos específicos prescritos por médico",
        "É importante tratar todos os parceiros sexuais",
        "Após tratamento, é recomendado fazer teste de cura"
      ],
      color: "blue"
    },
    clamidia: {
      title: "Clamídia",
      description: "Infecção causada pela bactéria Chlamydia trachomatis, sendo uma das DSTs mais comuns e frequentemente assintomática.",
      sintomas: [
        "Maioria das pessoas não apresenta sintomas",
        "Em homens: secreção peniana, ardência ao urinar",
        "Em mulheres: corrimento vaginal alterado, dor durante relação sexual, sangramento entre períodos menstruais"
      ],
      transmissao: [
        "Relações sexuais desprotegidas (vaginal, anal, oral)",
        "Transmissão vertical (mãe para bebê durante o parto)"
      ],
      prevencao: [
        "Uso de preservativos em todas as relações sexuais",
        "Testagem regular, especialmente para pessoas sexualmente ativas"
      ],
      tratamento: [
        "Antibióticos específicos prescritos por médico",
        "Tratamento dos parceiros sexuais é fundamental",
        "Evitar relações sexuais até finalizar tratamento"
      ],
      color: "green"
    }
  };

  const currentDst = dstData[activeTab as keyof typeof dstData];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-50 to-lilac-50 py-12">
          <div className="container-page">
            <h1 className="text-4xl font-bold mb-4">Informações sobre ISTs</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Conhecer os sintomas, formas de transmissão, prevenção e tratamentos disponíveis
              é essencial para cuidar da sua saúde sexual. Explore as informações abaixo.
            </p>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="section-spacing">
          <div className="container-page">
            <Tabs defaultValue="hiv" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8 overflow-x-auto">
                <TabsList className="inline-flex w-auto">
                  <TabsTrigger value="hiv">HIV/AIDS</TabsTrigger>
                  <TabsTrigger value="sifilis">Sífilis</TabsTrigger>
                  <TabsTrigger value="hpv">HPV</TabsTrigger>
                  <TabsTrigger value="gonorreia">Gonorreia</TabsTrigger>
                  <TabsTrigger value="clamidia">Clamídia</TabsTrigger>
                </TabsList>
              </div>
              
              {Object.entries(dstData).map(([key, dst]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <Card className={`border-t-4 border-${dst.color}-400`}>
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl">{dst.title}</CardTitle>
                      <CardDescription className="text-base">{dst.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="sintomas">
                          <AccordionTrigger className="text-lg font-semibold">Sintomas</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-6 space-y-2">
                              {dst.sintomas.map((sintoma, index) => (
                                <li key={index}>{sintoma}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="transmissao">
                          <AccordionTrigger className="text-lg font-semibold">Formas de Transmissão</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-6 space-y-2">
                              {dst.transmissao.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="prevencao">
                          <AccordionTrigger className="text-lg font-semibold">Métodos de Prevenção</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-6 space-y-2">
                              {dst.prevencao.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="tratamento">
                          <AccordionTrigger className="text-lg font-semibold">Tratamento Disponível</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-6 space-y-2">
                              {dst.tratamento.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Importante: Consulte um profissional de saúde</h3>
              <p className="mb-4">
                As informações aqui fornecidas são de caráter educativo. Em caso de suspeita
                de infecção ou para diagnóstico preciso, consulte sempre um profissional de saúde.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/locais">Encontrar locais de atendimento</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/quiz">Fazer quiz educativo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Resources */}
        <section className="bg-blue-50 section-spacing">
          <div className="container-page">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Recursos adicionais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Ministério da Saúde</h3>
                  <p className="text-gray-600 mb-4">
                    Acesse materiais oficiais e campanhas do Ministério da Saúde sobre ISTs.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer">
                      Visitar site
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Disque Saúde</h3>
                  <p className="text-gray-600 mb-4">
                    Ligue 136 para obter informações sobre serviços de saúde e esclarecimento de dúvidas.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:136">
                      Ligar 136
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">UNAIDS Brasil</h3>
                  <p className="text-gray-600 mb-4">
                    Programa das Nações Unidas com informações sobre HIV/AIDS.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://unaids.org.br/" target="_blank" rel="noopener noreferrer">
                      Visitar site
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InfosPage;
