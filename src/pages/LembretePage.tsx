
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Bell, CheckSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LembretePage = () => {
  const reminderTypes = [
    {
      title: 'Exame de Rotina',
      description: 'Agende lembretes para exames preventivos anuais ou semestrais',
      icon: <CheckSquare className="w-6 h-6" />,
      googleLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Exame+de+Rotina+de+Sa%C3%BAde&dates=&details=Lembrete+para+realizar+exames+preventivos+de+rotina'
    },
    {
      title: 'Consulta Médica',
      description: 'Lembre-se de agendar consultas regulares com seu médico',
      icon: <Calendar className="w-6 h-6" />,
      googleLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Consulta+M%C3%A9dica&dates=&details=Lembrete+para+agendar+consulta+m%C3%A9dica+de+rotina'
    },
    {
      title: 'Testagem para ISTs',
      description: 'Mantenha em dia os testes preventivos para ISTs',
      icon: <Bell className="w-6 h-6" />,
      googleLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Testagem+para+ISTs&dates=&details=Lembrete+para+realizar+testes+preventivos+para+ISTs'
    },
    {
      title: 'Acompanhamento',
      description: 'Agende lembretes para acompanhamento médico contínuo',
      icon: <Clock className="w-6 h-6" />,
      googleLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Acompanhamento+M%C3%A9dico&dates=&details=Lembrete+para+acompanhamento+m%C3%A9dico+cont%C3%ADnuo'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-green-50 to-lilac-50 py-16">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Calendar className="w-16 h-16 text-blue-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-green-500 to-lilac-500 text-transparent bg-clip-text">
                Lembretes de Saúde
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Mantenha sua saúde em dia com lembretes personalizados no Google Agenda.
                Nunca mais esqueça de fazer seus exames preventivos.
              </p>
            </div>
          </div>
        </section>

        {/* Reminder Cards Section */}
        <section className="section-spacing">
          <div className="container-page">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tipos de Lembretes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reminderTypes.map((reminder, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="text-blue-500">
                        {reminder.icon}
                      </div>
                      {reminder.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{reminder.description}</p>
                    <Button asChild className="w-full">
                      <a href={reminder.googleLink} target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar no Google Agenda
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-gray-50 section-spacing">
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Dicas para Manter a Rotina
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">📅 Frequência dos Exames</h3>
                  <p className="text-gray-600">
                    Exames preventivos devem ser realizados pelo menos uma vez por ano.
                    Para pessoas com vida sexual ativa, recomenda-se testagem para ISTs a cada 6 meses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">⏰ Configure Lembretes Recorrentes</h3>
                  <p className="text-gray-600">
                    No Google Agenda, você pode configurar lembretes que se repetem automaticamente.
                    Isso garante que você nunca esqueça das suas consultas de rotina.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">📱 Sincronize com seu Celular</h3>
                  <p className="text-gray-600">
                    Mantenha o Google Agenda sincronizado em todos os seus dispositivos
                    para receber notificações onde quer que esteja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LembretePage;
