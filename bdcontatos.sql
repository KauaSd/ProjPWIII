-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08/04/2026 às 17:42
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdcontatos`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbmensagens`
--

CREATE TABLE `tbmensagens` (
  `id_usuario` int(12) NOT NULL,
  `nome_usuario` varchar(80) NOT NULL,
  `email_usuario` varchar(256) NOT NULL,
  `telefone_usuario` varchar(12) NOT NULL,
  `msg_usuario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbmensagens`
--

INSERT INTO `tbmensagens` (`id_usuario`, `nome_usuario`, `email_usuario`, `telefone_usuario`, `msg_usuario`) VALUES
(1, 'Ana', 'ana@gmail.com', '11900000000', 'Eu achei muito interessante!');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tbmensagens`
--
ALTER TABLE `tbmensagens`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbmensagens`
--
ALTER TABLE `tbmensagens`
  MODIFY `id_usuario` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
