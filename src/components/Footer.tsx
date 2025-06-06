
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-lilac-400 text-transparent bg-clip-text font-display font-extrabold text-xl">
                +Saúde
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Informação e apoio para educação e prevenção de DSTs
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/infos" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Informações</Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Quiz</Link>
              </li>
              <li>
                <Link to="/locais" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Locais de Atendimento</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lembrete" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Lembrete</Link>
              </li>
              <li>
                <Link to="/apoio" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Apoio</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Fale Conosco</Link>
              </li>
              <li>
                <Link to="/opcoes" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Opções</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contatos de Emergência</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Disque Saúde: <span className="font-semibold">136</span></li>
              <li className="text-gray-600 dark:text-gray-400">CVV: <span className="font-semibold">188</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} +Saúde. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
              <span>Projeto Acadêmico de Extensão Universitária</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
