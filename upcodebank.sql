-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Abr-2021 às 20:38
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `upcodebank`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contas`
--

CREATE TABLE `contas` (
  `id_conta` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `data_nascimento` date NOT NULL,
  `data_cadastro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `contas`
--

INSERT INTO `contas` (`id_conta`, `nome`, `cpf`, `data_nascimento`, `data_cadastro`) VALUES
(1, 'Misael', '115545645454', '2000-04-06', '2021-04-06'),
(2, 'Joel', '115545645454', '2001-04-06', '2021-04-06'),
(3, 'Eude', '115545645454', '1994-04-06', '2021-04-06'),
(4, 'Paulo', '115545645454', '1994-04-06', '2021-04-02'),
(5, 'Francisca', '121554165654', '1989-04-06', '2021-04-02'),
(6, 'Pedro', '115545645454', '2000-04-06', '2021-01-01'),
(7, 'Andre', '115545645454', '2000-04-06', '2020-02-03'),
(8, 'Misael', '115545645454', '2000-04-06', '2021-01-01'),
(9, 'Fernando', '115545645454', '2000-04-06', '2021-01-01'),
(10, 'misael', '115545645454', '2000-04-06', '2021-01-01');

-- --------------------------------------------------------

--
-- Estrutura da tabela `movimentacao`
--

CREATE TABLE `movimentacao` (
  `id_movimentacao` int(11) NOT NULL,
  `valor_transacao` double NOT NULL,
  `tipo_transacao` int(11) NOT NULL,
  `data_transacao` date NOT NULL,
  `id_conta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `movimentacao`
--

INSERT INTO `movimentacao` (`id_movimentacao`, `valor_transacao`, `tipo_transacao`, `data_transacao`, `id_conta`) VALUES
(2, 1000, 2, '2021-04-06', 1),
(3, 1000, 1, '2021-04-05', 1),
(8, 900, 1, '2020-04-05', 2),
(9, 900, 1, '2020-04-04', 2),
(10, 900, 1, '2020-04-04', 2),
(11, 900, 1, '2020-04-04', 2),
(12, 900, 2, '2020-04-03', 2),
(13, 90, 2, '2020-04-02', 2),
(14, 900, 1, '2020-04-04', 3),
(15, 900, 1, '2021-03-03', 3),
(16, 900, 1, '2021-03-03', 3),
(17, 500, 1, '2021-03-02', 3),
(18, 500, 1, '2021-03-02', 3),
(19, 500, 2, '2021-03-01', 3),
(20, 500, 1, '2021-03-04', 4),
(21, 500, 1, '2021-03-03', 4),
(22, 1000, 1, '2021-03-03', 4),
(23, 1000, 2, '2021-03-02', 4),
(24, 1000, 2, '2021-03-01', 4),
(25, 1000, 2, '2021-03-01', 4),
(28, 100, 1, '2021-02-28', 5),
(29, 1000, 1, '2021-02-27', 5),
(30, 100, 1, '2021-02-25', 5),
(31, 100, 1, '2021-02-25', 5),
(32, 10000, 1, '2020-02-03', 1),
(33, 999, 1, '2020-02-01', 1),
(34, 2000, 1, '2019-02-04', 1),
(35, 10, 1, '2019-02-05', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `contas`
--
ALTER TABLE `contas`
  ADD PRIMARY KEY (`id_conta`);

--
-- Índices para tabela `movimentacao`
--
ALTER TABLE `movimentacao`
  ADD PRIMARY KEY (`id_movimentacao`),
  ADD KEY `fk_movconta` (`id_conta`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `contas`
--
ALTER TABLE `contas`
  MODIFY `id_conta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `movimentacao`
--
ALTER TABLE `movimentacao`
  MODIFY `id_movimentacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `movimentacao`
--
ALTER TABLE `movimentacao`
  ADD CONSTRAINT `fk_movconta` FOREIGN KEY (`id_conta`) REFERENCES `contas` (`id_conta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
