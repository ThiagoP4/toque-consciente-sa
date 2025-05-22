
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Check, AlertCircle } from 'lucide-react';

const QuizPage = () => {
  const quizQuestions = [
    {
      question: 'Qual das alternativas abaixo NÃO é uma forma de transmissão do HIV?',
      options: [
        'Relações sexuais desprotegidas',
        'Compartilhamento de seringas',
        'Aperto de mão ou abraço',
        'Transmissão de mãe para filho durante a gravidez'
      ],
      correctAnswer: 'Aperto de mão ou abraço',
      explanation: 'O HIV não é transmitido pelo contato casual como apertos de mão, abraços, ou compartilhamento de objetos pessoais como copos ou talheres.'
    },
    {
      question: 'Sobre os preservativos, qual afirmação é CORRETA?',
      options: [
        'Só é necessário usar no momento da ejaculação',
        'Deve ser usado em todas as relações sexuais, do início ao fim',
        'Pode ser reutilizado se lavado adequadamente',
        'Protege apenas contra gravidez, não contra DSTs'
      ],
      correctAnswer: 'Deve ser usado em todas as relações sexuais, do início ao fim',
      explanation: 'O preservativo deve ser usado durante toda a relação sexual, desde o início até o fim, para garantir proteção eficaz contra DSTs e gravidez não planejada.'
    },
    {
      question: 'O que é a PrEP (Profilaxia Pré-Exposição)?',
      options: [
        'Um medicamento tomado após exposição ao HIV',
        'Um tratamento para pessoas já diagnosticadas com HIV',
        'Um medicamento tomado ANTES da exposição para prevenir a infecção pelo HIV',
        'Uma vacina contra o HPV'
      ],
      correctAnswer: 'Um medicamento tomado ANTES da exposição para prevenir a infecção pelo HIV',
      explanation: 'A PrEP é um medicamento antirretroviral tomado diariamente por pessoas HIV negativas para prevenir a infecção pelo vírus antes de uma possível exposição.'
    },
    {
      question: 'Qual das seguintes DSTs pode ser prevenida através de vacinação?',
      options: [
        'HIV/AIDS',
        'Sífilis',
        'HPV',
        'Gonorreia'
      ],
      correctAnswer: 'HPV',
      explanation: 'O HPV é a única DST desta lista que possui vacina disponível. No Brasil, a vacina contra o HPV é oferecida gratuitamente pelo SUS para meninas de 9 a 14 anos e meninos de 11 a 14 anos.'
    },
    {
      question: 'Qual o significado de uma pessoa com HIV ter "carga viral indetectável"?',
      options: [
        'A pessoa está curada do HIV',
        'A pessoa não precisa mais tomar medicamentos',
        'A pessoa não transmite o vírus por via sexual',
        'A pessoa desenvolveu imunidade natural ao vírus'
      ],
      correctAnswer: 'A pessoa não transmite o vírus por via sexual',
      explanation: 'Quando uma pessoa com HIV mantém tratamento adequado e atinge carga viral indetectável por pelo menos 6 meses, ela não transmite o vírus por via sexual. Isso é conhecido como I=I (Indetectável = Intransmissível).'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
  
  const handleSelectAnswer = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer);
    }
  };
  
  const handleConfirmAnswer = () => {
    if (selectedAnswer === null) return;
    
    setHasAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  // Dicas com base na pontuação
  const getTips = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 80) {
      return {
        title: "Excelente conhecimento!",
        message: "Você demonstra ter bom conhecimento sobre prevenção de DSTs. Continue se mantendo informado(a) e compartilhe esse conhecimento com outras pessoas.",
        tips: [
          "Considere fazer testes regulares para DSTs, mesmo estando bem informado(a).",
          "Mantenha-se atualizado(a) sobre novas informações e métodos de prevenção.",
          "Seja um multiplicador de conhecimento entre amigos e familiares."
        ]
      };
    } else if (percentage >= 60) {
      return {
        title: "Bom conhecimento!",
        message: "Você tem um bom conhecimento sobre DSTs, mas ainda há espaço para aprender mais e se proteger melhor.",
        tips: [
          "Explore nossa seção de informações para aprofundar seu conhecimento.",
          "Lembre-se de usar preservativos em todas as relações sexuais.",
          "Converse abertamente sobre prevenção com parceiros sexuais."
        ]
      };
    } else {
      return {
        title: "Vamos aprender mais!",
        message: "Há várias informações importantes sobre DSTs que podem ajudar você a se proteger melhor.",
        tips: [
          "Dedique um tempo para ler nossa seção de informações sobre DSTs.",
          "Use sempre preservativos em relações sexuais.",
          "Faça testes regulares para DSTs, mesmo sem sintomas.",
          "Converse com profissionais de saúde para esclarecer suas dúvidas."
        ]
      };
    }
  };
  
  const resultTips = getTips();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
          <div className="container-page">
            <h1 className="text-4xl font-bold mb-4">Quiz Educativo sobre DSTs</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Teste seus conhecimentos sobre prevenção, transmissão e tratamento de DSTs.
              Ao final, você receberá dicas personalizadas com base nas suas respostas.
            </p>
          </div>
        </section>
        
        {/* Quiz Content */}
        <section className="section-spacing">
          <div className="container-page max-w-3xl mx-auto">
            {!quizCompleted ? (
              // Quiz em andamento
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Questão {currentQuestionIndex + 1} de {quizQuestions.length}
                  </span>
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">
                      {currentQuestion.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedAnswer || ""} className="space-y-4">
                      {currentQuestion.options.map((option, index) => {
                        const isCorrect = option === currentQuestion.correctAnswer;
                        const isSelected = option === selectedAnswer;
                        
                        let optionClassName = "border p-4 rounded-md relative";
                        
                        if (hasAnswered) {
                          if (isCorrect) {
                            optionClassName += " bg-green-50 border-green-300";
                          } else if (isSelected && !isCorrect) {
                            optionClassName += " bg-red-50 border-red-300";
                          }
                        } else {
                          optionClassName += " hover:bg-gray-50 cursor-pointer";
                          if (isSelected) {
                            optionClassName += " border-blue-400 bg-blue-50";
                          }
                        }
                        
                        return (
                          <div
                            key={index}
                            className={optionClassName}
                            onClick={() => handleSelectAnswer(option)}
                          >
                            <div className="flex items-start gap-3">
                              <RadioGroupItem
                                value={option}
                                id={`option-${index}`}
                                disabled={hasAnswered}
                                className="mt-1"
                              />
                              <Label
                                htmlFor={`option-${index}`}
                                className="flex-grow text-base cursor-pointer"
                              >
                                {option}
                              </Label>
                              
                              {hasAnswered && isCorrect && (
                                <Check className="h-5 w-5 text-green-500" />
                              )}
                              {hasAnswered && isSelected && !isCorrect && (
                                <AlertCircle className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </RadioGroup>
                    
                    {hasAnswered && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-md">
                        <p className="font-semibold mb-1">Explicação:</p>
                        <p>{currentQuestion.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {!hasAnswered ? (
                      <Button 
                        onClick={handleConfirmAnswer} 
                        disabled={selectedAnswer === null}
                        className="w-full"
                      >
                        Confirmar resposta
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleNextQuestion} 
                        className="w-full"
                      >
                        {currentQuestionIndex < quizQuestions.length - 1
                          ? "Próxima pergunta"
                          : "Ver resultados"
                        }
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            ) : (
              // Resultado do quiz
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-center">
                    Resultado do Quiz
                  </CardTitle>
                  <CardDescription className="text-center text-lg">
                    Você acertou {score} de {quizQuestions.length} questões
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center relative">
                      <div className="absolute inset-2 rounded-full border-8 border-green-400" style={{ 
                        clipPath: `polygon(50% 50%, 50% 0, ${50 + 50 * Math.cos((score / quizQuestions.length) * 2 * Math.PI)}% ${50 - 50 * Math.sin((score / quizQuestions.length) * 2 * Math.PI)}%, ${(score / quizQuestions.length) >= 0.5 ? '100% 50%, 100% 100%, 50% 100%, 0 100%, 0 50%' : ''})` 
                      }}></div>
                      <span className="text-3xl font-bold">
                        {Math.round((score / quizQuestions.length) * 100)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{resultTips.title}</h3>
                    <p>{resultTips.message}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Dicas personalizadas:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {resultTips.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" onClick={handleRestartQuiz} className="w-full sm:w-auto">
                    Refazer o quiz
                  </Button>
                  <Button asChild className="w-full sm:w-auto">
                    <a href="/infos">Explorar informações sobre DSTs</a>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
