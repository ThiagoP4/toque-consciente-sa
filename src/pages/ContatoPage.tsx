
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { useToast } from "@/hooks/use-toast";

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isAnonymous: false,
  });
  
  const { toast: uiToast } = useToast();
  
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ 
      ...prev, 
      isAnonymous: checked,
      name: checked ? '' : prev.name,
      email: checked ? '' : prev.email 
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setSubmitting(false);
      
      // Mostrar toast de confirmação
      toast.success('Mensagem enviada com sucesso!', {
        description: 'Agradecemos seu contato. Responderemos em breve.',
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        isAnonymous: false,
      });
    }, 1500);
  };
  
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/maissaude",
      icon: "instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/maissaude",
      icon: "twitter"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/maissaude",
      icon: "facebook"
    }
  ];
  
  const frequentQuestions = [
    {
      question: "O site é ligado a alguma instituição governamental?",
      answer: "Não, somos um projeto acadêmico de extensão universitária sem fins lucrativos, voltado à educação e conscientização sobre DSTs."
    },
    {
      question: "Posso compartilhar o conteúdo deste site?",
      answer: "Sim! Encorajamos o compartilhamento dos conteúdos para ampliar o alcance das informações sobre prevenção e cuidados com DSTs."
    },
    {
      question: "Como posso contribuir com o projeto?",
      answer: "Você pode contribuir compartilhando o site, sugerindo melhorias através do formulário de contato ou participando como voluntário."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
          <div className="container-page">
            <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Tem dúvidas, sugestões ou precisa de apoio? Entre em contato conosco.
              Sua mensagem pode ser anônima se preferir.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="section-spacing">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Envie sua mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="anonymous" className="flex items-center space-x-2 mb-4">
                        <Checkbox 
                          id="anonymous" 
                          checked={formData.isAnonymous} 
                          onCheckedChange={handleCheckboxChange}
                        />
                        <span>Enviar anonimamente</span>
                      </Label>
                    </div>
                    
                    {!formData.isAnonymous && (
                      <>
                        <div>
                          <Label htmlFor="name">Nome</Label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={formData.isAnonymous}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu.email@exemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={formData.isAnonymous}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Usaremos apenas para responder sua mensagem.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="Sobre o que você quer falar?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Digite sua mensagem aqui..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Perguntas Frequentes</h2>
                  <div className="space-y-4">
                    {frequentQuestions.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                          <p className="text-gray-600">{item.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Redes Sociais</h2>
                  <p className="mb-4 text-gray-600">
                    Siga-nos nas redes sociais para acompanhar novidades e campanhas:
                  </p>
                  <div className="flex space-x-4">
                    {socialMediaLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="lg" asChild>
                        <a 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Visite nosso perfil no ${social.name}`}
                        >
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Importante</h3>
                  <p className="text-gray-700">
                    Este site não substitui a consulta médica. Em caso de emergência ou 
                    suspeita de DST, procure imediatamente atendimento médico especializado.
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

export default ContatoPage;
