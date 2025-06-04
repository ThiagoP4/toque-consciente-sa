
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Settings, User, Accessibility, LogIn, UserPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OpcoesPage = () => {
  const { theme, setTheme } = useTheme();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    notifications: true,
    emailUpdates: false,
    fontSize: 'medium',
    highContrast: false,
    reduceMotion: false,
  });

  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="container-page section-spacing">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Opções e Configurações
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Personalize sua experiência no +Saúde
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="geral" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="conta">Conta</TabsTrigger>
              <TabsTrigger value="preferencias">Preferências</TabsTrigger>
              <TabsTrigger value="acessibilidade">Acessibilidade</TabsTrigger>
            </TabsList>

            <TabsContent value="geral" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Configurações Gerais
                  </CardTitle>
                  <CardDescription>
                    Configurações básicas da aplicação
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Tema</Label>
                      <p className="text-sm text-muted-foreground">
                        Escolha entre modo claro, escuro ou automático
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={theme === 'light' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('light')}
                      >
                        <Sun className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={theme === 'dark' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('dark')}
                      >
                        <Moon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={theme === 'system' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setTheme('system')}
                      >
                        Auto
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications" className="text-base">Notificações</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações sobre lembretes de saúde
                      </p>
                    </div>
                    <Switch
                      id="notifications"
                      checked={preferences.notifications}
                      onCheckedChange={(checked) => handlePreferenceChange('notifications', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conta" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Gerenciamento de Conta
                  </CardTitle>
                  <CardDescription>
                    Faça login ou crie uma nova conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline">
                          <LogIn className="h-4 w-4 mr-2" />
                          Fazer Login
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Fazer Login</DialogTitle>
                          <DialogDescription>
                            Entre na sua conta para sincronizar seus dados
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="seu@email.com" />
                          </div>
                          <div>
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" />
                          </div>
                          <Button className="w-full">Entrar</Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Criar Conta
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Criar Conta</DialogTitle>
                          <DialogDescription>
                            Crie uma conta para salvar seus lembretes e preferências
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="register-name">Nome</Label>
                            <Input id="register-name" placeholder="Seu nome completo" />
                          </div>
                          <div>
                            <Label htmlFor="register-email">Email</Label>
                            <Input id="register-email" type="email" placeholder="seu@email.com" />
                          </div>
                          <div>
                            <Label htmlFor="register-password">Senha</Label>
                            <Input id="register-password" type="password" />
                          </div>
                          <div>
                            <Label htmlFor="register-confirm">Confirmar Senha</Label>
                            <Input id="register-confirm" type="password" />
                          </div>
                          <Button className="w-full">Criar Conta</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferencias" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências Pessoais</CardTitle>
                  <CardDescription>
                    Customize sua experiência de acordo com suas necessidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-updates" className="text-base">Atualizações por Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber novidades e dicas de saúde por email
                      </p>
                    </div>
                    <Switch
                      id="email-updates"
                      checked={preferences.emailUpdates}
                      onCheckedChange={(checked) => handlePreferenceChange('emailUpdates', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base">Tamanho da Fonte</Label>
                    <div className="flex gap-2">
                      {['small', 'medium', 'large'].map((size) => (
                        <Button
                          key={size}
                          variant={preferences.fontSize === size ? 'default' : 'outline'}
                          onClick={() => handlePreferenceChange('fontSize', size)}
                        >
                          {size === 'small' ? 'Pequena' : size === 'medium' ? 'Média' : 'Grande'}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="acessibilidade" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Accessibility className="h-5 w-5" />
                    Opções de Acessibilidade
                  </CardTitle>
                  <CardDescription>
                    Configurações para melhorar a acessibilidade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="high-contrast" className="text-base">Alto Contraste</Label>
                      <p className="text-sm text-muted-foreground">
                        Aumenta o contraste para melhor visibilidade
                      </p>
                    </div>
                    <Switch
                      id="high-contrast"
                      checked={preferences.highContrast}
                      onCheckedChange={(checked) => handlePreferenceChange('highContrast', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduce-motion" className="text-base">Reduzir Movimento</Label>
                      <p className="text-sm text-muted-foreground">
                        Reduz animações para pessoas sensíveis ao movimento
                      </p>
                    </div>
                    <Switch
                      id="reduce-motion"
                      checked={preferences.reduceMotion}
                      onCheckedChange={(checked) => handlePreferenceChange('reduceMotion', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OpcoesPage;
