-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2024 at 11:31 AM
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
(7, '2024_06_15_082540_create_user_clients_table', 1),
(8, '2024_06_22_112538_create_personal_access_tokens_table', 1),
(9, '2024_06_30_143220_create_user_agents_table', 2),
(10, '2024_07_08_072128_create_property_types_table', 3),
(11, '2024_07_08_084111_create_property_amenities_table', 4),
(12, '2024_07_11_091308_create_property_financings_table', 5),
(15, '2024_07_12_051035_create_published_properties_amenities_table', 7),
(16, '2024_07_12_051953_create_published_properties_financings_table', 8),
(21, '2024_07_12_042824_create_published_properties_table', 11),
(22, '2024_07_12_134824_create_published_properties_photos_table', 12),
(24, '2024_08_04_102927_create_wishlists_table', 13),
(25, '2024_08_04_103133_create_wishlist_properties_table', 14);

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
(144, 'App\\Models\\user_clients', 824907, 'main', '9661ed9ef9cda3f92f6343ed3c0d87ef19dd6eb5e72bd717dba1d53037c16ba7', '[\"*\"]', '2024-08-07 01:31:19', NULL, '2024-08-03 22:42:25', '2024-08-07 01:31:19');

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
('229549', 'park2.svg', 'Dog Park', '2024-07-09 14:14:28', '2024-07-09 14:35:13'),
('240956', 'convenience-store.svg', 'Convenience Store', '2024-07-09 14:14:49', '2024-07-09 14:34:22'),
('289134', 'dumbbell.svg', 'Gym', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('310725', 'mall.svg', 'Mall Nearby', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('368978', 'court.svg', 'Basketball Court', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('411393', 'club1.svg', 'Club House', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('475724', 'security1.svg', 'Security', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('638047', 'park2.svg', 'Jogging Path', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('805271', 'swing.svg', 'Playground', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('870756', 'pool2.svg', 'Pool', '2024-07-09 14:14:49', '2024-07-09 14:14:49'),
('933276', 'internet1.svg', 'Internet Service', '2024-07-09 14:14:49', '2024-07-09 14:14:49');

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
('674687', 'money.svg', 'Cash', '2024-07-09 14:14:28', '2024-07-09 14:14:28'),
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
('537186', 'house.svg', 'Single-detached', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('581828', 'bungalow.svg', 'Bungalow', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('585979', 'duplex.svg', 'Duplex', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('809552', 'rowhouse.svg', 'Row house', '2024-07-09 14:14:39', '2024-07-09 14:14:39'),
('979367', 'building.svg', 'Condo', '2024-07-09 14:14:39', '2024-07-09 14:14:39');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties`
--

CREATE TABLE `published_properties` (
  `id` varchar(12) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `description` longtext NOT NULL,
  `bedroom` text NOT NULL,
  `bath` text NOT NULL,
  `carport` text NOT NULL,
  `lot_area` double NOT NULL,
  `floor_area` double NOT NULL,
  `property_type` varchar(6) DEFAULT NULL,
  `agent` varchar(6) DEFAULT NULL,
  `required_income` double NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties`
--

INSERT INTO `published_properties` (`id`, `name`, `address`, `description`, `bedroom`, `bath`, `carport`, `lot_area`, `floor_area`, `property_type`, `agent`, `required_income`, `status`, `price`, `created_at`, `updated_at`) VALUES
('276913190316', 'Anya, Paris', 'Tanza, Cavite', 'Anyana Paris is located at tanza lorem ipsum dolor sit amet consectur lorem ipsium. asdw dasd. dasdwd dsda dwasd dadsd adad ddasd adwad sd aasdw ert gf gdg df gdrgdf,   asdasd.', '4', '4', '2', 180, 156, '537186', '243780', 0, 'active', 12000000, '2024-07-12 19:56:17', '2024-07-28 17:23:58'),
('501690989438', 'Test 3', 'Tanza Cavite', 'Test3 lorem ipsum dolor sit amet cons', '1', '1', '1', 1, 1, '979367', '243780', 15000, 'active', 2000000, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('650270920421', 'Anyana, Tokyo', 'Tanza, Cavite', 'lorem ipsum dolor sit amet.', '2', '2', '1', 1, 1, '222597', '243780', 0, 'active', 0, '2024-08-01 23:47:28', '2024-08-01 23:47:28');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties_amenities`
--

CREATE TABLE `published_properties_amenities` (
  `id` varchar(6) NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `amenity` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties_amenities`
--

INSERT INTO `published_properties_amenities` (`id`, `property`, `amenity`, `created_at`, `updated_at`) VALUES
('135178', '650270920421', '229549', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('158781', '276913190316', '289134', '2024-07-13 03:56:18', '2024-07-13 03:56:18'),
('203717', '276913190316', '933276', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('254836', '276913190316', '475724', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('312027', '650270920421', '289134', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('371639', '501690989438', '310725', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('420921', '276913190316', '368978', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('426811', '276913190316', '638047', '2024-07-23 07:55:00', '2024-07-23 07:55:00'),
('450120', '650270920421', '240956', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('57092', '501690989438', '411393', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('723314', '650270920421', '310725', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('786090', '501690989438', '118656', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('796885', '276913190316', '310725', '2024-07-23 07:54:30', '2024-07-23 07:54:30'),
('827571', '276913190316', '118656', '2024-07-23 07:57:52', '2024-07-23 07:57:52'),
('859769', '276913190316', '240956', '2024-07-13 03:56:18', '2024-07-13 03:56:18'),
('866033', '276913190316', '870756', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('912925', '276913190316', '411393', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('930891', '650270920421', '118656', '2024-08-01 23:47:28', '2024-08-01 23:47:28');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties_financings`
--

CREATE TABLE `published_properties_financings` (
  `id` varchar(6) NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `financing` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties_financings`
--

INSERT INTO `published_properties_financings` (`id`, `property`, `financing`, `created_at`, `updated_at`) VALUES
('100098', '501690989438', '952734', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('364361', '501690989438', '293791', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('431121', '276913190316', '952734', '2024-07-26 02:01:47', '2024-07-26 02:01:47'),
('455702', '650270920421', '952734', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('563752', '276913190316', '674687', '2024-07-13 03:56:18', '2024-07-13 03:56:18'),
('766942', '650270920421', '674687', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('898375', '501690989438', '723404', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('907739', '501690989438', '674687', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('929072', '501690989438', '381064', '2024-08-02 08:36:19', '2024-08-02 08:36:19');

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
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties_photos`
--

INSERT INTO `published_properties_photos` (`id`, `filename`, `property`, `position`, `created_at`, `updated_at`) VALUES
('141144', 'FI383GTY5OLF1hug125APk2i.jpg', '501690989438', 3, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('171897', 'MIJ9CELB1QiFfuK32FZqRthb.png', '650270920421', 3, '2024-08-02 08:37:27', '2024-08-02 08:38:03'),
('287399', 'FEYrxWUaa0jGVDI4VeTdbuZs.png', '650270920421', 2, '2024-08-02 08:37:27', '2024-08-02 08:38:03'),
('304012', 'x3IJW3lERAHAj7RAsUjA5sqQ.jpg', '501690989438', 2, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('391258', '6EFelpS3c9b4FYv7s7x1e3oJ.jpg', '276913190316', 1, '2024-07-12 19:56:18', '2024-08-02 08:33:12'),
('39498', 'pRRhWDRVQxySQY0ppDWtbGeg.png', '650270920421', 1, '2024-08-02 08:37:27', '2024-08-02 08:38:03'),
('406879', 'HxDac0b16U255M2INg1aEbKK.jpg', '276913190316', 4, '2024-07-12 19:56:18', '2024-08-01 22:42:21'),
('474163', '3LSIMwreAm8yFwzq3Rhmpkze.jpg', '276913190316', 5, '2024-07-30 22:24:03', '2024-08-01 22:42:21'),
('632914', 'fHJOhBxA5L2bgEwP9Wmtu014.png', '650270920421', 5, '2024-08-02 08:37:27', '2024-08-02 08:38:03'),
('696498', 'LWDjF3NUWalL1JdSjDWKU8Ab.webp', '276913190316', 2, '2024-07-12 19:56:18', '2024-08-02 08:33:12'),
('787012', 'PSBQfy6du9Vn94UVm7VqG1Bn.jpg', '276913190316', 3, '2024-07-12 19:56:18', '2024-08-02 08:30:44'),
('787191', '9QdjgLowowXfothDlK0tGlWH.jpg', '501690989438', 5, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('83684', 'zHOdGRjDJDTFPylZPZE5ivV6.png', '650270920421', 4, '2024-08-02 08:37:27', '2024-08-02 08:38:03'),
('888786', 'E5fIl8ajCnLbFPGjOtf9Zi8M.png', '501690989438', 6, '2024-08-02 08:36:35', '2024-08-02 08:36:39'),
('980242', 'h7xHwGCaKS13VXu7zjDoO9Ou.png', '501690989438', 1, '2024-08-02 08:36:19', '2024-08-02 08:36:39');

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_agents`
--

INSERT INTO `user_agents` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `created_at`, `updated_at`) VALUES
('243780', 'Melissa', 'Sevilla', 'Diawan', 'Female', '1973-06-03', 'melissadiawan.bddrealty@gmail.com', 'melissa123', '936 691 5861', '$2y$12$0yvf43PEvEq.Xc7/F/s3ouzn1t8yyfI9wOR/zk4.tGAs120GjGQai', '2024-06-30 14:34:31', '2024-06-30 14:53:09');

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_clients`
--

INSERT INTO `user_clients` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `created_at`, `updated_at`) VALUES
('824907', 'Airich Jay', 'Sevilla', 'Diawan', 'Male', '2003-04-23', 'airichjaydiawan@gmail.com', 'adiawan', '967 764 4695', '$2y$12$0yvf43PEvEq.Xc7/F/s3ouzn1t8yyfI9wOR/zk4.tGAs120GjGQai', '2024-06-23 18:41:41', '2024-06-23 18:41:41');

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
('136441032419', '824907', 'sssss', '2024-08-07 00:34:45', '2024-08-07 00:34:45'),
('143143050835', '824907', 'test2', '2024-08-07 00:32:06', '2024-08-07 00:32:06'),
('167375135347', '824907', 'test1', '2024-08-06 00:04:39', '2024-08-06 00:04:39'),
('611191858187', '824907', 'asd', '2024-08-05 23:59:02', '2024-08-05 23:59:02'),
('738209996875', '824907', 'asdasd2', '2024-08-07 00:34:36', '2024-08-07 00:34:36');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist_properties`
--

CREATE TABLE `wishlist_properties` (
  `id` varchar(6) NOT NULL,
  `wishlist` varchar(12) DEFAULT NULL,
  `property` varchar(12) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `published_properties`
--
ALTER TABLE `published_properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `published_properties_property_type_foreign` (`property_type`),
  ADD KEY `published_properties_agent_foreign` (`agent`);

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
-- Indexes for table `user_agents`
--
ALTER TABLE `user_agents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_agents_email_unique` (`email`),
  ADD UNIQUE KEY `user_agents_username_unique` (`username`),
  ADD UNIQUE KEY `user_agents_phone_unique` (`phone`);

--
-- Indexes for table `user_clients`
--
ALTER TABLE `user_clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_clients_email_unique` (`email`),
  ADD UNIQUE KEY `user_clients_username_unique` (`username`),
  ADD UNIQUE KEY `user_clients_phone_unique` (`phone`);

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
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `published_properties`
--
ALTER TABLE `published_properties`
  ADD CONSTRAINT `published_properties_agent_foreign` FOREIGN KEY (`agent`) REFERENCES `user_agents` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_property_type_foreign` FOREIGN KEY (`property_type`) REFERENCES `property_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `published_properties_amenities`
--
ALTER TABLE `published_properties_amenities`
  ADD CONSTRAINT `published_properties_amenities_amenity_foreign` FOREIGN KEY (`amenity`) REFERENCES `property_amenities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_amenities_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `published_properties_financings`
--
ALTER TABLE `published_properties_financings`
  ADD CONSTRAINT `published_properties_financings_financing_foreign` FOREIGN KEY (`financing`) REFERENCES `property_financings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_financings_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `published_properties_photos`
--
ALTER TABLE `published_properties_photos`
  ADD CONSTRAINT `published_properties_photos_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
