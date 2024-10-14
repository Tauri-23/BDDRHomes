-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2024 at 06:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bddr_homes`
--
CREATE DATABASE IF NOT EXISTS `bddr_homes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bddr_homes`;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `city`, `province`, `created_at`, `updated_at`) VALUES
(1, 'Tanza', 1, '2024-09-13 07:26:56', '2024-09-13 07:26:56'),
(2, 'Naic', 1, '2024-09-13 07:26:56', '2024-09-13 07:26:56'),
(3, 'Trece Martires', 1, '2024-09-13 07:26:56', '2024-09-29 15:49:59'),
(4, 'Kawit', 1, '2024-09-13 07:26:56', '2024-09-13 07:26:56'),
(5, 'Calamba', 3, '2024-09-25 07:45:39', '2024-09-25 07:45:39'),
(6, 'Imus', 1, '2024-09-28 07:08:36', '2024-09-28 07:08:36'),
(7, 'Tuy', 4, '2024-09-29 15:55:55', '2024-09-29 15:55:55'),
(8, 'Sto. Tomas', 4, '2024-09-30 12:23:37', '2024-09-30 12:23:37'),
(9, 'Nasugbu', 4, '2024-09-30 14:15:37', '2024-09-30 14:15:37'),
(10, 'Ortigas', 2, '2024-10-02 16:54:15', '2024-10-02 16:54:15'),
(11, 'Quezon City', 2, '2024-10-02 17:24:55', '2024-10-02 17:24:55'),
(12, 'Manila', 2, '2024-10-03 07:54:34', '2024-10-03 07:54:34');

-- --------------------------------------------------------

--
-- Table structure for table `client_prefered_locations`
--

CREATE TABLE `client_prefered_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `province` bigint(20) UNSIGNED DEFAULT NULL,
  `client` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client_prefered_locations`
--

INSERT INTO `client_prefered_locations` (`id`, `province`, `client`, `created_at`, `updated_at`) VALUES
(1, 1, '824907', '2024-09-13 07:36:36', '2024-09-13 07:36:36'),
(2, 3, '824907', '2024-09-13 07:36:36', '2024-09-13 07:36:36'),
(9, 4, '824907', '2024-09-15 22:40:07', '2024-09-15 22:40:07'),
(23, 2, '399024', '2024-10-01 06:04:54', '2024-10-01 06:04:54'),
(24, 3, '396659', '2024-10-01 06:06:49', '2024-10-01 06:06:49'),
(25, 4, '396659', '2024-10-01 06:06:49', '2024-10-01 06:06:49'),
(26, 3, '960055', '2024-10-01 06:31:36', '2024-10-01 06:31:36'),
(27, 1, '960055', '2024-10-01 06:31:36', '2024-10-01 06:31:36'),
(28, 5, '773892', '2024-10-01 06:36:04', '2024-10-01 06:36:04'),
(29, 2, '773892', '2024-10-01 06:36:04', '2024-10-01 06:36:04'),
(30, 7, '386733', '2024-10-01 06:39:35', '2024-10-01 06:39:35'),
(31, 1, '386733', '2024-10-01 06:39:35', '2024-10-01 06:39:35'),
(32, 1, '903836', '2024-10-01 06:42:32', '2024-10-01 06:42:32'),
(33, 4, '903836', '2024-10-01 06:42:32', '2024-10-01 06:42:32'),
(34, 3, '903836', '2024-10-01 06:42:32', '2024-10-01 06:42:32'),
(35, 1, '110774', '2024-10-01 06:46:26', '2024-10-01 06:46:26'),
(36, 2, '110774', '2024-10-01 06:46:26', '2024-10-01 06:46:26'),
(37, 4, '110774', '2024-10-01 06:46:26', '2024-10-01 06:46:26'),
(38, 2, '207893', '2024-10-01 06:51:03', '2024-10-01 06:51:03'),
(39, 8, '207893', '2024-10-01 06:51:03', '2024-10-01 06:51:03'),
(40, 4, '207893', '2024-10-01 06:51:03', '2024-10-01 06:51:03'),
(41, 6, '926562', '2024-10-02 06:59:20', '2024-10-02 06:59:20'),
(42, 8, '926562', '2024-10-02 06:59:20', '2024-10-02 06:59:20'),
(43, 2, '163456', '2024-10-02 07:07:58', '2024-10-02 07:07:58'),
(44, 4, '163456', '2024-10-02 07:07:58', '2024-10-02 07:07:58'),
(45, 4, '839390', '2024-10-02 07:11:19', '2024-10-02 07:11:19'),
(46, 6, '839390', '2024-10-02 07:11:19', '2024-10-02 07:11:19'),
(47, 8, '839390', '2024-10-02 07:11:19', '2024-10-02 07:11:19'),
(48, 3, '162524', '2024-10-02 07:13:17', '2024-10-02 07:13:17'),
(49, 1, '162524', '2024-10-02 07:13:17', '2024-10-02 07:13:17'),
(50, 2, '203958', '2024-10-02 07:15:48', '2024-10-02 07:15:48'),
(51, 4, '203958', '2024-10-02 07:15:48', '2024-10-02 07:15:48'),
(52, 4, '237902', '2024-10-02 07:18:45', '2024-10-02 07:18:45'),
(53, 1, '237902', '2024-10-02 07:18:45', '2024-10-02 07:18:45'),
(54, 6, '101838', '2024-10-02 07:20:40', '2024-10-02 07:20:40'),
(55, 8, '101838', '2024-10-02 07:20:40', '2024-10-02 07:20:40'),
(56, 3, '807791', '2024-10-02 07:22:40', '2024-10-02 07:22:40'),
(57, 1, '807791', '2024-10-02 07:22:40', '2024-10-02 07:22:40'),
(58, 7, '807791', '2024-10-02 07:22:40', '2024-10-02 07:22:40'),
(59, 2, '986752', '2024-10-02 07:24:38', '2024-10-02 07:24:38'),
(60, 8, '986752', '2024-10-02 07:24:38', '2024-10-02 07:24:38'),
(61, 4, '986752', '2024-10-02 07:24:38', '2024-10-02 07:24:38'),
(62, 1, '698882', '2024-10-02 07:28:52', '2024-10-02 07:28:52'),
(63, 7, '698882', '2024-10-02 07:28:52', '2024-10-02 07:28:52'),
(64, 3, '698882', '2024-10-02 07:28:52', '2024-10-02 07:28:52'),
(65, 7, '562780', '2024-10-02 07:30:55', '2024-10-02 07:30:55'),
(66, 4, '562780', '2024-10-02 07:30:55', '2024-10-02 07:30:55'),
(67, 2, '562780', '2024-10-02 07:30:55', '2024-10-02 07:30:55'),
(68, 1, '942559', '2024-10-02 07:32:37', '2024-10-02 07:32:37'),
(69, 3, '942559', '2024-10-02 07:32:37', '2024-10-02 07:32:37'),
(70, 8, '942559', '2024-10-02 07:32:37', '2024-10-02 07:32:37'),
(71, 1, '834004', '2024-10-02 07:34:39', '2024-10-02 07:34:39'),
(72, 3, '834004', '2024-10-02 07:34:39', '2024-10-02 07:34:39'),
(73, 7, '834004', '2024-10-02 07:34:39', '2024-10-02 07:34:39'),
(74, 1, '258904', '2024-10-02 07:36:35', '2024-10-02 07:36:35'),
(75, 4, '258904', '2024-10-02 07:36:35', '2024-10-02 07:36:35'),
(76, 2, '258904', '2024-10-02 07:36:35', '2024-10-02 07:36:35'),
(77, 7, '353475', '2024-10-02 07:38:27', '2024-10-02 07:38:27'),
(78, 1, '353475', '2024-10-02 07:38:27', '2024-10-02 07:38:27'),
(79, 2, '353475', '2024-10-02 07:38:27', '2024-10-02 07:38:27'),
(80, 1, '655676', '2024-10-02 08:33:32', '2024-10-02 08:33:32'),
(81, 5, '655676', '2024-10-02 08:33:32', '2024-10-02 08:33:32'),
(82, 3, '655676', '2024-10-02 08:33:32', '2024-10-02 08:33:32'),
(83, 8, '655676', '2024-10-02 08:33:32', '2024-10-02 08:33:32');

-- --------------------------------------------------------

--
-- Table structure for table `client_property_views`
--

CREATE TABLE `client_property_views` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client` varchar(6) DEFAULT NULL,
  `property` varchar(12) DEFAULT NULL,
  `viewed_times` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client_property_views`
--

INSERT INTO `client_property_views` (`id`, `client`, `property`, `viewed_times`, `created_at`, `updated_at`) VALUES
(3, '824907', '493486253684', 2, '2024-10-03 13:16:44', '2024-10-03 13:17:20'),
(4, '824907', '342927025770', 1, '2024-10-03 13:17:08', '2024-10-03 13:17:08'),
(5, '824907', '937551251491', 5, '2024-10-03 13:17:33', '2024-10-04 07:59:12'),
(6, '399024', '831797365028', 1, '2024-10-03 13:22:26', '2024-10-03 13:22:26'),
(7, '399024', '764183063778', 1, '2024-10-03 13:22:43', '2024-10-03 13:22:43'),
(8, '399024', '493486253684', 1, '2024-10-03 13:23:04', '2024-10-03 13:23:04'),
(9, '399024', '457886524482', 3, '2024-10-03 13:23:36', '2024-10-03 13:24:16'),
(10, '399024', '342927025770', 1, '2024-10-03 13:25:16', '2024-10-03 13:25:16'),
(11, '396659', '294071001587', 2, '2024-10-03 13:27:21', '2024-10-03 13:27:48'),
(12, '396659', '528609224009', 1, '2024-10-03 13:28:20', '2024-10-03 13:28:20'),
(13, '396659', '527419886414', 1, '2024-10-03 13:28:32', '2024-10-03 13:28:32'),
(14, '396659', '664900464887', 1, '2024-10-03 13:28:40', '2024-10-03 13:28:40'),
(15, '396659', '877611940987', 3, '2024-10-03 13:28:54', '2024-10-03 13:29:24'),
(16, '960055', '342927025770', 1, '2024-10-03 13:43:26', '2024-10-03 13:43:26'),
(17, '960055', '336666707659', 3, '2024-10-03 13:43:45', '2024-10-03 13:46:16'),
(18, '960055', '148711411095', 1, '2024-10-03 13:44:52', '2024-10-03 13:44:52'),
(19, '960055', '154384014315', 2, '2024-10-03 13:46:22', '2024-10-03 13:46:33'),
(20, '773892', '528609224009', 2, '2024-10-03 13:47:31', '2024-10-03 13:47:41'),
(21, '773892', '139864441388', 2, '2024-10-03 13:47:52', '2024-10-03 13:48:38'),
(22, '773892', '433046111238', 1, '2024-10-03 13:48:05', '2024-10-03 13:48:05'),
(23, '773892', '760326555541', 1, '2024-10-03 13:48:16', '2024-10-03 13:48:16'),
(24, '386733', '664900464887', 3, '2024-10-03 13:49:46', '2024-10-03 13:50:08'),
(25, '386733', '764183063778', 2, '2024-10-03 13:50:18', '2024-10-03 13:51:59'),
(26, '386733', '547798650785', 2, '2024-10-03 13:50:29', '2024-10-03 13:51:34'),
(27, '386733', '696119658282', 1, '2024-10-03 13:50:45', '2024-10-03 13:50:45'),
(28, '386733', '527419886414', 1, '2024-10-03 13:51:24', '2024-10-03 13:51:24'),
(29, '386733', '294071001587', 1, '2024-10-03 13:52:17', '2024-10-03 13:52:17'),
(30, '903836', '547798650785', 2, '2024-10-03 13:53:59', '2024-10-03 13:54:09'),
(31, '903836', '134004931058', 3, '2024-10-03 13:54:27', '2024-10-03 13:54:56'),
(32, '903836', '764183063778', 2, '2024-10-03 13:55:08', '2024-10-03 13:55:20'),
(33, '110774', '696119658282', 1, '2024-10-03 13:55:50', '2024-10-03 13:55:50'),
(34, '110774', '760326555541', 2, '2024-10-03 13:56:07', '2024-10-03 13:56:34'),
(35, '110774', '433046111238', 2, '2024-10-03 13:56:46', '2024-10-03 13:57:08'),
(36, '207893', '347963672267', 3, '2024-10-03 13:58:06', '2024-10-03 13:58:31'),
(37, '207893', '341545940530', 2, '2024-10-03 13:58:40', '2024-10-03 13:58:53'),
(38, '207893', '457886524482', 3, '2024-10-03 13:59:02', '2024-10-03 14:00:16'),
(39, '207893', '436416004652', 2, '2024-10-03 13:59:52', '2024-10-03 13:59:59'),
(40, '207893', '342927025770', 1, '2024-10-03 14:00:25', '2024-10-03 14:00:25'),
(41, '207893', '760326555541', 1, '2024-10-03 14:00:33', '2024-10-03 14:00:33'),
(42, '926562', '640804201556', 4, '2024-10-03 14:01:07', '2024-10-03 14:02:17'),
(43, '926562', '436416004652', 3, '2024-10-03 14:01:50', '2024-10-03 14:04:01'),
(44, '926562', '148711411095', 3, '2024-10-03 14:02:24', '2024-10-03 14:02:35'),
(45, '926562', '528609224009', 2, '2024-10-03 14:02:46', '2024-10-03 14:03:52'),
(46, '926562', '493486253684', 2, '2024-10-03 14:03:26', '2024-10-03 14:03:43'),
(47, '163456', '375689593409', 3, '2024-10-03 14:04:53', '2024-10-03 14:05:06'),
(48, '163456', '611021995297', 2, '2024-10-03 14:05:16', '2024-10-03 14:05:25'),
(49, '163456', '502049876172', 2, '2024-10-03 14:05:34', '2024-10-03 14:05:42'),
(50, '163456', '341545940530', 2, '2024-10-03 14:05:50', '2024-10-03 14:05:57'),
(51, '839390', '134004931058', 2, '2024-10-03 14:06:32', '2024-10-03 14:06:38'),
(52, '839390', '294071001587', 1, '2024-10-03 14:06:45', '2024-10-03 14:06:45'),
(53, '839390', '696119658282', 2, '2024-10-03 14:07:03', '2024-10-03 14:07:16'),
(54, '839390', '367379417707', 2, '2024-10-03 14:07:24', '2024-10-03 14:07:36'),
(55, '162524', '342927025770', 3, '2024-10-03 14:08:34', '2024-10-03 14:08:51'),
(56, '162524', '154384014315', 2, '2024-10-03 14:08:58', '2024-10-03 14:09:05'),
(57, '162524', '375689593409', 2, '2024-10-03 14:09:14', '2024-10-03 14:09:21'),
(58, '162524', '493486253684', 1, '2024-10-03 14:09:35', '2024-10-03 14:09:35'),
(59, '203958', '547798650785', 2, '2024-10-03 14:10:01', '2024-10-03 14:10:09'),
(60, '203958', '664900464887', 2, '2024-10-03 14:10:17', '2024-10-03 14:10:25'),
(61, '203958', '139864441388', 4, '2024-10-03 14:10:32', '2024-10-03 14:12:09'),
(62, '203958', '347963672267', 2, '2024-10-03 14:10:40', '2024-10-03 14:11:56'),
(63, '203958', '502049876172', 1, '2024-10-03 14:10:58', '2024-10-03 14:10:58'),
(64, '203958', '300234873470', 2, '2024-10-03 14:11:05', '2024-10-03 14:11:34'),
(65, '237902', '764183063778', 3, '2024-10-03 14:15:26', '2024-10-03 14:16:00'),
(66, '237902', '502049876172', 2, '2024-10-03 14:15:43', '2024-10-03 14:16:39'),
(67, '237902', '341545940530', 2, '2024-10-03 14:16:08', '2024-10-03 14:16:20'),
(68, '101838', '937551251491', 2, '2024-10-03 14:17:11', '2024-10-03 14:17:23'),
(69, '101838', '493486253684', 2, '2024-10-03 14:17:38', '2024-10-03 14:17:53'),
(70, '101838', '436416004652', 3, '2024-10-03 14:18:02', '2024-10-03 14:18:41'),
(71, '101838', '342927025770', 1, '2024-10-03 14:18:52', '2024-10-03 14:18:52'),
(72, '807791', '324226682213', 4, '2024-10-03 14:19:20', '2024-10-03 14:20:35'),
(73, '807791', '640804201556', 2, '2024-10-03 14:19:42', '2024-10-03 14:19:51'),
(74, '807791', '433046111238', 2, '2024-10-03 14:20:01', '2024-10-03 14:20:15'),
(75, '807791', '527419886414', 1, '2024-10-03 14:20:26', '2024-10-03 14:20:26'),
(76, '986752', '441677547358', 2, '2024-10-03 14:21:14', '2024-10-03 14:21:22'),
(77, '986752', '696119658282', 1, '2024-10-03 14:21:35', '2024-10-03 14:21:35'),
(78, '986752', '294071001587', 3, '2024-10-03 14:22:06', '2024-10-03 14:22:28'),
(79, '986752', '528609224009', 2, '2024-10-03 14:22:38', '2024-10-03 14:22:52'),
(80, '698882', '336666707659', 2, '2024-10-03 14:23:24', '2024-10-03 14:23:31'),
(81, '698882', '493486253684', 3, '2024-10-03 14:23:41', '2024-10-03 14:24:05'),
(82, '698882', '831797365028', 2, '2024-10-03 14:24:20', '2024-10-03 14:24:32'),
(83, '562780', '664900464887', 3, '2024-10-03 14:25:35', '2024-10-03 14:25:49'),
(84, '562780', '547798650785', 3, '2024-10-03 14:25:56', '2024-10-03 14:26:27'),
(85, '562780', '877611940987', 2, '2024-10-03 14:26:44', '2024-10-03 14:26:56'),
(86, '562780', '760326555541', 1, '2024-10-03 14:27:25', '2024-10-03 14:27:25'),
(87, '562780', '611021995297', 2, '2024-10-03 14:27:37', '2024-10-03 14:27:50'),
(88, '942559', '877611940987', 2, '2024-10-03 14:28:47', '2024-10-03 14:28:58'),
(89, '942559', '760326555541', 2, '2024-10-03 14:29:06', '2024-10-03 14:29:16'),
(90, '942559', '502049876172', 3, '2024-10-03 14:29:27', '2024-10-03 14:29:44'),
(91, '942559', '300234873470', 1, '2024-10-03 14:29:53', '2024-10-03 14:29:53'),
(92, '942559', '347963672267', 1, '2024-10-03 14:30:01', '2024-10-03 14:30:01'),
(93, '834004', '134004931058', 4, '2024-10-03 14:30:33', '2024-10-03 14:31:29'),
(94, '834004', '367379417707', 2, '2024-10-03 14:30:56', '2024-10-03 14:31:05'),
(95, '834004', '433046111238', 1, '2024-10-03 14:31:18', '2024-10-03 14:31:18'),
(96, '834004', '441677547358', 1, '2024-10-03 14:31:39', '2024-10-03 14:31:39'),
(97, '258904', '529357874779', 2, '2024-10-03 14:32:11', '2024-10-03 14:32:23'),
(98, '258904', '831797365028', 2, '2024-10-03 14:32:34', '2024-10-03 14:33:21'),
(99, '258904', '336666707659', 2, '2024-10-03 14:32:44', '2024-10-03 14:32:51'),
(100, '258904', '375689593409', 2, '2024-10-03 14:33:00', '2024-10-03 14:33:08'),
(101, '353475', '493486253684', 3, '2024-10-03 14:33:46', '2024-10-03 14:34:08'),
(102, '353475', '937551251491', 2, '2024-10-03 14:34:22', '2024-10-03 14:34:31'),
(103, '353475', '436416004652', 2, '2024-10-03 14:34:45', '2024-10-03 14:34:53'),
(104, '655676', '347963672267', 2, '2024-10-03 14:35:34', '2024-10-03 14:35:42'),
(105, '655676', '877611940987', 2, '2024-10-03 14:35:49', '2024-10-03 14:35:57'),
(106, '655676', '341545940530', 2, '2024-10-03 14:36:35', '2024-10-03 14:36:48'),
(107, '655676', '502049876172', 2, '2024-10-03 14:36:56', '2024-10-03 14:37:04');

-- --------------------------------------------------------

--
-- Table structure for table `employment_types`
--

CREATE TABLE `employment_types` (
  `id` varchar(6) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employment_types`
--

INSERT INTO `employment_types` (`id`, `type`, `created_at`, `updated_at`) VALUES
('265994', 'OVERSEAS FILIPINO WORKERS (OFW)', '2024-09-21 08:02:49', '2024-09-21 08:02:49'),
('478189', 'LOCALLY EMPLOYED', '2024-09-21 08:02:49', '2024-09-21 08:02:49'),
('607299', 'SELF-EMPLOYED / BUSINESS OWNERS', '2024-09-21 08:02:49', '2024-09-21 08:02:49');

-- --------------------------------------------------------

--
-- Table structure for table `financing_requirements`
--

CREATE TABLE `financing_requirements` (
  `id` varchar(6) NOT NULL,
  `financing` varchar(6) DEFAULT NULL,
  `requirement` varchar(255) NOT NULL,
  `notes` longtext NOT NULL,
  `employment_type` varchar(6) DEFAULT NULL,
  `marital_status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `financing_requirements`
--

INSERT INTO `financing_requirements` (`id`, `financing`, `requirement`, `notes`, `employment_type`, `marital_status`, `created_at`, `updated_at`) VALUES
('028104', '381064', '2 Government ID', 'SSS, Voters ID, Postal ID, UMID, Drivers License. Back to back, with 3 specimen signature.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('235871', '381064', 'Latest one month payslip', 'Colored, clear printed copy.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('252340', '381064', 'Certificate of Tenancy', 'Certification from your landlord (or whoever is the name indicated in your Meralco bill) that you are a resident of his apartment/house. Should also attach a valid ID with 3 specimen signatures. To be submitted by the representative. If COC is not available submit Barangay Certificate instead.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('273852', '381064', 'Birth Certificate', 'Photocopy or printed copy; Must be clear and complete.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('288266', '381064', 'Print out ESAV', 'ESAV is the summary of your contribution. Go to any Pag-ibig branch and ask to have your ESAV Printed. Look at the number of contributions, if less than 24 mos. Please settle the remaining months.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('315138', '381064', 'Tin ID', 'Back to back, with 3 specimen signature.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('341660', '381064', 'Barangay Certificate', 'Barangay Certificate under the buyer\'s name on the same barangay as the Meralco bill. If a Barangay Certificate is not available, submit the Certificate of Tenancy instead.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('344606', '381064', 'Barangay Certificate', 'Barangay Certificate under the buyer\'s name on the same barangay as the Meralco bill. If a Barangay Certificate is not available, submit the Certificate of Tenancy instead.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('401730', '381064', '6 1x1 ID Picture', 'White background. Must be printed in an image shop like Picture City, Great image. Computer shop printed photo is not allowed', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('428560', '381064', 'Marriage Certificate', 'Photocopy or printed copy; Must be clear and complete.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('433914', '381064', 'Company ID', 'Back to back, with 3 specimen signature.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('697057', '381064', '2 Government ID', 'SSS, Voters ID, Postal ID, UMID, Drivers License. Back to back, with 3 specimen signature.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('736688', '381064', 'Certificate of Employment with Compensation (COEC)', 'Monthly Salary breakdown (Basic + Allowance if theres any).', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('748387', '381064', 'Latest Proof of Billing of Meralco or Manila\r\nWater/Maynilad or PLDT', 'Latest bill. If not under the buyer\'s name, the buyer should secure a Certificate of Tenancy to whoever is the name indicated in the bill or Barangay Certificate.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('762963', '381064', 'Certificate of Employment with Compensation (COEC)', 'Monthly Salary breakdown (Basic + Allowance if theres any).', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('822897', '381064', 'Latest Proof of Billing of Meralco or Manila\r\nWater/Maynilad or PLDT', 'Latest bill. If not under the buyer\'s name, the buyer should secure a Certificate of Tenancy to whoever is the name indicated in the bill or Barangay Certificate.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('849708', '381064', 'Company ID', 'Back to back, with 3 specimen signature.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('855108', '381064', 'Latest one month payslip', 'Colored, clear printed copy.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('866196', '381064', 'Certificate of Tenancy', 'Certification from your landlord (or whoever is the name indicated in your Meralco bill) that you are a resident of his apartment/house. Should also attach a valid ID with 3 specimen signatures. To be submitted by the representative. If COC is not available submit Barangay Certificate instead.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('881321', '381064', 'Tin ID', 'Back to back, with 3 specimen signature.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42'),
('900050', '381064', '2 Spouse\'s IDs', 'Back to back with 3 specimen signature.', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('955024', '381064', '6 1x1 ID Picture', 'White background. Must be printed in an image shop like Picture City, Great image. Computer shop printed photo is not allowed', '478189', 'Married', '2024-09-21 09:18:44', '2024-09-21 09:18:44'),
('977618', '381064', 'Print out ESAV', 'ESAV is the summary of your contribution. Go to any Pag-ibig branch and ask to have your ESAV Printed. Look at the number of contributions, if less than 24 mos. Please settle the remaining months.', '478189', 'Single', '2024-09-21 08:46:42', '2024-09-21 08:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(8, '2024_06_22_112538_create_personal_access_tokens_table', 1),
(10, '2024_07_08_072128_create_property_types_table', 3),
(11, '2024_07_08_084111_create_property_amenities_table', 4),
(12, '2024_07_11_091308_create_property_financings_table', 5),
(24, '2024_08_04_102927_create_wishlists_table', 13),
(26, '2024_08_10_082416_create_user_admins_table', 15),
(32, '2024_08_19_090931_create_jobs_table', 20),
(33, '2024_08_19_091159_create_cache_table', 21),
(41, '2024_08_25_161922_create_teams_table', 26),
(42, '2024_06_30_143220_create_user_agents_table', 27),
(44, '2024_09_04_043247_create_property_developers_table', 29),
(48, '2024_07_12_134824_create_published_properties_photos_table', 30),
(49, '2024_07_12_051953_create_published_properties_financings_table', 31),
(50, '2024_07_12_051035_create_published_properties_amenities_table', 32),
(52, '2024_08_04_103133_create_wishlist_properties_table', 34),
(56, '2024_09_13_071040_create_cities_table', 37),
(58, '2024_09_13_072730_create_client_prefered_locations_table', 38),
(61, '2024_09_16_160729_create_ongoing_transactions_table', 40),
(62, '2024_09_21_042011_create_employment_types_table', 41),
(64, '2024_09_21_043843_create_financing_requirements_table', 42),
(65, '2024_06_15_082540_create_user_clients_table', 43),
(67, '2024_09_25_073857_create_property_developers_projects_table', 44),
(71, '2024_09_28_045519_create_published_property_units_table', 46),
(73, '2024_09_13_071024_create_provinces_table', 47),
(74, '2024_07_12_042824_create_published_properties_table', 48),
(77, '2024_10_04_033801_create_client_property_views_table', 49);

-- --------------------------------------------------------

--
-- Table structure for table `ongoing_transactions`
--

CREATE TABLE `ongoing_transactions` (
  `id` varchar(16) NOT NULL,
  `client` varchar(6) DEFAULT NULL,
  `agent` varchar(6) DEFAULT NULL,
  `property` varchar(12) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(10, 'App\\Models\\user_clients', 0, 'main', 'f3d3706a7eb95ac63098d49f68a9ace84198fc7d3323634feea448d59f0763ae', '[\"*\"]', NULL, NULL, '2024-06-23 18:41:41', '2024-06-23 18:41:41'),
(404, 'App\\Models\\user_admins', 100000, 'main', '71e4703f450b414c4144ebe7923d193dfc4baa99b8fe62fd3416a191728a3e18', '[\"*\"]', '2024-10-02 23:54:42', NULL, '2024-10-02 08:35:13', '2024-10-02 23:54:42'),
(410, 'App\\Models\\user_clients', 824907, 'main', '7d35897db9d8ca2a8f7a0f4c327ff8e30bdaf35e579c45f69910f625ea13826b', '[\"*\"]', '2024-10-04 08:16:13', NULL, '2024-10-04 07:54:04', '2024-10-04 08:16:13');

-- --------------------------------------------------------

--
-- Table structure for table `property_amenities`
--

CREATE TABLE `property_amenities` (
  `id` varchar(6) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `amenity_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_amenities`
--

INSERT INTO `property_amenities` (`id`, `icon`, `amenity_name`, `created_at`, `updated_at`) VALUES
('118656', 'park2.svg', 'Park', '2024-07-09 14:14:39', '2024-07-09 14:14:44'),
('222959', 'commute.svg', 'Transport Hub', '2024-09-26 16:46:50', '2024-09-26 16:46:50'),
('229549', 'park2.svg', 'Dog Park', '2024-07-09 14:14:28', '2024-07-09 14:35:13'),
('240956', 'convenience-store.svg', 'Convenience Store', '2024-07-09 14:14:49', '2024-07-09 14:34:22'),
('287164', 'toll-road.svg', 'Main Gate', '2024-09-07 15:36:32', '2024-09-07 15:36:32'),
('289134', 'dumbbell.svg', 'Gym', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('310725', 'mall.svg', 'Mall Nearby', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('368978', 'court.svg', 'Basketball Court', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('411393', 'club1.svg', 'Club House', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('475724', 'security1.svg', 'Security', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('638047', 'park2.svg', 'Jogging Path', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('805271', 'swing.svg', 'Playground', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('857432', 'patio1.svg', 'Patio', '2024-09-07 15:34:09', '2024-09-07 15:34:09'),
('870756', 'pool2.svg', 'Pool', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('933276', 'internet1.svg', 'Internet Service', '2024-07-09 14:14:49', '2024-07-09 14:14:49');

-- --------------------------------------------------------

--
-- Table structure for table `property_developers`
--

CREATE TABLE `property_developers` (
  `id` varchar(12) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_developers`
--

INSERT INTO `property_developers` (`id`, `name`, `logo`, `created_at`, `updated_at`) VALUES
('219448016814', 'Antel Holdings Inc.', 'vo0N1pQp4YzTrSBvhnKx3X7V.png', '2024-09-05 00:27:02', '2024-09-27 23:59:06'),
('222649925410', 'Ayala Land Corp.', 'cHsrwt0LYnpTmNULoCmLBewa.jpg', '2024-09-04 23:31:31', '2024-09-29 07:50:39'),
('239273161503', 'Suntrust', 'F0vFHu49HpiUC6zDxpgfiyhR.png', '2024-10-02 23:39:41', '2024-10-02 23:55:07'),
('353532026270', '8990 Holdings, Inc.', 'anE76tfIqaZGunAOPQXOSQwh.jpg', '2024-10-02 08:50:14', '2024-10-02 08:55:10'),
('368891085448', 'Megaworld', '3nozdhPBbEbluxUPxXVxezTs.png', '2024-10-02 09:24:12', '2024-10-02 22:50:10'),
('422213186514', 'CITIHOMES BUILDER & DEVELOPMENT, INC.', 'ZoMkYodxZJfDDtcXCJ7EA2sa.png', '2024-09-26 08:31:42', '2024-09-27 21:23:20'),
('561628953915', 'RCD Land Inc.', 'p0ktM1enWozk6Hg4l36G39Cl.jpg', '2024-09-29 07:58:30', '2024-09-29 07:58:59'),
('702753663483', 'Century Properties Group, Inc.', 'e48UDoei51Yd5vaZKS3SFNaF.jpg', '2024-09-10 20:32:47', '2024-09-30 06:16:59'),
('710823824588', 'Masaito Development Corporation', 'pLvsMahvwwIHJQYsxXpMrEK6.png', '2024-09-27 23:04:48', '2024-09-29 07:21:48');

-- --------------------------------------------------------

--
-- Table structure for table `property_developers_projects`
--

CREATE TABLE `property_developers_projects` (
  `id` varchar(12) NOT NULL,
  `developer` varchar(12) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `province_denormalized` varchar(255) NOT NULL,
  `city_denormalized` varchar(255) NOT NULL,
  `province` bigint(20) UNSIGNED DEFAULT NULL,
  `city` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_developers_projects`
--

INSERT INTO `property_developers_projects` (`id`, `developer`, `project_name`, `province_denormalized`, `city_denormalized`, `province`, `city`, `created_at`, `updated_at`) VALUES
('190458012426', '702753663483', 'Phirst Edition Batulao', 'Batangas', 'Nasugbu', 4, 9, '2024-09-30 06:16:59', '2024-09-30 06:16:59'),
('221528814252', '239273161503', 'Asmara Tower', 'Metro Manila', 'Quezon City', 2, 11, '2024-10-02 09:25:45', '2024-10-03 07:41:48'),
('254626708052', '422213186514', 'KAIA Plus Homes Naic', 'Cavite', 'Naic', 1, 2, '2024-09-26 08:32:13', '2024-09-26 08:32:13'),
('306653115332', '702753663483', 'Phirst Park Homes Sto. Tomas', 'Batangas', 'Sto. Tomas', 4, 8, '2024-09-30 04:24:48', '2024-09-30 04:24:48'),
('339181981908', '702753663483', 'Phirst Park Homes Calamba', 'Laguna', 'Calamba', 3, 5, '2024-09-25 01:45:27', '2024-09-25 10:12:23'),
('475604247025', '561628953915', 'RCD Royale Homes Tuy', 'Batangas', 'Tuy', 4, 7, '2024-09-29 07:58:59', '2024-09-29 07:58:59'),
('483278288693', '702753663483', 'Phirst Park Homes Tanza', 'Cavite', 'Tanza', 1, 1, '2024-09-30 04:05:54', '2024-09-30 04:05:54'),
('591806407704', '710823824588', 'Monteroyale Residences', 'Cavite', 'Imus', 1, 6, '2024-09-29 07:21:48', '2024-09-29 07:21:48'),
('600802873430', '353532026270', 'Urban Deca Homes Ortigas', 'Metro Manila', 'Ortigas', 2, 10, '2024-10-02 08:55:10', '2024-10-02 08:55:10'),
('690709850441', '702753663483', 'Phirst Homes Naic', 'Cavite', 'Naic', 1, 2, '2024-09-25 02:11:50', '2024-09-25 02:11:50'),
('705995689549', '222649925410', 'Amaia Scapes Trece Martires 2', 'Cavite', 'Trece Martires', 1, 3, '2024-09-29 07:50:39', '2024-09-29 07:50:39'),
('760356258083', '239273161503', 'Shanata', 'Metro Manila', 'Quezon City', 2, 11, '2024-10-02 22:50:10', '2024-10-03 07:41:39'),
('872039319391', '710823824588', 'Parksville Residences', 'Cavite', 'Kawit', 1, 4, '2024-09-27 23:09:17', '2024-09-27 23:09:17'),
('924410513876', '239273161503', 'Solana', 'Metro Manila', 'Manila', 2, 12, '2024-10-02 23:55:07', '2024-10-02 23:55:07'),
('979312481522', '219448016814', 'Anyana Bel Air', 'Cavite', 'Tanza', 1, 1, '2024-09-27 23:59:06', '2024-09-27 23:59:06'),
('986123994780', '422213186514', 'Liora Homes Naic', 'Cavite', 'Naic', 1, 2, '2024-09-27 21:23:20', '2024-09-27 21:23:20'),
('999647133826', '710823824588', 'Park Infina', 'Cavite', 'Imus', 1, 6, '2024-09-27 23:37:20', '2024-09-27 23:37:20');

-- --------------------------------------------------------

--
-- Table structure for table `property_financings`
--

CREATE TABLE `property_financings` (
  `id` varchar(6) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `financing_type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_financings`
--

INSERT INTO `property_financings` (`id`, `icon`, `financing_type`, `created_at`, `updated_at`) VALUES
('293791', 'loan2.svg', 'In-house', '2024-07-09 14:14:28', '2024-07-11 14:37:55'),
('381064', 'loan2.svg', 'Pag-ibig', '2024-07-09 14:14:28', '2024-07-11 14:37:46'),
('674521', 'loan2.svg', 'NHMFC', '2024-09-29 16:04:02', '2024-09-29 16:04:02'),
('723404', 'loan2.svg', 'Deferred Cash', '2024-07-09 14:14:28', '2024-07-11 14:38:03'),
('952734', 'bank.svg', 'Bank financing', '2024-07-09 14:14:28', '2024-07-09 14:14:28');

-- --------------------------------------------------------

--
-- Table structure for table `property_types`
--

CREATE TABLE `property_types` (
  `id` varchar(6) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `type_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_types`
--

INSERT INTO `property_types` (`id`, `icon`, `type_name`, `created_at`, `updated_at`) VALUES
('222597', 'house.svg', 'Single-attached', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('323812', 'land.svg', 'Lot only', '2024-09-14 08:26:30', '2024-09-14 08:26:30'),
('537186', 'house.svg', 'Single-detached', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('581828', 'bungalow.svg', 'Bungalow', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('585979', 'duplex.svg', 'Duplex', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('640975', 'rowhouse.svg', 'Town house', '2024-09-07 13:56:46', '2024-09-14 08:21:46'),
('809552', 'rowhouse.svg', 'Row house', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('979367', 'building.svg', 'Condo', '2024-07-09 14:14:39', '2024-07-09 14:14:39');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `province` varchar(255) NOT NULL,
  `lat` decimal(8,6) NOT NULL,
  `long` decimal(9,6) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `province`, `lat`, `long`, `created_at`, `updated_at`) VALUES
(1, 'Cavite', 14.479100, 120.897000, '2024-09-12 15:22:02', '2024-09-12 15:22:02'),
(2, 'Metro Manila', 14.609100, 121.022300, '2024-09-12 15:22:02', '2024-09-12 15:22:02'),
(3, 'Laguna', 14.140700, 121.469200, '2024-09-12 15:22:02', '2024-09-12 15:22:02'),
(4, 'Batangas', 13.945000, 121.131200, '2024-09-12 15:22:02', '2024-09-12 15:22:02'),
(5, 'Bulacan', 14.996800, 121.171000, '2024-09-12 15:22:02', '2024-09-12 15:22:02'),
(6, 'Pampanga', 15.079400, 120.620000, '2024-09-30 22:37:48', '2024-09-30 22:37:48'),
(7, 'Rizal', 14.603700, 121.308400, '2024-09-30 22:37:48', '2024-09-30 22:37:48'),
(8, 'Tarlac', 15.475500, 120.596300, '2024-09-30 22:39:49', '2024-09-30 22:39:49');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties`
--

CREATE TABLE `published_properties` (
  `id` varchar(12) NOT NULL,
  `project` varchar(12) DEFAULT NULL,
  `project_model` text NOT NULL,
  `province_denormalized` text NOT NULL,
  `city_denormalized` text NOT NULL,
  `province` bigint(20) UNSIGNED DEFAULT NULL,
  `city` bigint(20) UNSIGNED DEFAULT NULL,
  `developer` varchar(12) DEFAULT NULL,
  `bedroom` text NOT NULL,
  `bath` text NOT NULL,
  `carport` text NOT NULL,
  `lot_area` double NOT NULL,
  `floor_area` double NOT NULL,
  `property_type` varchar(6) DEFAULT NULL,
  `storey` int(11) NOT NULL,
  `tcp` double NOT NULL,
  `dp_percent` double NOT NULL,
  `dp_term_months` int(11) NOT NULL,
  `loanable_percent` double NOT NULL,
  `loan_interest_rate` double NOT NULL,
  `loan_term_ma` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`loan_term_ma`)),
  `required_income_min` double NOT NULL,
  `required_income_max` double NOT NULL,
  `turnover` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties`
--

INSERT INTO `published_properties` (`id`, `project`, `project_model`, `province_denormalized`, `city_denormalized`, `province`, `city`, `developer`, `bedroom`, `bath`, `carport`, `lot_area`, `floor_area`, `property_type`, `storey`, `tcp`, `dp_percent`, `dp_term_months`, `loanable_percent`, `loan_interest_rate`, `loan_term_ma`, `required_income_min`, `required_income_max`, `turnover`, `status`, `created_at`, `updated_at`) VALUES
('134004931058', '924410513876', 'Solana 3br', 'Metro Manila', 'Manila', 2, 12, '239273161503', '3', '1', '1', 52, 52, '979367', 1, 10676640, 10, 16, 90, 8, '[{\"term\":5,\"ma\":194835.3860839058},{\"term\":10,\"ma\":116583.39422983679},{\"term\":15,\"ma\":91828.3794268037}]', 262366.8, 556672.53, 'RFO', 'active', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('139864441388', '190458012426', 'Christie', 'Batangas', 'Nasugbu', 4, 9, '702753663483', '3', '2', '2', 120, 90, '222597', 2, 7332945, 10, 16, 90, 10, '[{\"term\":5,\"ma\":140223.0692522444},{\"term\":10,\"ma\":87214.86767370887},{\"term\":15,\"ma\":70920.18202384938}]', 202629.09, 400637.34, 'Pre-selling', 'active', '2024-09-29 23:38:39', '2024-09-29 23:38:39'),
('148711411095', '306653115332', 'Calista End', 'Batangas', 'Sto. Tomas', 4, 8, '702753663483', '2', '1', '1', 97, 40, '640975', 2, 3498387.2, 15, 16, 85, 10, '[{\"term\":5,\"ma\":63180.83086736951},{\"term\":10,\"ma\":39296.72794210653},{\"term\":15,\"ma\":31954.77070517887}]', 91299.34, 180516.66, 'Pre-selling', 'active', '2024-09-29 20:46:55', '2024-09-29 20:46:55'),
('154384014315', '306653115332', 'Calista End Corner', 'Batangas', 'Sto. Tomas', 4, 8, '702753663483', '2', '1', '1', 108, 40, '640975', 2, 3829067.46, 15, 16, 85, 10, '[{\"term\":5,\"ma\":69152.91239632026},{\"term\":10,\"ma\":43011.197344763},{\"term\":15,\"ma\":34975.2516528078}]', 99929.29, 197579.75, 'Pre-selling', 'active', '2024-09-29 20:40:44', '2024-09-29 20:40:44'),
('188328300808', '690709850441', 'Calista End Corner', 'Cavite', 'Naic', 1, 2, '702753663483', '2', '1', '1', 87, 40, '640975', 2, 2950024, 10, 16, 90, 10, '[{\"term\":5,\"ma\":56411.36264458319},{\"term\":10,\"ma\":35086.30608769946},{\"term\":15,\"ma\":28530.997989855954}]', 81517.14, 161175.32, 'Pre-selling', 'active', '2024-09-29 19:57:51', '2024-09-29 19:57:51'),
('294071001587', '221528814252', 'Asmara 3BR', 'Metro Manila', 'Quezon City', 2, 11, '239273161503', '3', '2', '1', 57.7, 57.7, '979367', 1, 11846964, 12, 16, 88, 8, '[{\"term\":5,\"ma\":211388.06760248722},{\"term\":10,\"ma\":126488.00054303833},{\"term\":15,\"ma\":99629.86738836294}]', 284656.76, 603965.91, 'RFO', 'active', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('300234873470', '190458012426', 'Charles', 'Batangas', 'Nasugbu', 4, 9, '702753663483', '3', '2', '2', 99, 70, '222597', 2, 5757027, 10, 16, 90, 10, '[{\"term\":5,\"ma\":110087.8290656811},{\"term\":10,\"ma\":68471.58242683794},{\"term\":15,\"ma\":55678.776092854314}]', 159082.22, 314536.65, 'Pre-selling', 'active', '2024-09-29 23:22:09', '2024-09-29 23:22:09'),
('324226682213', '760356258083', 'Shanata 2br', 'Metro Manila', 'Quezon City', 2, 11, '239273161503', '2', '1', '1', 35.6, 35.6, '979367', 1, 6637264, 10, 16, 90, 8, '[{\"term\":5,\"ma\":121121.8036742654},{\"term\":10,\"ma\":72475.49467992772},{\"term\":15,\"ma\":57086.23658265755}]', 163103.53, 346062.3, 'RFO', 'active', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('336666707659', '306653115332', 'Calista Mid', 'Batangas', 'Sto. Tomas', 4, 8, '702753663483', '2', '1', '1', 50, 40, '640975', 2, 2348740, 15, 16, 85, 10, '[{\"term\":5,\"ma\":42418.216225872726},{\"term\":10,\"ma\":26382.95634821191},{\"term\":15,\"ma\":21453.728205409}]', 61296.37, 121194.9, 'Pre-selling', 'active', '2024-09-29 20:35:02', '2024-09-29 20:35:02'),
('341545940530', '999647133826', 'Danna', 'Cavite', 'Imus', 1, 6, '710823824588', '3', '2', '1', 88, 72, '222597', 2, 5874300, 15, 16, 85, 10, '[{\"term\":5,\"ma\":106089.78753529304},{\"term\":10,\"ma\":65984.91126148541},{\"term\":15,\"ma\":53656.69916509877},{\"term\":20,\"ma\":48185.026522095126}]', 137671.5, 303113.68, 'RFO', 'active', '2024-09-28 23:11:42', '2024-09-28 23:11:42'),
('342927025770', '690709850441', 'Calista End', 'Cavite', 'Naic', 1, 2, '702753663483', '2', '1', '1', 77, 40, '640975', 2, 2721991, 10, 16, 90, 10, '[{\"term\":5,\"ma\":52050.838032603},{\"term\":10,\"ma\":32374.18047919716},{\"term\":15,\"ma\":26325.589130598935}]', 75215.97, 148716.68, 'RFO', 'active', '2024-09-29 20:02:02', '2024-09-29 20:02:02'),
('347963672267', '190458012426', 'Cartland', 'Batangas', 'Nasugbu', 4, 9, '702753663483', '3', '2', '1', 88, 54, '222597', 2, 4780562, 10, 16, 90, 10, '[{\"term\":5,\"ma\":91415.53310309132},{\"term\":10,\"ma\":56857.93119080545},{\"term\":15,\"ma\":46234.947516488595}]', 132099.85, 261187.24, 'Pre-selling', 'active', '2024-09-29 22:40:20', '2024-09-29 22:40:20'),
('367379417707', '924410513876', 'Solana 1br', 'Metro Manila', 'Manila', 2, 12, '239273161503', '1', '1', '1', 31.1, 31.1, '979367', 1, 6018472, 10, 16, 90, 8, '[{\"term\":5,\"ma\":109829.62015720083},{\"term\":10,\"ma\":65718.60565095708},{\"term\":15,\"ma\":51764.087801555}]', 147897.39, 313798.91, 'RFO', 'active', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('375689593409', '690709850441', 'Calista Mid', 'Cavite', 'Naic', 1, 2, '702753663483', '2', '1', '1', 44, 40, '640975', 2, 2009416, 10, 16, 90, 10, '[{\"term\":5,\"ma\":38424.73643598417},{\"term\":10,\"ma\":23899.122459180227},{\"term\":15,\"ma\":19433.958454841177}]', 55525.6, 109784.96, 'RFO', 'active', '2024-09-29 19:50:30', '2024-09-29 19:50:30'),
('433046111238', '924410513876', 'Solana 2br', 'Metro Manila', 'Manila', 2, 12, '239273161503', '2', '1', '1', 39.1, 39.1, '979367', 1, 7566632, 8, 16, 92, 8, '[{\"term\":5,\"ma\":141150.09275794314},{\"term\":10,\"ma\":84459.79572976878},{\"term\":15,\"ma\":66525.82230787912}]', 190073.78, 403285.98, 'RFO', 'active', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('436416004652', '872039319391', 'Audrey Expanded', 'Cavite', 'Kawit', 1, 4, '710823824588', '3', '2', '1', 67.5, 63, '640975', 2, 4463980, 10, 16, 90, 8, '[{\"term\":5,\"ma\":81462.0767180343},{\"term\":10,\"ma\":48744.355918538684},{\"term\":15,\"ma\":38394.106122681216},{\"term\":20,\"ma\":33604.66565266908}]', 96013.33, 232748.79, 'RFO, Pre-selling', 'active', '2024-09-27 15:33:57', '2024-09-27 15:33:57'),
('441677547358', '221528814252', 'Asmara 1BR', 'Metro Manila', 'Quezon City', 2, 11, '239273161503', '1', '1', '1', 34.4, 34.4, '979367', 1, 7225376, 15, 16, 85, 8, '[{\"term\":5,\"ma\":124528.88675933615},{\"term\":10,\"ma\":74514.18651339966},{\"term\":15,\"ma\":58692.03789299953}]', 167691.54, 355796.82, 'RFO', 'active', '2024-10-02 09:50:44', '2024-10-02 09:50:44'),
('457886524482', '591806407704', 'Gabby', 'Cavite', 'Imus', 1, 6, '710823824588', '2', '1', '0', 36, 40, '640975', 2, 2577300, 10, 16, 90, 8, '[{\"term\":10,\"ma\":28142.78480388572},{\"term\":15,\"ma\":22167.019052501648},{\"term\":20,\"ma\":19401.812908351745}]', 55433.75, 80407.96, 'RFO', 'active', '2024-09-28 23:36:06', '2024-09-28 23:36:06'),
('493486253684', '254626708052', 'Helena Inner', 'Cavite', 'Naic', 1, 2, '422213186514', '2', '1', '0', 38, 43, '640975', 2, 1493503, 10, 16, 90, 7.5, '[{\"term\":10,\"ma\":15955.330347873361},{\"term\":15,\"ma\":12460.461666310428},{\"term\":20,\"ma\":10828.402662142775}]', 30938.29, 45586.66, 'Pre-selling', 'active', '2024-09-26 00:55:13', '2024-09-26 00:55:13'),
('502049876172', '999647133826', 'Bea', 'Cavite', 'Imus', 1, 6, '710823824588', '3', '2', '1', 77, 60, '222597', 2, 5026400, 15, 16, 85, 8, '[{\"term\":5,\"ma\":86629.67801359088},{\"term\":10,\"ma\":51836.48672276046},{\"term\":15,\"ma\":40829.66191176388},{\"term\":20,\"ma\":35736.40008370445}]', 102104, 247513.37, 'Pre-selling', 'active', '2024-09-27 15:50:23', '2024-09-27 15:50:23'),
('527419886414', '760356258083', 'Shanata 3br', 'Metro Manila', 'Quezon City', 2, 11, '239273161503', '3', '2', '1', 52.8, 52.8, '979367', 1, 10093248, 10, 16, 90, 8, '[{\"term\":5,\"ma\":184189.2084888701},{\"term\":10,\"ma\":110213.0549164823},{\"term\":15,\"ma\":86810.7013997688}]', 248030.58, 526254.88, 'RFO', 'active', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('528609224009', '600802873430', 'BLDG. L LOW ZONE (2nd-5th Floor)', 'Metro Manila', 'Ortigas', 2, 10, '353532026270', '2', '1', '1', 35.57, 35.57, '979367', 1, 3842000, 6, 16, 94, 7, '[{\"term\":5,\"ma\":71511.63250450129},{\"term\":10,\"ma\":41932.34505284752},{\"term\":15,\"ma\":32461.003236181154},{\"term\":20,\"ma\":27999.76600008848},{\"term\":25,\"ma\":25525.189353750447},{\"term\":30,\"ma\":24027.266552897134}]', 68649.33, 204318.95, 'RFO', 'active', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('529357874779', '339181981908', 'Calista Mid', 'Laguna', 'Calamba', 3, 5, '702753663483', '2', '1', '1', 44, 40, '640975', 2, 2008641, 10, 16, 90, 10, '[{\"term\":5,\"ma\":38409.91662229806},{\"term\":10,\"ma\":23889.90494528272},{\"term\":15,\"ma\":19426.46308414516}]', 55504.18, 109742.62, 'Pre-selling', 'active', '2024-09-24 22:27:32', '2024-09-24 22:27:32'),
('547798650785', '190458012426', 'Corin', 'Batangas', 'Nasugbu', 4, 9, '702753663483', '3', '3', '2', 145, 120, '537186', 2, 9615494, 10, 16, 90, 10, '[{\"term\":5,\"ma\":183870.74784503918},{\"term\":10,\"ma\":114362.51558239445},{\"term\":15,\"ma\":92995.73155522531}]', 265702.09, 525344.99, 'Pre-selling', 'active', '2024-09-30 00:11:01', '2024-09-30 00:11:01'),
('611021995297', '872039319391', 'Audrey', 'Cavite', 'Kawit', 1, 4, '710823824588', '2', '1', '1', 55, 45, '640975', 2, 3362700, 10, 16, 90, 8, '[{\"term\":5,\"ma\":61365.087966284336},{\"term\":10,\"ma\":36718.94713848853},{\"term\":15,\"ma\":28922.141375799205},{\"term\":20,\"ma\":25314.27318003896}]', 72326.49, 175328.82, 'Pre-selling', 'active', '2024-09-27 15:28:32', '2024-09-27 15:28:32'),
('640804201556', '760356258083', 'Shanata Studio', 'Metro Manila', 'Quezon City', 2, 11, '239273161503', '1', '1', '1', 26.7, 26.7, '979367', 1, 4977948, 10, 16, 90, 8, '[{\"term\":5,\"ma\":90841.35275569906},{\"term\":10,\"ma\":54356.62100994579},{\"term\":15,\"ma\":42814.677436993166}]', 122327.65, 259546.72, 'RFO', 'active', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('664900464887', '979312481522', 'California', 'Cavite', 'Tanza', 1, 1, '219448016814', '5', '3', '2', 175, 203, '537186', 2, 16670515.48, 15, 16, 85, 8, '[{\"term\":15,\"ma\":135415.3093552495},{\"term\":20,\"ma\":118523.04050510669},{\"term\":25,\"ma\":109365.88097856847}]', 312473.95, 386900.88, 'Pre-selling', 'active', '2024-09-27 16:11:24', '2024-09-27 16:11:24'),
('696119658282', '221528814252', 'Asmara 2BR', 'Metro Manila', 'Quezon City', 2, 11, '239273161503', '2', '1', '1', 39, 39, '979367', 1, 7915440, 15, 16, 85, 8, '[{\"term\":5,\"ma\":136422.09504534016},{\"term\":10,\"ma\":81630.70994445469},{\"term\":15,\"ma\":64297.45724233095}]', 183707.02, 389777.41, 'RFO', 'active', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('760326555541', '591806407704', 'Felicity', 'Cavite', 'Imus', 1, 6, '710823824588', '2', '1', '1', 66, 47.25, '222597', 2, 4453000, 15, 16, 85, 8, '[{\"term\":5,\"ma\":76747.16620136084},{\"term\":10,\"ma\":45923.101101474684},{\"term\":15,\"ma\":36171.90921794615},{\"term\":20,\"ma\":31659.674831437194}]', 90456.21, 219277.62, 'RFO', 'active', '2024-09-28 23:40:52', '2024-09-28 23:40:52'),
('764183063778', '999647133826', 'Era', 'Cavite', 'Imus', 1, 6, '710823824588', '4', '2', '1', 99, 86, '222597', 2, 6663640, 15, 16, 85, 8, '[{\"term\":5,\"ma\":114847.40323063917},{\"term\":10,\"ma\":68721.08992226157},{\"term\":15,\"ma\":54129.03236943066},{\"term\":20,\"ma\":47376.75176145478}]', 135362.15, 328135.44, 'RFO', 'active', '2024-09-28 23:20:47', '2024-09-28 23:20:47'),
('825336963757', '339181981908', 'Calista End', 'Laguna', 'Calamba', 3, 5, '702753663483', '2', '1', '1', 60.5, 40, '640975', 2, 2505648, 15, 16, 85, 10, '[{\"term\":5,\"ma\":45251.972823695054},{\"term\":10,\"ma\":28145.4745131366},{\"term\":15,\"ma\":22886.94839378843}]', 65391.28, 129291.35, 'Pre-selling', 'active', '2024-09-25 02:13:14', '2024-09-25 02:13:14'),
('831797365028', '483278288693', 'Calista Mid', 'Cavite', 'Tanza', 1, 1, '702753663483', '2', '1', '1', 44, 40, '640975', 2, 2321814, 10, 16, 90, 10, '[{\"term\":5,\"ma\":44398.5172823239},{\"term\":10,\"ma\":27614.648790215208},{\"term\":15,\"ma\":22455.2988608972}]', 64158, 126852.91, 'Pre-selling', 'active', '2024-09-29 20:12:44', '2024-09-29 20:12:44'),
('877611940987', '339181981908', 'Unna Regular', 'Laguna', 'Calamba', 3, 5, '702753663483', '3', '2', '1', 88, 54, '222597', 2, 4530000, 10, 16, 90, 10, '[{\"term\":5,\"ma\":86624.201287841},{\"term\":10,\"ma\":53877.85542669435},{\"term\":15,\"ma\":43811.65064895996}]', 125176.14, 247497.72, 'Pre-selling', 'active', '2024-09-25 01:52:52', '2024-09-25 01:52:52'),
('937551251491', '986123994780', 'Amora Inner Unit', 'Cavite', 'Naic', 1, 2, '422213186514', '2', '1', '1', 50, 44, '640975', 2, 2327400, 10, 16, 90, 7.5, '[{\"term\":5,\"ma\":41972.689405308774},{\"term\":10,\"ma\":24863.984773810607},{\"term\":15,\"ma\":19417.757100033203},{\"term\":20,\"ma\":16874.438388052182},{\"term\":25,\"ma\":15479.352604852187}]', 44226.72, 119921.97, 'RFO, Pre-selling', 'active', '2024-09-27 14:50:28', '2024-09-27 14:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties_amenities`
--

CREATE TABLE `published_properties_amenities` (
  `id` varchar(6) NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `amenity` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties_amenities`
--

INSERT INTO `published_properties_amenities` (`id`, `property`, `amenity`, `created_at`, `updated_at`) VALUES
('100722', '324226682213', '368978', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('101119', '825336963757', '287164', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('102374', '375689593409', '870756', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('106584', '134004931058', '870756', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('107399', '547798650785', '805271', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('113170', '367379417707', '805271', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('114199', '831797365028', '475724', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('115195', '375689593409', '638047', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('117368', '502049876172', '411393', '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('117569', '375689593409', '411393', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('125290', '139864441388', '805271', '2024-09-30 07:38:39', '2024-09-30 07:38:39'),
('129250', '831797365028', '411393', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('130940', '367379417707', '870756', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('132581', '529357874779', '475724', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('136717', '148711411095', '870756', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('145993', '347963672267', '870756', '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('155023', '341545940530', '368978', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('160261', '294071001587', '870756', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('162141', '154384014315', '475724', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('163576', '336666707659', '411393', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('163978', '825336963757', '368978', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('164901', '324226682213', '287164', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('165712', '493486253684', '287164', '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('168888', '529357874779', '638047', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('172558', '529357874779', '870756', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('174223', '547798650785', '933276', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('174454', '760326555541', '870756', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('179769', '493486253684', '222959', '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('187035', '336666707659', '475724', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('193653', '831797365028', '368978', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('200395', '877611940987', '411393', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('203315', '527419886414', '368978', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('203562', '294071001587', '289134', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('209997', '324226682213', '475724', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('216322', '154384014315', '638047', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('244084', '664900464887', '118656', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('247680', '433046111238', '289134', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('256129', '294071001587', '475724', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('260859', '640804201556', '287164', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('269321', '527419886414', '870756', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('275630', '877611940987', '933276', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('277117', '148711411095', '287164', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('284659', '825336963757', '638047', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('285488', '937551251491', '870756', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('289421', '937551251491', '287164', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('310112', '134004931058', '287164', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('314405', '547798650785', '870756', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('324625', '300234873470', '229549', '2024-09-30 07:22:09', '2024-09-30 07:22:09'),
('349144', '547798650785', '229549', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('354975', '825336963757', '870756', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('356750', '528609224009', '475724', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('358369', '664900464887', '411393', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('368657', '831797365028', '638047', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('368682', '341545940530', '411393', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('379089', '528609224009', '368978', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('382005', '764183063778', '287164', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('382953', '529357874779', '411393', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('384990', '441677547358', '289134', '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('390065', '154384014315', '870756', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('391533', '139864441388', '933276', '2024-09-30 07:38:39', '2024-09-30 07:38:39'),
('398867', '696119658282', '475724', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('402360', '547798650785', '287164', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('404464', '341545940530', '287164', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('415372', '336666707659', '287164', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('416154', '134004931058', '805271', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('419408', '324226682213', '411393', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('423472', '764183063778', '870756', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('425120', '347963672267', '229549', '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('429448', '188328300808', '638047', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('429522', '188328300808', '368978', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('431272', '188328300808', '870756', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('434028', '148711411095', '475724', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('438995', '760326555541', '805271', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('440777', '696119658282', '287164', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('451606', '139864441388', '475724', '2024-09-30 09:41:29', '2024-09-30 09:41:29'),
('455414', '436416004652', '368978', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('458851', '502049876172', '287164', '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('460167', '294071001587', '805271', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('462455', '436416004652', '805271', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('465429', '528609224009', '287164', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('468782', '877611940987', '287164', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('474294', '529357874779', '368978', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('475316', '134004931058', '289134', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('475843', '300234873470', '933276', '2024-09-30 07:22:09', '2024-09-30 07:22:09'),
('482951', '527419886414', '287164', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('483080', '528609224009', '289134', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('492063', '441677547358', '870756', '2024-10-02 09:50:44', '2024-10-02 09:50:44'),
('495316', '300234873470', '805271', '2024-09-30 07:22:09', '2024-09-30 07:22:09'),
('500992', '877611940987', '638047', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('510009', '342927025770', '287164', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('522229', '457886524482', '475724', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('531279', '760326555541', '368978', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('538757', '611021995297', '475724', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('553908', '148711411095', '638047', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('555321', '148711411095', '368978', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('555533', '831797365028', '870756', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('561946', '640804201556', '475724', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('567122', '188328300808', '287164', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('569443', '433046111238', '805271', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('576220', '937551251491', '411393', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('580998', '342927025770', '475724', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('581992', '502049876172', '368978', '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('584558', '764183063778', '805271', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('589519', '502049876172', '805271', '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('602182', '457886524482', '368978', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('604632', '640804201556', '870756', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('620525', '760326555541', '475724', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('622412', '342927025770', '870756', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('635039', '375689593409', '287164', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('637528', '457886524482', '287164', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('647115', '640804201556', '368978', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('647253', '696119658282', '870756', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('655793', '664900464887', '638047', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('665390', '347963672267', '805271', '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('674299', '877611940987', '870756', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('677921', '139864441388', '287164', '2024-09-30 09:41:25', '2024-09-30 09:41:25'),
('680244', '154384014315', '287164', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('682115', '493486253684', '411393', '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('688853', '527419886414', '411393', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('697126', '664900464887', '870756', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('699680', '342927025770', '411393', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('708181', '436416004652', '411393', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('709840', '375689593409', '368978', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('715399', '341545940530', '475724', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('716009', '336666707659', '368978', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('716335', '937551251491', '368978', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('724079', '342927025770', '638047', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('729691', '336666707659', '638047', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('734580', '696119658282', '289134', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('746255', '441677547358', '475724', '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('750183', '760326555541', '411393', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('751717', '528609224009', '118656', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('754139', '188328300808', '475724', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('759977', '294071001587', '287164', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('778285', '640804201556', '411393', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('780312', '188328300808', '411393', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('783871', '367379417707', '287164', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('785448', '367379417707', '289134', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('789101', '341545940530', '805271', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('792853', '611021995297', '411393', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('794174', '877611940987', '475724', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('797869', '493486253684', '368978', '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('797915', '300234873470', '870756', '2024-09-30 07:22:09', '2024-09-30 07:22:09'),
('799478', '764183063778', '368978', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('800045', '825336963757', '475724', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('801961', '877611940987', '368978', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('813084', '831797365028', '287164', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('814158', '441677547358', '287164', '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('815667', '139864441388', '870756', '2024-09-30 07:38:39', '2024-09-30 07:38:39'),
('818941', '937551251491', '475724', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('825863', '336666707659', '870756', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('831706', '347963672267', '933276', '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('833453', '696119658282', '805271', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('838126', '825336963757', '933276', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('848605', '367379417707', '475724', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('855011', '764183063778', '411393', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('855076', '154384014315', '368978', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('856273', '528609224009', '638047', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('860621', '154384014315', '411393', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('861964', '664900464887', '475724', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('866721', '375689593409', '475724', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('868788', '342927025770', '368978', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('869205', '528609224009', '411393', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('870641', '433046111238', '287164', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('874478', '760326555541', '287164', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('877163', '436416004652', '475724', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('886018', '611021995297', '287164', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('896838', '324226682213', '870756', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('897221', '611021995297', '805271', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('904889', '148711411095', '411393', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('906458', '502049876172', '475724', '2024-09-27 23:50:23', '2024-09-27 23:50:23'),
('906715', '433046111238', '475724', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('907500', '134004931058', '475724', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('913746', '547798650785', '475724', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('915789', '457886524482', '411393', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('922915', '529357874779', '287164', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('938839', '611021995297', '368978', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('939883', '664900464887', '805271', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('940116', '664900464887', '368978', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('940452', '457886524482', '870756', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('946299', '764183063778', '475724', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('950741', '664900464887', '933276', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('957471', '441677547358', '805271', '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('957629', '825336963757', '411393', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('959697', '139864441388', '229549', '2024-09-30 07:38:39', '2024-09-30 07:38:39'),
('971970', '664900464887', '287164', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('976930', '664900464887', '289134', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('984637', '436416004652', '287164', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('986115', '527419886414', '475724', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('995460', '433046111238', '870756', '2024-10-03 00:48:11', '2024-10-03 00:48:11');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties_financings`
--

CREATE TABLE `published_properties_financings` (
  `id` varchar(6) NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `financing` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties_financings`
--

INSERT INTO `published_properties_financings` (`id`, `property`, `financing`, `created_at`, `updated_at`) VALUES
('117129', '336666707659', '293791', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('122215', '527419886414', '952734', '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('127764', '877611940987', '952734', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('150364', '154384014315', '723404', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('154678', '547798650785', '293791', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('158588', '342927025770', '723404', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('180706', '300234873470', '952734', '2024-09-30 07:22:09', '2024-09-30 07:22:09'),
('208864', '611021995297', '952734', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('212341', '529357874779', '293791', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('215070', '139864441388', '952734', '2024-09-30 07:38:39', '2024-09-30 07:38:39'),
('219888', '367379417707', '723404', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('226822', '696119658282', '293791', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('232762', '937551251491', '381064', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('233623', '441677547358', '293791', '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('234584', '696119658282', '952734', '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('248583', '457886524482', '723404', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('265915', '493486253684', '381064', '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('303647', '502049876172', '293791', '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('306272', '760326555541', '723404', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('316321', '877611940987', '293791', '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('324918', '367379417707', '952734', '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('341470', '300234873470', '293791', '2024-09-30 07:22:09', '2024-09-30 07:22:09'),
('366645', '764183063778', '723404', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('378029', '148711411095', '293791', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('379010', '188328300808', '723404', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('391259', '640804201556', '723404', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('391617', '825336963757', '293791', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('391640', '324226682213', '723404', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('401048', '441677547358', '952734', '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('407251', '493486253684', '952734', '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('412097', '342927025770', '952734', '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('433193', '336666707659', '723404', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('435452', '528609224009', '381064', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('444310', '760326555541', '952734', '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('445025', '831797365028', '952734', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('452149', '764183063778', '952734', '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('462957', '139864441388', '293791', '2024-09-30 07:38:39', '2024-09-30 07:38:39'),
('464382', '148711411095', '952734', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('466313', '134004931058', '723404', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('482967', '528609224009', '952734', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('496715', '347963672267', '293791', '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('548967', '528609224009', '293791', '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('569768', '324226682213', '952734', '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('627189', '154384014315', '952734', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('633116', '529357874779', '952734', '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('655267', '375689593409', '952734', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('664787', '825336963757', '952734', '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('671829', '664900464887', '952734', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('674522', '433046111238', '952734', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('683803', '375689593409', '723404', '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('684121', '188328300808', '952734', '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('686280', '436416004652', '293791', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('709644', '640804201556', '952734', '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('749947', '134004931058', '952734', '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('804601', '341545940530', '952734', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('831458', '436416004652', '952734', '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('832972', '502049876172', '952734', '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('835637', '547798650785', '952734', '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('836475', '294071001587', '293791', '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('839466', '831797365028', '723404', '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('851850', '664900464887', '723404', '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('860860', '937551251491', '293791', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('869214', '148711411095', '723404', '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('871136', '347963672267', '952734', '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('880828', '154384014315', '293791', '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('886015', '341545940530', '723404', '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('893497', '611021995297', '293791', '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('896629', '457886524482', '952734', '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('902034', '433046111238', '723404', '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('914156', '336666707659', '952734', '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('976109', '937551251491', '952734', '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('979777', '294071001587', '952734', '2024-10-02 09:44:23', '2024-10-02 09:44:23');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties_photos`
--

CREATE TABLE `published_properties_photos` (
  `id` varchar(6) NOT NULL,
  `filename` longtext NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `position` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties_photos`
--

INSERT INTO `published_properties_photos` (`id`, `filename`, `property`, `position`, `created_at`, `updated_at`) VALUES
('104363', 'gRh4QrywwjJFszkEEEoiUMxD.jpg', '664900464887', 7, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('104979', 'gR6Pi1IfvP3uSBrGhI3rr16E.jpg', '336666707659', 7, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('106844', 'MIfX4wqTT1kVfwd9hQL9FCjP.webp', '436416004652', 5, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('106967', 'foEyQ5SACM09A3Q6KyVDz26N.webp', '457886524482', 5, '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('108990', 'VqTq8yII8tvW3IWLQaF2q8V2.jpg', '457886524482', 3, '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('114343', 'bMVuYdbTkaSYjTQ9li4jCWf1.webp', '502049876172', 6, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('118164', 'c6iL47WmK4aeKLFB5IUuTxts.jpg', '441677547358', 2, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('119895', 'd7IREyfATaHh1INolysWghqq.jpg', '148711411095', 4, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('120883', 'szsnhwCd9jW167PFMHlZgcDe.jpg', '696119658282', 6, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('123264', 'wXmU5fjaMEUpCLEj5rpUKpMY.jpg', '825336963757', 20, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('126244', 'WR53KE7OSgLYFmgllGN85wFS.jpg', '547798650785', 13, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('127225', 'E3aRoirOdrMKjcBFeT6wts1m.jpg', '134004931058', 3, '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('130034', 'Yph937lO8Qs7rWlJgrWOEJs4.webp', '493486253684', 3, '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('132326', 'xrWVJkoiiQESVZWwQVgqrnDq.jpg', '877611940987', 2, '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('132772', 'oiunla9lYU4TZWM2gIMIQjHD.jpg', '937551251491', 2, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('138145', 'gCTPSZRAEmRtdGW45CUzrWVZ.jpg', '825336963757', 5, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('139353', 'RY0NWwklKWR7KOC3C5iSnpFB.jpg', '825336963757', 10, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('146091', 'z26pcYJ6LwLPFEit8oqR7Fm1.JPG', '347963672267', 2, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('146794', 'EGIw18z4SfbcqyD8yHMz93k5.jpg', '342927025770', 7, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('149910', 'ai4MRzX9n7iefD9UafVWF0W5.jpg', '547798650785', 8, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('152569', 'Sq6ozZzGlD1UzUDz4aXJsekl.jpg', '825336963757', 15, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('154969', 'ykpsy9DaXHp7508jb1KThgiM.jpg', '825336963757', 7, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('161838', '61NRzYw17qi6hdgOmNUJ7ceZ.JPG', '375689593409', 6, '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('166084', 'hlUsFNKZGxneNDyj2J8GxZrr.jpg', '441677547358', 4, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('166104', 'OXBZrtB3EkzCg34MGkD3cngj.jpg', '148711411095', 10, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('167718', '3SdrqERXjp19MxSBNpDL10aD.jpg', '611021995297', 3, '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('169089', 'kJY96ZWikKjDNRHWPc6KUwuI.webp', '937551251491', 10, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('169155', '5RIJTGaYYOXpWE4WxvIjRc1b.jpg', '825336963757', 4, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('176214', 'ujV4WQKuSQl2Ooi84ogHDro8.jpg', '336666707659', 9, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('177756', 'Sv2nqlVlHBt3k1iv64XZMQ3z.jpg', '547798650785', 12, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('178180', '5DtxqfKl46fdJQ9Sw1QcDOhl.webp', '764183063778', 4, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('181701', 'IFRQ4C4GvUqBuEfolzGoDvYt.webp', '341545940530', 3, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('189067', 'LAdKdo6QvprcH88A1ZZMjGjq.jpg', '664900464887', 19, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('192549', 'gonqWNPU12KJLyZzEoTq2yO5.webp', '341545940530', 8, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('199754', '3xn6VswlvTsUJK7D1LVSu15U.jpg', '324226682213', 3, '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('199781', 'RyIuiVls866cbdUABOhxKpIy.jpg', '760326555541', 5, '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('203748', 'IfUowWFM3UrIZzn4gWKkavlL.jpg', '664900464887', 11, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('203791', '0fCVvwpWThoyWi09XZ5wqtbn.jpg', '527419886414', 3, '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('204470', 'NSu8JCSemkoX8bBQWYIFSEML.jpg', '336666707659', 10, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('205170', 'LYruFTRAWzTEkyiunCrGHX8N.webp', '502049876172', 9, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('212107', '04vIQoGzLbmXclncl4GR3BWC.jpg', '831797365028', 2, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('218316', 'zS0rfJr82bgvBzaJE0VUELhZ.jpg', '529357874779', 5, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('218582', 'Yt9lFoiLHEoYzt6voGCD6XFn.jpg', '188328300808', 10, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('220981', '6pMKu3j7fB9HWiy5z83xfHzo.jpg', '134004931058', 6, '2024-10-03 00:34:29', '2024-10-03 00:34:29'),
('227369', 'WMgrsh84gMjoOiDikqXEcBwr.jpg', '529357874779', 15, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('230637', 'gWf19zlJMh7fxImB9Nb1zqX5.jpg', '696119658282', 3, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('231984', 'aq2WkdgFHrZ312s2B6QQSbYp.JPG', '347963672267', 14, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('232413', 'lomDvExPuOGwFkBSdQCQqpTw.jpg', '664900464887', 18, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('232476', 'ellKyO9awtGGPlPAisKwJwvg.jpg', '664900464887', 17, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('233872', 'wCyDhFWiYA2X2RDCcSi6NYCr.jpg', '825336963757', 17, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('236357', 'nfNxsgtcQXMxnQ8XQSFfLK6l.jpg', '441677547358', 6, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('236403', '2L1JNVnn6HgUm8aI2OeZaKPa.jpg', '825336963757', 3, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('236868', 'BAbzu7h94cRcfmZ8gILvMYbE.JPG', '139864441388', 4, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('237724', 'maa3ry8J69QshToIekX0ieGW.JPG', '347963672267', 16, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('238929', 'hBsn6IGNXg6XqW118VtVIagV.jpg', '148711411095', 13, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('241290', 'qz1hbBye0Wh9nwgdYpHx1KMK.JPG', '300234873470', 1, '2024-09-30 07:24:32', '2024-09-30 07:24:41'),
('241762', 'IX1qQuCKwo0gOUF1K03FmdZ4.jpg', '134004931058', 5, '2024-10-03 00:34:29', '2024-10-03 00:34:29'),
('243326', 'Ty203MldbGRnEfyqKsPMNQsD.jpg', '188328300808', 3, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('243600', 'b7n4dgzh9U2aPNXqbhd9UTGt.webp', '937551251491', 6, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('246922', 'HBILeeb288j3sO4zu7WOMSAT.JPG', '300234873470', 18, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('248317', 'Ya8r42kOPLPCEkSeYqPiNkqr.jpg', '547798650785', 10, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('251408', 'eP3nQum2pI6FZJ4V2JM39bth.jpg', '154384014315', 12, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('253167', 'ycq3m0wmOAyME5qDxJCf6tCB.jpg', '664900464887', 8, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('256216', 'fppTHAPpnyEtXlv1MqHH3ZC6.jpg', '375689593409', 2, '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('258285', 'X8k1IsaD7JFP67l4AeIIDRlY.jpg', '664900464887', 6, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('261282', 'Ng11u57pHrcCAtXXGzezkpHb.jpg', '134004931058', 2, '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('263657', 'wYDzEdmRxHZsPIYpOZuQn1qR.webp', '528609224009', 6, '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('263728', 'isuNSWkT5jBmUl16lyWNQ7Ij.jpg', '294071001587', 9, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('276264', 'N7gBxZE8xUgT67OG0Rj0eg5s.jpg', '877611940987', 3, '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('276428', 'Br4JVMuXiGS3aLPQKteI9bfI.JPG', '347963672267', 7, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('278721', '23GUsG6tmhjsDvFjbH5xcVnC.JPG', '300234873470', 11, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('281184', 'MtloSJJmHKjVOEohAff7q2M5.webp', '436416004652', 2, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('283965', 'rYJKn5GZLaKS9WYiNf79C7oo.webp', '436416004652', 7, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('285688', 'oNx5V8CijGZ1e235yrTMj5sH.jpg', '831797365028', 10, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('287188', 'g5STHmasU2wkhDUBHZGX7lo3.jpg', '342927025770', 6, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('288629', 'LfltdDaQg1xGxSNkJ6Oy5apb.jpg', '148711411095', 7, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('295401', 'rPvYHt2RtE6VgaPD16ZLO5w5.webp', '502049876172', 5, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('295751', 'afbsAK8rEkEokcZBxqxCDU5k.jpg', '760326555541', 2, '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('298425', '6E56vLS0BInKvv6TYK1fNMUU.jpg', '294071001587', 5, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('298544', 'PtRycS1xSOyKYrU9VMv2tUOK.jpg', '529357874779', 13, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('299083', '6Jpo2QYsXEPzfXc4foitbPuh.jpg', '324226682213', 5, '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('301542', 'hFrDl54ECnFZYOex4qoiFW4h.jpg', '664900464887', 12, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('301838', '3TpGBxMQXYeO2TR93ft8JDgo.JPG', '139864441388', 1, '2024-09-30 07:38:39', '2024-09-30 09:41:44'),
('302777', 'ADp8052FKoIIG9C4p7GS7pbv.jpg', '664900464887', 14, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('307420', 'sprMmx1RuxTL1L71KpOPmXe5.JPG', '347963672267', 4, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('315440', 'uHfvGPJRSX4QS4guAjDHtdBH.jpg', '342927025770', 8, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('315458', '1HhKWWfbLf43cUBelE6BhxUg.jpg', '825336963757', 6, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('331723', 'ekhNUxyqKG7AC9hJ8HhkRjlI.JPG', '139864441388', 9, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('332194', 'VEwCQzWOSsX2LbYEHDm1yZsj.jpg', '457886524482', 2, '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('332306', 'iEbrgVEnxNakyDgUWuKbCW4o.jpg', '696119658282', 2, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('336086', '5xmbqQQVaadqyG1VXom9oqYS.webp', '764183063778', 5, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('341606', 'yuLCh4bWKY5SROlaamkuL9W4.webp', '436416004652', 8, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('342169', 'kdyPls3BJFVM3FAntkkYY2k1.jpg', '294071001587', 8, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('350400', 'ViPJRCroJEmuSJwkfKpnbD3J.jpg', '341545940530', 12, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('357057', 'zSQ94rNzbOSN45nX6DLU1TXf.jpg', '664900464887', 16, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('368633', 'CoLUPdgIXHK1x81bxGB5UdWT.JPG', '139864441388', 8, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('368885', 'ltIkMHxu9U4zVw6U2mNvfVW7.webp', '611021995297', 5, '2024-09-27 23:28:33', '2024-09-27 23:28:33'),
('372956', 'PMff2WpYRWOW3NscnUvb9mYu.webp', '937551251491', 11, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('384259', 'oaz2ARh2xbqqWzOISFQQmGHK.jpg', '527419886414', 7, '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('384610', 'kdlHkpXEb21Cu0cmHbpffk2q.JPG', '300234873470', 3, '2024-09-30 07:24:32', '2024-09-30 07:24:44'),
('385999', 'yfdgHdIMU6o9sukehPMizFh2.PNG', '139864441388', 3, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('386405', 'sD4ThPFE4iUugnDu3AeV7QME.jpg', '664900464887', 20, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('386738', 'ZyguZ27MlY1jQXclR5Bb1Eaz.jpg', '188328300808', 13, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('395467', 's1bBo80wUgZ300XOYlVOiAd6.jpg', '188328300808', 11, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('400897', 'RtvwxT4O9Kpw3rk30t9mfiwF.JPG', '347963672267', 3, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('401555', 'gjCqHo81y1ahf90sGtrIDrHm.jpg', '148711411095', 2, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('403248', 'hDUP0hIXGm2xA6TTsgFtXCLq.jpg', '341545940530', 2, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('404644', 'bC8DhBBHzvFaP78PYrPFqpEJ.jpg', '441677547358', 7, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('408638', 'VYRNjc9nC3YtpDkNwub9fIMl.jpg', '825336963757', 13, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('409296', 'aImEkHTWxSguG8G8VmMXfw32.jpg', '154384014315', 9, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('410861', 'GXblc08oz3Do0UpJxBjSGoQF.webp', '611021995297', 2, '2024-09-27 23:28:32', '2024-09-27 23:28:32'),
('412107', 'zUVN6ponGizFH2cGWTpLjIGw.jpg', '433046111238', 7, '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('417584', 'VZzy8L3Rfr9BJBY4EQ5YANIh.jpg', '493486253684', 4, '2024-09-26 08:55:14', '2024-09-26 08:55:14'),
('420159', '0uvWLPGx1FfAZOQxkWLgUss4.JPG', '347963672267', 12, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('420721', 'qWtvwpo2QvSRMIE9QdfUa3SC.jpg', '547798650785', 5, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('426815', 'PFZuY65nE5UF0MgIr5xHOaYz.jpg', '188328300808', 8, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('427793', 'ZtDVkwfEB9tswSpVdX995bfn.jpg', '188328300808', 14, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('430703', 'iL4NOywbkAV19m9WwgGE1agK.jpg', '825336963757', 12, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('436920', '9wtLftKHqoI0x2zDYiCRnVJS.jpg', '188328300808', 4, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('439733', 'xGyqNrPrePlenopKLrmaND9s.jpg', '825336963757', 11, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('453719', 'szlmVtQgQUxfYtFM7e9MIa9N.jpg', '367379417707', 5, '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('454836', 'Ta0Tr1gsrHjsWzSXws2ILr6V.jpg', '640804201556', 3, '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('457733', 'DDCgVCyaAT6SzaAMdyoUXJnD.jpg', '342927025770', 11, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('458496', 'yD2a3FuqOdIjyBJGcW33kQzG.JPG', '347963672267', 17, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('466240', 'NFGYucgJDfz9Snb4mWY50zGb.jpg', '664900464887', 9, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('467391', 'g4b0MrkKFnJ4oQ8jtXcy6c3B.jpg', '527419886414', 5, '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('467905', '8LerP8DeW6LibcRNtwpexAqs.jpg', '547798650785', 17, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('469655', 'BwPCElEO0rhmCz2AJsG1yo5H.jpg', '336666707659', 14, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('472841', 'ZqYFRHDc9bNJm6LSVnX3tsyY.png', '664900464887', 3, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('476569', 'PtWNdNvsqeD2rYR2YcS66dtk.jpg', '696119658282', 7, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('476803', 'R4vIunOiezpwVzzJwHYM2SPZ.JPG', '347963672267', 15, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('477304', 'ZicN7p093Igg4GHaElMytz6t.jpg', '188328300808', 6, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('478345', 'EDjBM0PHNwFZGy3mhlQk7f7Y.jpg', '877611940987', 7, '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('478982', 'hlWLrwyAuwM2PYIkKb5hdro8.jpg', '877611940987', 5, '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('480781', '9GGPcGHbR6tchorD2S8afWEl.JPG', '347963672267', 10, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('486903', 'kt0JEdaMTOzWHx6dYJsksCtO.jpg', '831797365028', 11, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('489066', 'KPpKBYgXtoZnmZAoJovF3Zt6.PNG', '139864441388', 2, '2024-09-30 07:38:39', '2024-09-30 09:41:44'),
('489999', 'RlHTMmKJY2BXmLYLupXW7tcG.JPG', '375689593409', 5, '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('490158', 'bGFvsIwR5AFOCwh3fzDijSsR.jpg', '825336963757', 16, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('490542', 'lMFC4KSYfLBiob7YLuxdQdwX.jpg', '825336963757', 8, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('495384', 'wo10BYrIO7CcdKl7Gwe8HS6u.webp', '493486253684', 6, '2024-09-26 08:55:14', '2024-09-26 08:55:14'),
('498684', 'Z2FlmL09uvcVnCPf5lleFcYW.jpg', '336666707659', 12, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('505934', '2NFPWOY4gVI3IHodQ7UFJrVA.jpg', '342927025770', 3, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('507677', '9EV9ev00SMNwM77LesM6gRDx.jpg', '529357874779', 4, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('509097', 'icbDeMKy9CpGyuhEj8vUCZJq.JPG', '139864441388', 5, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('509523', 'wcrVgqIbHEz0Sa80S0mydItQ.webp', '341545940530', 5, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('514586', 'FBpwUla2sD3dntLloKFQCjiC.jpg', '188328300808', 9, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('517486', 'ZiqBhu30XdydiRMk3OX3pAhg.webp', '611021995297', 4, '2024-09-27 23:28:33', '2024-09-27 23:28:33'),
('522517', 'adYqPAFcreuhEvORdWDHC7gR.jpg', '547798650785', 6, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('526161', 'LWgeKEoXhQMAgvVl5SJAZt54.jpg', '324226682213', 6, '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('528534', 'X4T5dVtLN9SZmdmW2P8v8fRp.JPG', '300234873470', 12, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('535147', 'L6p8FG3s3acatLWdeUHNzfZI.JPG', '347963672267', 9, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('535346', 'F3sitz20sWIzn1jtYIuSaHWQ.jpg', '831797365028', 9, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('537402', 'xxf18OYJeocdFC6Yx0R6BMdB.webp', '764183063778', 8, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('538295', '8PtjWOici5icUGp3WcWp3H7S.jpg', '547798650785', 4, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('540551', 'hsAyPzy2g7ME56iRDCXLDY7c.webp', '937551251491', 3, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('542811', 'N6PYHN8bftxwZopd2zuWk93P.jpg', '831797365028', 3, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('542812', 'loqMNcmJ0X1cZGEUSta3aazf.jpg', '294071001587', 7, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('543513', 'l4VfxegGAoaliBMPk3a1RDbv.jpg', '547798650785', 7, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('543953', 'LV6BHt47wXKOon5A0vCtqRfu.jpg', '148711411095', 12, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('549334', 'TycqLpkrXMo5FHzOgTLCuWVa.jpg', '154384014315', 5, '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('553055', '3Dg5LmNrJbX8g3n0Oi1hZygA.jpg', '188328300808', 12, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('553861', 'rHnYhJdADuPnCPFkXKWLIfXi.jpg', '154384014315', 2, '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('554189', '1WGF4kmrtIdAPqlVPR7GYy9Q.webp', '436416004652', 4, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('554318', 'PnraC9T87UuAhzf4w0cDuygO.jpg', '148711411095', 6, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('556741', '295rKoAYcvPc1y8dIS1MpJDR.jpg', '336666707659', 6, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('557000', 'ZUmIjejEppdSCesLTPYsx7JW.webp', '937551251491', 7, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('559458', 'DuJXUcorhRL5HBm1ILBFkXk8.jpg', '342927025770', 13, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('563067', 'D6fLZoo8wu1QUpR8x7ESo0HC.webp', '937551251491', 4, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('567523', 'bwp2Ty87XUBrs1cg7v1MQd6p.jpg', '342927025770', 2, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('568099', 'AIxHafNLnWhms6SGwq2SWOdj.png', '664900464887', 4, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('571379', '2bHNiEySJ2BLh8bM0H5Kzfkj.jpg', '188328300808', 5, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('571633', 'DhSP2d6eykzpDDVsEYjOyou5.jpg', '547798650785', 11, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('574103', 'j4rkrcIDvyoqIydfWuYMaMaG.jpg', '529357874779', 7, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('577187', 'zCIrZqgyHKKfWbAevX1pn3mT.jpg', '696119658282', 8, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('581850', 'z2b85jNjqfuHgWr54gJSlMD7.jpg', '825336963757', 19, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('586101', 'NCDEmIZEFqgAkYjlisaDPBtd.jpg', '547798650785', 3, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('599516', 's9HPWfLcSWPRWiWUNUWkdk2P.JPG', '347963672267', 5, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('605946', 'hXCwRS2wBC2OrWt7RCsLk3ra.jpg', '342927025770', 5, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('607109', 'vmQef9jp8BbI1p8hsgFD2e8D.jpg', '664900464887', 15, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('608758', '8rxlX7UKDnIINZrwtffspuH8.JPG', '139864441388', 6, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('610038', '4bL3hwAgTQERrn5jQSwtnZlB.jpg', '433046111238', 4, '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('611142', 'LSZrVVNa90HMZ7Fb4ukcY8il.webp', '760326555541', 4, '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('611591', 'wqLAuaInQ5sopofVybl7FZx0.JPG', '300234873470', 14, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('613831', 'fkOOMZdDv74Ip7pgP0uMV9Wf.webp', '764183063778', 7, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('619875', 'RlDf1s3koIrwNzQIJdjPG8uQ.webp', '937551251491', 9, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('621648', 'mvAhCL2zoQPi7lIDNcy0H3iU.jpg', '294071001587', 4, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('628798', 'isX9jp82m3Ub6lQVgSgnMSxG.jpg', '367379417707', 3, '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('630123', 'xXEklWs7tOdi6Utr4Bitojuz.jpg', '324226682213', 2, '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('633024', 'K0n9o2GczW3fvLQJg9Da4zqH.jpg', '433046111238', 6, '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('648978', 'pEopiODP8uSXE8Y5xxxI2ecI.jpg', '148711411095', 5, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('649932', 'TWRPrpV6tlsHlsnkmEs9UzCO.webp', '764183063778', 2, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('650460', 'aCyZEkTsjLdck6l3vYaD3B7z.jpg', '294071001587', 6, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('652258', 'KydDDqOACYgxwubTFqXXOtRL.webp', '502049876172', 10, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('653247', 'ioPSy3qPMMk6cRSMdRNzOvIq.jpg', '367379417707', 6, '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('655360', 'vnu1BqLLqhGmnuaHZQT3r8hC.jpg', '188328300808', 7, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('657526', '2mUcCRSAJqAvAL3f0gIf9koT.jpg', '148711411095', 8, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('657654', 'ulDqOQb8QGQVCTF0Z4UDZNQ4.jpg', '640804201556', 2, '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('663820', 'LMqUOfJVxsfeuw4DB3dRc8AY.webp', '528609224009', 4, '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('665170', 'VNWHLXupysy8NOJDeiEl4I1i.webp', '611021995297', 6, '2024-09-27 23:28:33', '2024-09-27 23:28:33'),
('673049', 'jdHzOfqPS59NqiA4M18vgZgI.png', '664900464887', 2, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('682362', 'fobrvOHVkiFQPIdppRVaCbhL.jpg', '154384014315', 6, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('682701', 'mr6q2Qsrxdx0ouWd0u4QVlzv.JPG', '640804201556', 5, '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('683611', '0k6ky9B9Mhy5O1VDT7a0KLbP.jpg', '529357874779', 8, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('686936', 'oqmZk6MUV2UJHKhlkU9WaZWa.jpg', '336666707659', 13, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('687011', '4WGOuMrfIRf74noBdj7PsBme.jpg', '433046111238', 2, '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('689692', 'kSCR6yetgkWK4HFGituYglR8.jpg', '188328300808', 2, '2024-09-30 03:57:51', '2024-09-30 03:57:51'),
('693423', '2IRuVWCxJkmFepZNWlLJZiPf.JPG', '139864441388', 7, '2024-09-30 07:38:39', '2024-09-30 09:41:09'),
('695099', 'aYg8QVl3ftdSiqaotyofnVRd.jpg', '342927025770', 4, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('696241', 'IksAVK2Yuuh1JZiH099ZOpfe.jpg', '148711411095', 9, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('704799', 'pgzlJKNwQ2eYl35MoGwPV3N0.webp', '341545940530', 4, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('706748', '3uc7mVZZb31HTxhOoNelaDMs.jpg', '696119658282', 4, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('715696', 'D5VcfjqM3za3PClDWqJi4F9o.jpg', '825336963757', 2, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('717307', 'OmXrkF1qjzH3eWnEZPz7Ai6P.jpg', '294071001587', 2, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('720127', 'Q4IkTfukQnZqLG6tisF96okD.webp', '341545940530', 7, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('721057', 'vTL4Id42dcFDzC3diAybfPgI.jpg', '831797365028', 5, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('722586', 'mEIx9LctDXff7KkQGQkHoGTq.jpg', '825336963757', 18, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('722816', '5FBWKoIYJILIM8SBZ1PiQRpN.jpg', '640804201556', 6, '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('727989', '1I957JiCIFROa36jiE64pEXB.webp', '764183063778', 3, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('730108', 'wtFMfzaJIw7TK6y1916MGEnA.jpg', '154384014315', 3, '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('730871', '2GRTCpTt5p7sX3S6HHvq9orI.jpg', '341545940530', 11, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('730922', 'iIU5xjQlnq0Mof90n992IHIe.webp', '611021995297', 7, '2024-09-27 23:28:33', '2024-09-27 23:28:33'),
('738460', 'duagW6NlHe9SwvKIjGOCldpz.jpg', '547798650785', 2, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('738834', 'fW3HN5165SMFnS6EhUA2xxwO.jpg', '825336963757', 14, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('742557', '6OeFho4gjFvWj0NXfb5okFs7.JPG', '300234873470', 2, '2024-09-30 07:24:32', '2024-09-30 07:24:42'),
('745101', '2bZGqTVTL6HoVoNBn2ZPKdG7.webp', '611021995297', 8, '2024-09-27 23:28:33', '2024-09-27 23:28:33'),
('745303', 'pAPm6gqAmn1NUZxiBfeXjiku.jpg', '342927025770', 12, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('747472', 'mw31NF9KCykLHGfi1PIl55UX.JPG', '300234873470', 15, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('747565', 'ZvQgxK2QzW9O0BYpZmzgOsxd.jpg', '336666707659', 3, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('753440', 'MrNcXrjqGNp8FlYvKGbMm5pY.jpg', '342927025770', 9, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('756008', '8FP28SY8ZNNay2sjP2EYPHtV.jpg', '547798650785', 16, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('756180', '2kEEX5mRuXrdopt310Si9H9n.jpg', '441677547358', 3, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('760701', '6B1GpUj6pZMrL53NS3eTCBzs.jpg', '529357874779', 3, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('770860', 'B6hFe8hELyxPUgap1dYY3AV3.jpg', '529357874779', 12, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('771000', '26LVGvTEDLPMXTGibzD77NGN.jpg', '336666707659', 4, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('776407', 'KOy86yGMKQH1B3WubEP0aSef.jpg', '529357874779', 14, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('779268', 'tGNFGrudTxLprEu7Vnv6ouHI.jpg', '336666707659', 5, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('781384', 'Eek7ftXzZtVCpzcLjXTHp1vE.webp', '502049876172', 7, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('782747', 'MoODbXEVTDqCEn1NAv1i2bW9.jpg', '294071001587', 3, '2024-10-02 09:44:23', '2024-10-02 09:44:23'),
('783168', 'DxNgaqF2ogLjG0hL4C0pmANK.webp', '937551251491', 5, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('784927', 'VjynMkkygHdf4ksCx2opfLyn.jpg', '664900464887', 5, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('790507', 'ownZrEwqevxOKDuieT49lt5e.JPG', '375689593409', 4, '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('794904', 'N5eMVT012W5mRuzekt2gbLfv.jpg', '527419886414', 4, '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('796675', 'AfPVq7cTBD91Me88vInrHkGa.jpg', '154384014315', 13, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('798130', 'qmmbPlOqp7AUV7p6DJ9776FZ.webp', '502049876172', 4, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('800773', 'Vzwc4Ws4aLCbNz4DBNnTttz0.jpg', '547798650785', 14, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('801859', '2v2cRAUhLfS3RvM0opm599nw.jpg', '696119658282', 5, '2024-10-02 09:35:59', '2024-10-02 09:35:59'),
('802696', 'kcl2QVhPTTIJKd37ymzxQhte.jpg', '148711411095', 14, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('803617', 'BiJnKnSLSLmyQTCCe4wGW8jj.jpg', '457886524482', 6, '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('804347', 'lL13DGod8DaTkVzryUeGvPA1.jpg', '529357874779', 6, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('805250', 'PkH288CT6BQjkUPAdm2yTwlQ.jpg', '154384014315', 10, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('805487', 'QsehuFmEGjoKU3KkLn5sXG7P.JPG', '347963672267', 8, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('808394', 'fxjP4BdL7Cybo6jDriiUckHg.jpg', '154384014315', 7, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('812331', '6XvTaEwa9E9y97MrxMsedKuy.jpg', '433046111238', 5, '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('812682', 'F7lZQ20gQDESd7AyU8Bpbtjw.jpg', '529357874779', 10, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('813903', 'aEOjHWigne58z9wBcVPTr4kr.jpg', '831797365028', 6, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('818858', 'oRvAIT3bPN9qtbJhHDzghU6w.jpg', '154384014315', 8, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('820367', 'wyw47Uw0Cm6ILKV5rCo1KiMX.webp', '528609224009', 3, '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('823816', 'hUTt3rDUYlKcflBEC8d9nUeN.jpg', '324226682213', 4, '2024-10-02 23:33:30', '2024-10-02 23:33:30'),
('826355', 'dtrwMIKydvDTmXNv8rWFopVY.webp', '764183063778', 6, '2024-09-29 07:20:47', '2024-09-29 07:20:47'),
('827667', 'oWEviAVKLBaYJoeORxfRtF7N.jpg', '336666707659', 11, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('828787', '84jHjlRDBiO0IJPlK3oL3WJJ.jpg', '831797365028', 12, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('829738', 'CyLEBqFH3zq0ybwWgXHwpw6H.JPG', '300234873470', 16, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('830767', 'blQR5sBpvil3IaUcSl6UFbNw.jpg', '433046111238', 3, '2024-10-03 00:48:11', '2024-10-03 00:48:11'),
('832470', '1rGFFrVMCc7yA4pQdvNzu9vm.JPG', '300234873470', 17, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('844829', 'u5kPwNSIG2TJoGttIEvh5mSs.jpg', '436416004652', 3, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('846898', 'bDojW61tFfp08ITvwAv2NK3o.webp', '502049876172', 11, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('847123', '0xKnNgcxVZayQ9LupkfwH8HF.jpg', '877611940987', 4, '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('848600', 'bHGFuOSTRIZNYweRRFmEWoZk.JPG', '347963672267', 6, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('849368', '9SHITr2YZWqvrNtO6DlWaYjj.jpg', '664900464887', 13, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('850445', 'Te3Wec2i7cajlkCf8pD2o77B.jpg', '831797365028', 4, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('850535', 'GrvPdM0fgY86NhDnt3DzfQtR.JPG', '300234873470', 10, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('850601', 'WNYa2IGs7ZbED2AkdgZcWEmT.jpg', '148711411095', 11, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('865123', 'ubPDTvPIpUs9GPShjA6YEOFI.webp', '341545940530', 9, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('866195', '4B3km4BXE8oWyXvRbIMkzulq.jpg', '457886524482', 4, '2024-09-29 07:36:06', '2024-09-29 07:36:06'),
('866371', 'sPSBoUryfg1mIPrCNwzMkReq.JPG', '347963672267', 11, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('866612', 'g78xtDrxdaqKFKzZPZEgJyji.jpg', '154384014315', 14, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('870113', 'Nk3Y3Yiwso68InPE3n7beWG7.jpg', '336666707659', 8, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('870466', 'vdaqq1Qe06XMrkPJHb5UeBk4.jpg', '134004931058', 4, '2024-10-03 00:34:28', '2024-10-03 00:34:28'),
('873246', 'wDtIIxOh7h0cLiWYIkCYDkLM.jpg', '527419886414', 6, '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('874925', '4jGBwQrZwi6cdH2Hzbs1xsog.jpg', '547798650785', 9, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('877405', 'uwLae8TeZMF0K2W80sJz6YW2.jpg', '441677547358', 5, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('877511', 'Wau076ixfxYumq2neoJKWIl9.webp', '528609224009', 5, '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('881607', 'WLoyPci5soEDxARVrGbolFlA.jpg', '154384014315', 4, '2024-09-30 04:40:44', '2024-09-30 04:40:44'),
('881908', 'qMMdqFcnVsrqrH84ojCRVTwh.jpg', '529357874779', 2, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('883842', '0er9i7yKWzUrHgbiUKBQt7FN.jpg', '877611940987', 6, '2024-09-25 09:52:52', '2024-09-25 09:52:52'),
('884044', 'Nf3rJxVB2Jt4GCcpuhyyee1W.jpg', '760326555541', 3, '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('891074', 'sRIqeG1tKKI3MGFX6pTDnzcK.jpg', '664900464887', 10, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('893164', 'xvUtagSh0VCkPhPquICfgSJd.jpg', '529357874779', 11, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('898558', 'g26gJhBdxFT3p7ajf0Z6K9Tk.webp', '502049876172', 2, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('900815', 'TCOj728AJQRCOCNx3udnOFsH.webp', '493486253684', 5, '2024-09-26 08:55:14', '2024-09-26 08:55:14'),
('904311', 'Dgprb8OWweO3dIBThuQJStHh.webp', '502049876172', 3, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('906208', 'XILHczfkKnRLlonR9st98UvH.JPG', '300234873470', 13, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('907624', 'QJzW7Rg8e4yWVOcrMJj1WsvB.JPG', '375689593409', 3, '2024-09-30 03:50:30', '2024-09-30 03:50:30'),
('915307', 'Mki1v0do6wQ6QLMWHDJpmA2D.jpg', '831797365028', 7, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('916212', 'U67srENfbnHPYjV3H4ACDuiz.jpg', '760326555541', 6, '2024-09-29 07:40:52', '2024-09-29 07:40:52'),
('918395', 'PkVdZwJ0nDIhC2rJ6O9xWhMk.jpg', '529357874779', 9, '2024-09-25 06:27:32', '2024-09-25 06:27:32'),
('919085', '1y6hhSoWo4lpMKNDsX2tTym6.webp', '937551251491', 12, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('924330', 'ezlZb4uGM2rDWxNhZADszVV6.jpg', '527419886414', 2, '2024-10-02 23:16:24', '2024-10-02 23:16:24'),
('927500', 'HZidqbVHLj6N3QEvUZHyctSU.jpg', '640804201556', 4, '2024-10-02 23:26:58', '2024-10-02 23:26:58'),
('928023', 'B4pdAp4hY6PDPwxliuvecX6p.jpg', '825336963757', 9, '2024-09-25 10:13:14', '2024-09-25 10:13:14'),
('928258', '7Ij1m22ycSPxK9J5ICuSAkQK.JPG', '300234873470', 9, '2024-09-30 07:25:11', '2024-09-30 07:25:11'),
('942009', 'lfID0RWLEKmFyurM98tY4v3o.jpg', '148711411095', 3, '2024-09-30 04:46:55', '2024-09-30 04:46:55'),
('943301', 'iOBdYb82T2ZNGooo4c0bX7c6.jpg', '367379417707', 2, '2024-10-03 00:59:31', '2024-10-03 00:59:31'),
('948752', 'V5msL8nV7k1upyIIxRvCg61z.webp', '436416004652', 6, '2024-09-27 23:33:57', '2024-09-27 23:33:57'),
('950213', 'EYTku7QYhC5mQj1oPh6pjCSr.webp', '937551251491', 8, '2024-09-27 22:50:28', '2024-09-27 22:50:28'),
('952521', 'JJmNzWLV2sWvYHT7Ycx21Dvw.jpg', '154384014315', 11, '2024-09-30 04:40:45', '2024-09-30 04:40:45'),
('955825', '2sHEMyaqgAatCUdCdT1AmYIS.jpg', '664900464887', 21, '2024-09-28 00:11:24', '2024-09-28 00:11:24'),
('956422', 'hTfu7A1BjDOPV2io8nxcBAGh.webp', '528609224009', 2, '2024-10-02 09:09:24', '2024-10-02 09:09:24'),
('962270', 'U7adItft6Y83SstZDfhqRmSL.jpg', '441677547358', 8, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('964103', 'gWPXIo96b9rKsvsLlpsim3fb.jpg', '336666707659', 2, '2024-09-30 04:35:02', '2024-09-30 04:35:02'),
('971813', '7Y7L4fHyDPDHseJ6ZQYpFKLe.jpg', '547798650785', 15, '2024-09-30 08:11:01', '2024-09-30 08:11:01'),
('975769', 'AGuyWyy7u5ZUsrkm15XAwSRV.jpg', '831797365028', 8, '2024-09-30 04:12:44', '2024-09-30 04:12:44'),
('976190', 'YOGhJaxELYhEf3wKKNkaDdU0.webp', '502049876172', 8, '2024-09-27 23:50:24', '2024-09-27 23:50:24'),
('986543', 'K9yBcEP6bxM7MuEqr1l5Ktzj.jpg', '493486253684', 2, '2024-09-26 08:55:13', '2024-09-26 08:55:13'),
('986619', '4K3JsGa4jpqJSEMwN0Z6D7Tf.jpg', '342927025770', 10, '2024-09-30 04:02:02', '2024-09-30 04:02:02'),
('995438', 'FRqlW85PyDukvgJt0Qd1boM7.jpg', '341545940530', 10, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('995577', 'zRyLupNMorD0dZ37XhHKTGUH.webp', '341545940530', 6, '2024-09-29 07:11:42', '2024-09-29 07:11:42'),
('997528', '4QHKunuICctV7m20C1tORqOs.jpg', '441677547358', 9, '2024-10-02 09:50:45', '2024-10-02 09:50:45'),
('998089', 'OvBJ7VUF2kkgt54bXicdmsjb.JPG', '347963672267', 13, '2024-09-30 06:40:20', '2024-09-30 06:40:20'),
('998738', 'kiJhJkxbHmiifJCMhyHMOy4r.jpg', '367379417707', 4, '2024-10-03 00:59:31', '2024-10-03 00:59:31');

-- --------------------------------------------------------

--
-- Table structure for table `published_property_units`
--

CREATE TABLE `published_property_units` (
  `id` varchar(6) NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `unit_code` varchar(255) DEFAULT NULL,
  `lot_area` double DEFAULT NULL,
  `tcp` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` varchar(12) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `logo`, `tag`, `created_at`, `updated_at`) VALUES
('149539613185', 'Amity', 'ebMMeZZMd5t0gCkZKsCM3kb4.jpg', 'AM', '2024-09-04 22:14:13', '2024-09-04 22:14:13'),
('926645097023', 'Abnegation', 'vCctnkw7GfRMMeBu62OSGEnN.png', 'AB', '2024-08-25 22:05:49', '2024-09-05 06:59:54');

-- --------------------------------------------------------

--
-- Table structure for table `user_admins`
--

CREATE TABLE `user_admins` (
  `id` varchar(6) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bdate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pfp` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_admins`
--

INSERT INTO `user_admins` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `pfp`, `created_at`, `updated_at`) VALUES
('100000', 'Lucy', NULL, 'Domingo', 'Female', '1981-06-30', 'lucydomigo@gmail.com', 'mslucy123', '9123456789', '$2y$12$0yvf43PEvEq.Xc7/F/s3ouzn1t8yyfI9wOR/zk4.tGAs120GjGQai', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_agents`
--

CREATE TABLE `user_agents` (
  `id` varchar(6) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bdate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pfp` varchar(255) DEFAULT NULL,
  `team` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `account_status` varchar(255) NOT NULL DEFAULT 'Active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_agents`
--

INSERT INTO `user_agents` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `pfp`, `team`, `position`, `account_status`, `created_at`, `updated_at`) VALUES
('735793', 'Melissa', 'Sevilla', 'Diawan', 'Female', '1973-06-03', 'melissadiawan.bddrealty@gmail.com', 'melissad760', '936 691 5861', '$2y$12$XruMyeimtKlAKGIdSgfsc.9.9qvJd7mH16vDjEPM6UhXVyEAiGDq6', NULL, '926645097023', 'Team Leader', 'Active', '2024-08-19 13:53:52', '2024-08-25 23:51:02'),
('963234', 'Faith Enn', 'Lagare', 'Deliman', 'Female', '2001-03-11', 'faithdeliman@gmail.com', 'faithd619', '961 511 6627', '$2y$12$AM/YW6WE0kH6sSKQ77qxOeKJUmql3EcnsFjsWjCLAJz5By0FxQzTC', NULL, '926645097023', 'Agent', 'Active', '2024-08-19 15:26:45', '2024-08-26 00:02:11');

-- --------------------------------------------------------

--
-- Table structure for table `user_clients`
--

CREATE TABLE `user_clients` (
  `id` varchar(6) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bdate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pfp` varchar(255) DEFAULT NULL,
  `monthly_income` varchar(255) DEFAULT NULL,
  `employment_type` varchar(6) DEFAULT NULL,
  `work` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_clients`
--

INSERT INTO `user_clients` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `pfp`, `monthly_income`, `employment_type`, `work`, `created_at`, `updated_at`) VALUES
('101838', 'Gregorio', NULL, 'Esteban', 'Male', '1980-06-19', 'gregesteban@gmail.com', 'greg123', '996 819 8123', '$2y$12$FnXbTfghTptgfxx9WEVFLufS21Bcf1z3Ux3oXv5AfqiyQNFyJ7Yxu', NULL, NULL, NULL, NULL, '2024-10-02 07:20:40', '2024-10-02 07:20:40'),
('110774', 'Alexa', NULL, 'Garcia', 'Female', '1993-12-19', 'alexagarcia@gmail.com', 'alexa123', '938 384 5763', '$2y$12$HJ960jJ.tA4VkCiHSdhLH.ZTtn6BORjSKeNb9HdbOWn8r/VSFlQ86', NULL, NULL, NULL, NULL, '2024-10-01 06:46:26', '2024-10-01 06:46:26'),
('162524', 'Jericho', NULL, 'Bautista', 'Male', '1982-07-31', 'echobautista@gmail.com', 'echo123', '928 827 3641', '$2y$12$NJxivcqkTgWYxtHJEjDUf.JL6SeJJgOwwB6pGJsSiiIXFYnXj5Ud6', NULL, NULL, NULL, NULL, '2024-10-02 07:13:17', '2024-10-02 07:13:17'),
('163456', 'Michelle', NULL, 'Ramos', 'Female', '2000-07-30', 'michelleramos@gmail.com', 'chelle123', '939 826 7342', '$2y$12$STiiOzEz32axhkKjEvhH.OjqSqnd49JDFdd040Cyr63LgGquCNekC', NULL, NULL, NULL, NULL, '2024-10-02 07:07:58', '2024-10-02 07:07:58'),
('203958', 'Leona', NULL, 'Garcia', 'Female', '1983-01-23', 'leonagarcia@gmail.com', 'leona', '997 876 3453', '$2y$12$C.3NV.LZq4s84YOYJXE7UOOpZ8316qEzBrVlW1RuRGF57HzehHxCq', NULL, NULL, NULL, NULL, '2024-10-02 07:15:48', '2024-10-02 07:15:48'),
('207893', 'Alex', NULL, 'Dela Cruz', 'Male', '1989-06-24', 'alexdcruz@gmail.com', 'alex123', '927 293 8421', '$2y$12$9PW8bA1dVVleDyDiSuypwOWKgM6HJxK7wcyVgODGCIPBTBg3FrHi2', NULL, NULL, NULL, NULL, '2024-10-01 06:51:03', '2024-10-01 06:51:03'),
('237902', 'Maria', NULL, 'Gracia', 'Female', '1989-07-04', 'magracia@gmail.com', 'magracia', '996 892 3422', '$2y$12$J4708GCWsesxrrBdWB47beZ/5hBNTMJAONF8YO/bd8WPqH2q5eh0K', NULL, NULL, NULL, NULL, '2024-10-02 07:18:45', '2024-10-02 07:18:45'),
('258904', 'Jacob', NULL, 'Sanchez', 'Male', '1983-10-19', 'jacobsanchez@gmail.com', 'jacob123', '929 873 4231', '$2y$12$WfPejRsB0yJ9F0YZfaqm2O4vdSYlGXKsPMz1uTfQrCYHBKBe3PifC', NULL, NULL, NULL, NULL, '2024-10-02 07:36:35', '2024-10-02 07:36:35'),
('353475', 'Enzo', NULL, 'Sanchez', 'Male', '1998-05-13', 'enzosan@gmail.com', 'enzosanchez', '988 874 6544', '$2y$12$MxU4QrFQJFXXequswyHf8.z71ei.xzvsSywPzVf58afZ/lNC8vpWa', NULL, NULL, NULL, NULL, '2024-10-02 07:38:27', '2024-10-02 07:38:27'),
('386733', 'Edward', NULL, 'Cruz', 'Male', '1990-08-15', 'edwardcruz@gmail.com', 'edward123', '939 348 7123', '$2y$12$XG7QOLpfvkqqU9Xu.GD7DuDR4XwPmCPDNhhIErIkPwhoJBnW.4GYu', NULL, NULL, NULL, NULL, '2024-10-01 06:39:35', '2024-10-01 06:39:35'),
('396659', 'Louis Miguel', NULL, 'Erna', 'Male', '2002-11-26', 'miguelerna33@gmail.com', 'migol123', '929 393 4533', '$2y$12$eoWApXB4a9QfEO8/hm4sYe1gHZjg2GIQc9/7KF90Vy7n8lCOfQPRe', NULL, NULL, NULL, NULL, '2024-10-01 06:06:49', '2024-10-01 06:06:49'),
('399024', 'Shekinah Glory', NULL, 'Simolata', 'Female', '2003-08-02', 'ssimolata.k11936936@umak.edu.ph', 'shek123', '905 528 7840', '$2y$12$6hYwdV9iOP9LlWRrkGUsFeynnuS0HB.wH86fC5L9blxtxWPqbQtAC', NULL, NULL, NULL, NULL, '2024-10-01 06:04:54', '2024-10-01 06:04:54'),
('562780', 'Glory', NULL, 'Bautista', 'Female', '1998-07-03', 'gloryb@gmail.com', 'gloryb123', '976 987 3498', '$2y$12$xVKid1Mp8BYAkokG1nxsZuOcOtFRateZfLNaA8puRK5kJbxdGCRRG', NULL, NULL, NULL, NULL, '2024-10-02 07:30:55', '2024-10-02 07:30:55'),
('655676', 'Mark', NULL, 'Santamena', 'Male', '1998-10-22', 'marksantamena@gmail.com', 'markmena', '996 790 2384', '$2y$12$oxapQKVPb.RZ9xGSNJb12.dDeZbQ.JopIVjYEhehAP8EO7kmi9IiW', NULL, NULL, NULL, NULL, '2024-10-02 08:33:32', '2024-10-02 08:33:32'),
('698882', 'Criselda', NULL, 'Lopez', 'Female', '1990-06-26', 'ciseldalopez@gmail.com', 'criselda123', '977 982 3754', '$2y$12$eLBovgnICNqWVkHG8KIpP.SenLQyNocIFZOk8dLwuh.tDwLP7gbAy', NULL, NULL, NULL, NULL, '2024-10-02 07:28:52', '2024-10-02 07:28:52'),
('773892', 'Princess', NULL, 'Santos', 'Female', '2000-02-07', 'princesssantos@gmail.com', 'princess123', '936 934 5812', '$2y$12$.2NGmB/KEzSuN40WZaYGxODw.v/YxHkza0/92St2/IvYjDtgBTAuy', NULL, NULL, NULL, NULL, '2024-10-01 06:36:04', '2024-10-01 06:36:04'),
('807791', 'Joselito', NULL, 'Fernandez', 'Male', '1985-06-24', 'joselitofernandez@gmail.com', 'josefer123', '995 898 3475', '$2y$12$fugKWRTkyCt/Dlg7ptKZx.WK4Kwz8ZkNvz5MFk7bvXwmgmh/ru8lC', NULL, NULL, NULL, NULL, '2024-10-02 07:22:40', '2024-10-02 07:22:40'),
('824907', 'Airich Jay', 'Sevilla', 'Diawan', 'Male', '2003-04-23', 'airichjaydiawan@gmail.com', 'adiawan', '967 764 4695', '$2y$12$0yvf43PEvEq.Xc7/F/s3ouzn1t8yyfI9wOR/zk4.tGAs120GjGQai', 'gKX59iILLQTD0lwQ0MtDmUxF.jpg', '20000', '478189', 'Entry-level Web Developer', '2024-06-22 18:41:41', '2024-09-12 09:55:09'),
('834004', 'Rico', NULL, 'De Guzman', 'Male', '1998-09-24', 'ricodeguz@gmail.com', 'ricoguz', '929 983 6458', '$2y$12$6ZvLzJNFFsJ0g9MI5RGDKO9j.r46NHt/ktjjBnfNqot3KGSVmM.8e', NULL, NULL, NULL, NULL, '2024-10-02 07:34:39', '2024-10-02 07:34:39'),
('839390', 'Violet', NULL, 'Reyes', 'Female', '1995-06-12', 'violetreyes@gmail.com', 'violet123', '939 983 7459', '$2y$12$fxyDbO/U3DgQVZF.t6rG6uozUMxlUMmAe3d4sjMa3ppcK7coXmRri', NULL, NULL, NULL, NULL, '2024-10-02 07:11:19', '2024-10-02 07:11:19'),
('903836', 'Joshua', NULL, 'Ramos', 'Male', '1998-06-26', 'joshRamos@gmail.com', 'joshua123', '927 938 4512', '$2y$12$/LCBLRgVYFeua14Itnbbm.J9MLP1S.IAIulD54RF2O3/qj8QRGqx6', NULL, NULL, NULL, NULL, '2024-10-01 06:42:32', '2024-10-01 06:42:32'),
('926562', 'Zikha', NULL, 'Flores', 'Female', '1998-05-07', 'zikhaflores@gmail.com', 'zikha123', '929 983 7458', '$2y$12$48aQfGhzvvxXWSkvfaK3/O66IiJbN22/CI9tab6F2dAX31oJLGT7G', NULL, NULL, NULL, NULL, '2024-10-02 06:59:20', '2024-10-02 06:59:20'),
('942559', 'Julius', NULL, 'Castillo', 'Male', '1987-08-14', 'juliustillo@gmail.com', 'juliustillo', '967 098 3453', '$2y$12$No6qQzsqy3F5//L61M9Tsec.CA8AdnDjNYaJcULIr..0TIGwYCf22', NULL, NULL, NULL, NULL, '2024-10-02 07:32:37', '2024-10-02 07:32:37'),
('960055', 'John', NULL, 'Dela cruz', 'Male', '2000-07-30', 'jdcruz@gmail.com', 'jdcruz', '927 934 9123', '$2y$12$KIMgkdHCK3BW8SIyaQ/3yu6LzRXTOKPORoIxabEWgbEghrA1yppc2', NULL, NULL, NULL, NULL, '2024-10-01 06:31:36', '2024-10-01 06:31:36'),
('986752', 'Giovani', NULL, 'Rossi', 'Male', '1981-10-29', 'giovanirossi@gmail.com', 'giovani123', '927 837 6512', '$2y$12$Dj7ELMqjkOZIxO7oA3iAg.m2kPZwUIIFU1vT47xatP0k6/7OJ.XlG', NULL, NULL, NULL, NULL, '2024-10-02 07:24:38', '2024-10-02 07:24:38');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` varchar(12) NOT NULL,
  `client` varchar(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`id`, `client`, `name`, `created_at`, `updated_at`) VALUES
('464326309945', '824907', 'Wishlist 1', '2024-10-04 07:54:18', '2024-10-04 07:54:18'),
('918078844222', '396659', 'Wishlist 1', '2024-10-02 04:19:20', '2024-10-02 04:19:20');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist_properties`
--

CREATE TABLE `wishlist_properties` (
  `id` varchar(6) NOT NULL,
  `wishlist` varchar(12) DEFAULT NULL,
  `property` varchar(12) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishlist_properties`
--

INSERT INTO `wishlist_properties` (`id`, `wishlist`, `property`, `created_at`, `updated_at`) VALUES
('593013', '918078844222', '188328300808', '2024-10-02 04:19:20', '2024-10-02 04:19:20'),
('953028', '464326309945', '139864441388', '2024-10-04 07:54:18', '2024-10-04 07:54:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_province_foreign` (`province`);

--
-- Indexes for table `client_prefered_locations`
--
ALTER TABLE `client_prefered_locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_prefered_locations_client_foreign` (`client`),
  ADD KEY `client_prefered_locations_province_foreign` (`province`);

--
-- Indexes for table `client_property_views`
--
ALTER TABLE `client_property_views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_property_views_client_foreign` (`client`),
  ADD KEY `client_property_views_property_foreign` (`property`);

--
-- Indexes for table `employment_types`
--
ALTER TABLE `employment_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `financing_requirements`
--
ALTER TABLE `financing_requirements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `financing_requirements_financing_foreign` (`financing`),
  ADD KEY `financing_requirements_employment_type_foreign` (`employment_type`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ongoing_transactions`
--
ALTER TABLE `ongoing_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ongoing_transactions_client_foreign` (`client`),
  ADD KEY `ongoing_transactions_agent_foreign` (`agent`),
  ADD KEY `ongoing_transactions_property_foreign` (`property`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `property_amenities`
--
ALTER TABLE `property_amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_developers`
--
ALTER TABLE `property_developers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_developers_projects`
--
ALTER TABLE `property_developers_projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_developers_projects_developer_foreign` (`developer`),
  ADD KEY `property_developers_projects_province_foreign` (`province`),
  ADD KEY `property_developers_projects_city_foreign` (`city`);

--
-- Indexes for table `property_financings`
--
ALTER TABLE `property_financings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_types`
--
ALTER TABLE `property_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `published_properties`
--
ALTER TABLE `published_properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `published_properties_property_type_foreign` (`property_type`),
  ADD KEY `published_properties_project_foreign` (`project`),
  ADD KEY `published_properties_developer_foreign` (`developer`),
  ADD KEY `published_properties_province_foreign` (`province`),
  ADD KEY `published_properties_city_foreign` (`city`);

--
-- Indexes for table `published_properties_amenities`
--
ALTER TABLE `published_properties_amenities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `published_properties_amenities_property_foreign` (`property`),
  ADD KEY `published_properties_amenities_amenity_foreign` (`amenity`);

--
-- Indexes for table `published_properties_financings`
--
ALTER TABLE `published_properties_financings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `published_properties_financings_property_foreign` (`property`),
  ADD KEY `published_properties_financings_financing_foreign` (`financing`);

--
-- Indexes for table `published_properties_photos`
--
ALTER TABLE `published_properties_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `published_properties_photos_property_foreign` (`property`);

--
-- Indexes for table `published_property_units`
--
ALTER TABLE `published_property_units`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `published_property_units_unit_code_unique` (`unit_code`),
  ADD KEY `published_property_units_property_foreign` (`property`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_admins`
--
ALTER TABLE `user_admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_admins_email_unique` (`email`),
  ADD UNIQUE KEY `user_admins_username_unique` (`username`),
  ADD UNIQUE KEY `user_admins_phone_unique` (`phone`);

--
-- Indexes for table `user_agents`
--
ALTER TABLE `user_agents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_agents_email_unique` (`email`),
  ADD UNIQUE KEY `user_agents_username_unique` (`username`),
  ADD UNIQUE KEY `user_agents_phone_unique` (`phone`),
  ADD KEY `user_agents_team_foreign` (`team`);

--
-- Indexes for table `user_clients`
--
ALTER TABLE `user_clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_clients_email_unique` (`email`),
  ADD UNIQUE KEY `user_clients_username_unique` (`username`),
  ADD UNIQUE KEY `user_clients_phone_unique` (`phone`),
  ADD KEY `user_clients_employment_type_foreign` (`employment_type`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishlists_client_foreign` (`client`);

--
-- Indexes for table `wishlist_properties`
--
ALTER TABLE `wishlist_properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishlist_properties_wishlist_foreign` (`wishlist`),
  ADD KEY `wishlist_properties_property_foreign` (`property`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `client_prefered_locations`
--
ALTER TABLE `client_prefered_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `client_property_views`
--
ALTER TABLE `client_property_views`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=411;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_province_foreign` FOREIGN KEY (`province`) REFERENCES `provinces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `client_prefered_locations`
--
ALTER TABLE `client_prefered_locations`
  ADD CONSTRAINT `client_prefered_locations_client_foreign` FOREIGN KEY (`client`) REFERENCES `user_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `client_prefered_locations_province_foreign` FOREIGN KEY (`province`) REFERENCES `provinces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `client_property_views`
--
ALTER TABLE `client_property_views`
  ADD CONSTRAINT `client_property_views_client_foreign` FOREIGN KEY (`client`) REFERENCES `user_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `client_property_views_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `financing_requirements`
--
ALTER TABLE `financing_requirements`
  ADD CONSTRAINT `financing_requirements_employment_type_foreign` FOREIGN KEY (`employment_type`) REFERENCES `employment_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `financing_requirements_financing_foreign` FOREIGN KEY (`financing`) REFERENCES `property_financings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ongoing_transactions`
--
ALTER TABLE `ongoing_transactions`
  ADD CONSTRAINT `ongoing_transactions_agent_foreign` FOREIGN KEY (`agent`) REFERENCES `user_agents` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ongoing_transactions_client_foreign` FOREIGN KEY (`client`) REFERENCES `user_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ongoing_transactions_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `property_developers_projects`
--
ALTER TABLE `property_developers_projects`
  ADD CONSTRAINT `property_developers_projects_city_foreign` FOREIGN KEY (`city`) REFERENCES `cities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `property_developers_projects_developer_foreign` FOREIGN KEY (`developer`) REFERENCES `property_developers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `property_developers_projects_province_foreign` FOREIGN KEY (`province`) REFERENCES `provinces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `published_properties`
--
ALTER TABLE `published_properties`
  ADD CONSTRAINT `published_properties_city_foreign` FOREIGN KEY (`city`) REFERENCES `cities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_developer_foreign` FOREIGN KEY (`developer`) REFERENCES `property_developers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_project_foreign` FOREIGN KEY (`project`) REFERENCES `property_developers_projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_property_type_foreign` FOREIGN KEY (`property_type`) REFERENCES `property_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_province_foreign` FOREIGN KEY (`province`) REFERENCES `provinces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `published_properties_amenities`
--
ALTER TABLE `published_properties_amenities`
  ADD CONSTRAINT `published_properties_amenities_amenity_foreign` FOREIGN KEY (`amenity`) REFERENCES `property_amenities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_amenities_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `published_properties_financings`
--
ALTER TABLE `published_properties_financings`
  ADD CONSTRAINT `published_properties_financings_financing_foreign` FOREIGN KEY (`financing`) REFERENCES `property_financings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_financings_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `published_properties_photos`
--
ALTER TABLE `published_properties_photos`
  ADD CONSTRAINT `published_properties_photos_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `published_property_units`
--
ALTER TABLE `published_property_units`
  ADD CONSTRAINT `published_property_units_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user_agents`
--
ALTER TABLE `user_agents`
  ADD CONSTRAINT `user_agents_team_foreign` FOREIGN KEY (`team`) REFERENCES `teams` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user_clients`
--
ALTER TABLE `user_clients`
  ADD CONSTRAINT `user_clients_employment_type_foreign` FOREIGN KEY (`employment_type`) REFERENCES `employment_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `wishlists_client_foreign` FOREIGN KEY (`client`) REFERENCES `user_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wishlist_properties`
--
ALTER TABLE `wishlist_properties`
  ADD CONSTRAINT `wishlist_properties_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_properties_wishlist_foreign` FOREIGN KEY (`wishlist`) REFERENCES `wishlists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
