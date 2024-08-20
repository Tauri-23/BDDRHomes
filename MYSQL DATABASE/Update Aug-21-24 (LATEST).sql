-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2024 at 06:06 PM
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
(15, '2024_07_12_051035_create_published_properties_amenities_table', 7),
(16, '2024_07_12_051953_create_published_properties_financings_table', 8),
(22, '2024_07_12_134824_create_published_properties_photos_table', 12),
(24, '2024_08_04_102927_create_wishlists_table', 13),
(25, '2024_08_04_103133_create_wishlist_properties_table', 14),
(26, '2024_08_10_082416_create_user_admins_table', 15),
(27, '2024_06_15_082540_create_user_clients_table', 16),
(29, '2024_08_16_114441_create_ongoing_deals_table', 17),
(30, '2024_08_18_085324_create_admin_properties_table', 18),
(31, '2024_06_30_143220_create_user_agents_table', 19),
(32, '2024_08_19_090931_create_jobs_table', 20),
(33, '2024_08_19_091159_create_cache_table', 21),
(35, '2024_07_12_042824_create_published_properties_table', 23),
(36, '2024_08_20_034835_create_property_listings_table', 24);

-- --------------------------------------------------------

--
-- Table structure for table `ongoing_deals`
--

CREATE TABLE `ongoing_deals` (
  `id` varchar(12) NOT NULL,
  `agent` varchar(6) DEFAULT NULL,
  `client` varchar(6) DEFAULT NULL,
  `property` varchar(12) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
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
(279, 'App\\Models\\user_agents', 735793, 'main', '775680703f9295c15e4c70f06d8d7aee9036317535d2f61e4f9066eff192f55a', '[\"*\"]', '2024-08-20 07:42:45', NULL, '2024-08-20 07:29:26', '2024-08-20 07:42:45');

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
-- Table structure for table `property_listings`
--

CREATE TABLE `property_listings` (
  `id` varchar(12) NOT NULL,
  `property` varchar(12) DEFAULT NULL,
  `agent` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `required_income` double NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties`
--

INSERT INTO `published_properties` (`id`, `name`, `address`, `description`, `bedroom`, `bath`, `carport`, `lot_area`, `floor_area`, `property_type`, `required_income`, `status`, `price`, `created_at`, `updated_at`) VALUES
('156387018069', 'Anyana, Paris', 'Tanza, Cavite', 'lorem ipsuim dolor sit amet consecturasd sda asd ddsa', '3', '3', '2', 151, 180, '537186', 300000, 'active', 12000000, '2024-08-19 20:23:02', '2024-08-20 06:42:46');

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
('117450', NULL, '118656', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('135178', NULL, '229549', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('158781', NULL, '289134', '2024-07-13 03:56:18', '2024-07-13 03:56:18'),
('203717', NULL, '933276', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('20422', '156387018069', '240956', '2024-08-19 20:23:02', '2024-08-19 20:23:02'),
('227712', NULL, '118656', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('254836', NULL, '475724', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('270758', NULL, '805271', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('312027', NULL, '289134', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('371639', NULL, '310725', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('374120', NULL, '475724', '2024-08-08 01:19:40', '2024-08-08 01:19:40'),
('408703', '156387018069', '475724', '2024-08-19 20:23:02', '2024-08-19 20:23:02'),
('420921', NULL, '368978', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('426811', NULL, '638047', '2024-07-23 07:55:00', '2024-07-23 07:55:00'),
('450120', NULL, '240956', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('490090', NULL, '310725', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('57092', NULL, '411393', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('586644', NULL, '870756', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('668939', NULL, '475724', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('694173', '156387018069', '229549', '2024-08-20 06:46:51', '2024-08-20 06:46:51'),
('723314', NULL, '310725', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('738886', NULL, '411393', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('768379', NULL, '411393', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('786090', NULL, '118656', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('794077', NULL, '805271', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('796885', NULL, '310725', '2024-07-23 07:54:30', '2024-07-23 07:54:30'),
('798941', NULL, '310725', '2024-08-08 01:19:34', '2024-08-08 01:19:34'),
('826281', NULL, '289134', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('827571', NULL, '118656', '2024-07-23 07:57:52', '2024-07-23 07:57:52'),
('838140', NULL, '229549', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('859769', NULL, '240956', '2024-07-13 03:56:18', '2024-07-13 03:56:18'),
('866033', NULL, '870756', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('88528', NULL, '368978', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('912925', NULL, '411393', '2024-07-13 03:56:17', '2024-07-13 03:56:17'),
('930891', NULL, '118656', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('934375', NULL, '870756', '2024-08-15 08:51:09', '2024-08-15 08:51:09');

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
('100098', NULL, '952734', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('335744', NULL, '381064', '2024-08-15 08:57:30', '2024-08-15 08:57:30'),
('364361', NULL, '293791', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('389193', '156387018069', '952734', '2024-08-19 20:23:02', '2024-08-19 20:23:02'),
('431121', NULL, '952734', '2024-07-26 02:01:47', '2024-07-26 02:01:47'),
('442057', NULL, '381064', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('455702', NULL, '952734', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('494365', NULL, '723404', '2024-08-15 08:57:27', '2024-08-15 08:57:27'),
('510702', NULL, '293791', '2024-08-15 08:57:28', '2024-08-15 08:57:28'),
('523847', '156387018069', '674687', '2024-08-20 06:57:30', '2024-08-20 06:57:30'),
('563752', NULL, '674687', '2024-07-13 03:56:18', '2024-07-13 03:56:18'),
('615485', NULL, '381064', '2024-08-15 08:57:27', '2024-08-15 08:57:27'),
('615965', NULL, '723404', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('729260', NULL, '674687', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('763864', NULL, '952734', '2024-08-08 01:15:49', '2024-08-08 01:15:49'),
('766942', NULL, '674687', '2024-08-01 23:47:28', '2024-08-01 23:47:28'),
('7946', NULL, '293791', '2024-08-15 08:57:26', '2024-08-15 08:57:26'),
('898375', NULL, '723404', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('907739', NULL, '674687', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('923594', NULL, '952734', '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('929072', NULL, '381064', '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('996500', NULL, '381064', '2024-08-15 08:51:09', '2024-08-15 08:51:09');

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
('127345', '30IIZVsLB5eRBg5tN7oZWXoY.jpeg', NULL, 6, '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('141144', 'FI383GTY5OLF1hug125APk2i.jpg', NULL, 3, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('171897', 'MIJ9CELB1QiFfuK32FZqRthb.png', NULL, 4, '2024-08-02 08:37:27', '2024-08-07 07:03:13'),
('228807', 'Wq2EoluBgMc5Xf6MlKrFC0l7.jpg', '156387018069', 2, '2024-08-19 20:23:02', '2024-08-20 06:13:37'),
('260643', '41rbXkOCuAmmB94fZ4u5DqY9.png', NULL, 2, '2024-08-08 01:15:49', '2024-08-08 01:17:56'),
('287399', 'FEYrxWUaa0jGVDI4VeTdbuZs.png', NULL, 3, '2024-08-02 08:37:27', '2024-08-07 07:03:13'),
('304012', 'x3IJW3lERAHAj7RAsUjA5sqQ.jpg', NULL, 2, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('391258', '6EFelpS3c9b4FYv7s7x1e3oJ.jpg', NULL, 1, '2024-07-12 19:56:18', '2024-08-02 08:33:12'),
('39498', 'pRRhWDRVQxySQY0ppDWtbGeg.png', NULL, 1, '2024-08-02 08:37:27', '2024-08-09 01:16:21'),
('406879', 'HxDac0b16U255M2INg1aEbKK.jpg', NULL, 4, '2024-07-12 19:56:18', '2024-08-01 22:42:21'),
('422722', '6b5yyZxtWcEeCWUBbuhEBM6J.jpg', '156387018069', 4, '2024-08-19 20:23:02', '2024-08-20 06:16:29'),
('465208', 'ze4d4ZfsCQ9XXGeFgpU70f2x.png', NULL, 7, '2024-08-08 01:25:21', '2024-08-08 01:25:21'),
('474163', '3LSIMwreAm8yFwzq3Rhmpkze.jpg', NULL, 5, '2024-07-30 22:24:03', '2024-08-01 22:42:21'),
('632914', 'fHJOhBxA5L2bgEwP9Wmtu014.png', NULL, 2, '2024-08-02 08:37:27', '2024-08-09 01:16:21'),
('652516', '9re1fT8cXpuHE1iy8cxapvky.jpeg', NULL, 5, '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('688837', 'V5royezZWsho0TgGQRRhxDUC.png', NULL, 5, '2024-08-08 01:15:49', '2024-08-08 01:17:40'),
('696498', 'LWDjF3NUWalL1JdSjDWKU8Ab.webp', NULL, 2, '2024-07-12 19:56:18', '2024-08-02 08:33:12'),
('700449', 'IpOK4va3C6xFVqhqG23pF4oe.jpeg', NULL, 2, '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('739156', 'Os8V89P0RiB1A1gwyP5mnhDb.png', NULL, 4, '2024-08-08 01:15:49', '2024-08-08 01:17:40'),
('745704', 'hC9gYHcnvid8YWxcYXqOdlhF.jpg', '156387018069', 1, '2024-08-19 20:23:02', '2024-08-20 06:13:37'),
('75434', 'ykK2atNcxTn4ZHHNHYBBpmFL.png', NULL, 4, '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('757810', 'MYPOKdVosUOE8yv0D96wkeid.png', NULL, 1, '2024-08-08 01:15:49', '2024-08-08 01:17:56'),
('762530', 'rSkDrhnAyib8L8ltxnZxdPZW.png', NULL, 3, '2024-08-08 01:15:49', '2024-08-08 01:17:56'),
('787012', 'PSBQfy6du9Vn94UVm7VqG1Bn.jpg', NULL, 3, '2024-07-12 19:56:18', '2024-08-02 08:30:44'),
('787191', '9QdjgLowowXfothDlK0tGlWH.jpg', NULL, 5, '2024-08-02 08:36:19', '2024-08-02 08:36:19'),
('803900', 'tPncZqJOPmHzzt1i1opbT5e0.jpeg', NULL, 3, '2024-08-15 08:51:09', '2024-08-15 08:51:09'),
('83684', 'zHOdGRjDJDTFPylZPZE5ivV6.png', NULL, 5, '2024-08-02 08:37:27', '2024-08-07 07:03:13'),
('855395', 'Iz6jBCsMnGCqpPvgOVAiFrAx.png', NULL, 6, '2024-08-08 01:25:21', '2024-08-08 01:25:21'),
('888786', 'E5fIl8ajCnLbFPGjOtf9Zi8M.png', NULL, 6, '2024-08-02 08:36:35', '2024-08-02 08:36:39'),
('918996', '8wK1NntTAT4TkccUFbzGEBGW.png', '156387018069', 6, '2024-08-20 04:20:18', '2024-08-20 06:16:55'),
('923867', 'WxWwHyxhfFegTZTN6UHihtTr.jpg', '156387018069', 5, '2024-08-19 20:23:02', '2024-08-20 06:16:55'),
('980242', 'h7xHwGCaKS13VXu7zjDoO9Ou.png', NULL, 1, '2024-08-02 08:36:19', '2024-08-02 08:36:39'),
('981721', 'EhyICdh4il5IPojNf4p1CyQ1.webp', '156387018069', 3, '2024-08-19 20:23:02', '2024-08-20 06:13:37');

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
  `Position` varchar(255) DEFAULT NULL,
  `account_status` varchar(255) NOT NULL DEFAULT 'Active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_agents`
--

INSERT INTO `user_agents` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `pfp`, `Position`, `account_status`, `created_at`, `updated_at`) VALUES
('735793', 'Melissa', 'Sevilla', 'Daiwan', 'Female', '1973-06-03', 'melissadiawan.bddrealty@gmail.com', 'melissad760', '936 691 5861', '$2y$12$XruMyeimtKlAKGIdSgfsc.9.9qvJd7mH16vDjEPM6UhXVyEAiGDq6', NULL, NULL, 'Active', '2024-08-20 05:53:52', '2024-08-20 05:53:52'),
('963234', 'Faith Enn', 'Lagare', 'Deliman', 'Female', '2001-03-11', 'faithdeliman@gmail.com', 'faithd619', '961 511 6627', '$2y$12$AM/YW6WE0kH6sSKQ77qxOeKJUmql3EcnsFjsWjCLAJz5By0FxQzTC', NULL, NULL, 'Active', '2024-08-20 07:26:45', '2024-08-20 07:26:45');

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_clients`
--

INSERT INTO `user_clients` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `bdate`, `email`, `username`, `phone`, `password`, `pfp`, `created_at`, `updated_at`) VALUES
('824907', 'Airich Jay', 'Sevilla', 'Diawan', 'Male', '2003-04-23', 'airichjaydiawan@gmail.com', 'adiawan', '967 764 4695', '$2y$12$0yvf43PEvEq.Xc7/F/s3ouzn1t8yyfI9wOR/zk4.tGAs120GjGQai', NULL, '2024-06-23 10:41:41', '2024-06-23 10:41:41');

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
-- Indexes for table `ongoing_deals`
--
ALTER TABLE `ongoing_deals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ongoing_deals_client_foreign` (`client`),
  ADD KEY `ongoing_deals_agent_foreign` (`agent`),
  ADD KEY `ongoing_deals_property_foreign` (`property`);

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
-- Indexes for table `property_listings`
--
ALTER TABLE `property_listings`
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
  ADD KEY `published_properties_property_type_foreign` (`property_type`);

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
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ongoing_deals`
--
ALTER TABLE `ongoing_deals`
  ADD CONSTRAINT `ongoing_deals_agent_foreign` FOREIGN KEY (`agent`) REFERENCES `user_agents` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ongoing_deals_client_foreign` FOREIGN KEY (`client`) REFERENCES `user_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ongoing_deals_property_foreign` FOREIGN KEY (`property`) REFERENCES `published_properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `published_properties`
--
ALTER TABLE `published_properties`
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
