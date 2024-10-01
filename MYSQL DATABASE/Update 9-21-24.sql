-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2024 at 05:21 PM
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
(3, 'Trece Martirez', 1, '2024-09-13 07:26:56', '2024-09-13 07:26:56'),
(4, 'Kawit', 1, '2024-09-13 07:26:56', '2024-09-13 07:26:56');

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
(9, 4, '824907', '2024-09-15 22:40:07', '2024-09-15 22:40:07');

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
(51, '2024_07_12_042824_create_published_properties_table', 33),
(52, '2024_08_04_103133_create_wishlist_properties_table', 34),
(55, '2024_09_13_071024_create_provinces_table', 36),
(56, '2024_09_13_071040_create_cities_table', 37),
(58, '2024_09_13_072730_create_client_prefered_locations_table', 38),
(61, '2024_09_16_160729_create_ongoing_transactions_table', 40),
(62, '2024_09_21_042011_create_employment_types_table', 41),
(64, '2024_09_21_043843_create_financing_requirements_table', 42),
(65, '2024_06_15_082540_create_user_clients_table', 43);

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

--
-- Dumping data for table `ongoing_transactions`
--

INSERT INTO `ongoing_transactions` (`id`, `client`, `agent`, `property`, `status`, `created_at`, `updated_at`) VALUES
('6119236972000437', '824907', '735793', '876148182644', 'ongoing', '2024-09-18 08:47:28', '2024-09-20 02:17:28'),
('6985964964048010', '824907', NULL, '860385383616', 'pending', '2024-09-18 06:46:46', '2024-09-18 06:46:46');

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
(337, 'App\\Models\\user_agents', 735793, 'main', 'c16e8bfde042671491b38a21cc748ff4579363be6c630becedc45efaf0472fc1', '[\"*\"]', '2024-09-21 06:11:55', NULL, '2024-09-20 20:12:24', '2024-09-21 06:11:55'),
(341, 'App\\Models\\user_clients', 824907, 'main', 'cbe93649c431eeb51ff4ade4c2ee36c9583e8543630e7298eacdec1915c1d597', '[\"*\"]', '2024-09-21 03:58:50', NULL, '2024-09-21 01:50:34', '2024-09-21 03:58:50');

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_developers`
--

INSERT INTO `property_developers` (`id`, `name`, `logo`, `created_at`, `updated_at`) VALUES
('219448016814', 'Antel Holdings Inc.', 'vo0N1pQp4YzTrSBvhnKx3X7V.png', '2024-09-05 00:27:02', '2024-09-05 00:27:02'),
('222649925410', 'Amaia Land Corp.', 'cHsrwt0LYnpTmNULoCmLBewa.jpg', '2024-09-04 23:31:31', '2024-09-04 23:31:31'),
('702753663483', 'Century Properties Group, Inc.', 'e48UDoei51Yd5vaZKS3SFNaF.jpg', '2024-09-10 20:32:47', '2024-09-10 20:32:47');

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
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `province`, `created_at`, `updated_at`) VALUES
(1, 'Cavite', '2024-09-13 07:22:02', '2024-09-13 07:22:02'),
(2, 'Metro Manila', '2024-09-13 07:22:02', '2024-09-13 07:22:02'),
(3, 'Laguna', '2024-09-13 07:22:02', '2024-09-13 07:22:02'),
(4, 'Batangas', '2024-09-13 07:22:02', '2024-09-13 07:22:02'),
(5, 'Bulacan', '2024-09-13 07:22:02', '2024-09-13 07:22:02');

-- --------------------------------------------------------

--
-- Table structure for table `published_properties`
--

CREATE TABLE `published_properties` (
  `id` varchar(12) NOT NULL,
  `project_name` text NOT NULL,
  `project_model` text NOT NULL,
  `province` text NOT NULL,
  `city` text NOT NULL,
  `developer` varchar(12) DEFAULT NULL,
  `bedroom` text NOT NULL,
  `bath` text NOT NULL,
  `carport` text NOT NULL,
  `lot_area` double NOT NULL,
  `floor_area` double NOT NULL,
  `property_type` varchar(6) DEFAULT NULL,
  `storey` int(11) NOT NULL,
  `required_income` double NOT NULL,
  `monthly_amortization` double NOT NULL,
  `price` double NOT NULL DEFAULT 0,
  `turnover` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `published_properties`
--

INSERT INTO `published_properties` (`id`, `project_name`, `project_model`, `province`, `city`, `developer`, `bedroom`, `bath`, `carport`, `lot_area`, `floor_area`, `property_type`, `storey`, `required_income`, `monthly_amortization`, `price`, `turnover`, `status`, `created_at`, `updated_at`) VALUES
('159271929659', 'Amaia Scapes Trece', 'Single Home', 'Cavite', 'Trece Martirez', '222649925410', '3', '1', '1', 111.77, 60, '222597', 2, 138577, 41573, 5100000, 'RFO, Pre-selling', 'active', '2024-09-07 07:39:49', '2024-09-16 10:39:31'),
('251257837812', 'Anyana Bel Air', 'Tokyo', 'Cavite', 'Tanza', '219448016814', '4', '2', '1', 101, 107.35, '222597', 2, 172000, 52121, 7661810, 'Pre-selling', 'active', '2024-09-07 04:24:37', '2024-09-16 10:46:38'),
('314959578966', 'Anyana Bel Air', 'California', 'Cavite', 'Tanza', '219448016814', '5', '3', '2', 182, 202.95, '222597', 2, 360907, 109366, 18748820, 'Pre-selling', 'active', '2024-09-07 04:17:08', '2024-09-16 14:41:44'),
('374227501356', 'Anyana Bel Air', 'New York', 'Cavite', 'Tanza', '219448016814', '4', '3', '1', 124, 130.35, '222597', 2, 213951, 64724, 9474500, 'Pre-selling', 'active', '2024-09-07 05:29:06', '2024-09-16 14:54:27'),
('679309917865', 'Anyana Bel Air', 'Florida', 'Cavite', 'Tanza', '219448016814', '4', '3', '1', 125, 141.41, '222597', 2, 232249, 70378, 10269250.2, 'Pre-selling', 'active', '2024-09-07 05:54:23', '2024-09-16 14:56:44'),
('681446473777', 'Anyana Bel Air', 'Nevada', 'Cavite', 'Tanza', '219448016814', '4', '3', '2', 151, 167.22, '222597', 2, 301314, 91307, 13323060.48, 'Pre-selling', 'active', '2024-09-07 05:33:41', '2024-09-16 10:49:22'),
('860385383616', 'Phirst Park Homes Naic', 'Unna', 'Cavite', 'Naic', '702753663483', '3', '2', '1', 88, 54, '222597', 2, 115474, 34642, 5417800, 'Pre-selling', 'active', '2024-09-10 20:41:29', '2024-09-16 14:57:43'),
('876148182644', 'Anyana Bel Air', 'Paris', 'Cavite', 'Tanza', '219448016814', '4', '3', '2', 151, 187.32, '222597', 2, 307216, 93096, 13749050, 'RFO', 'active', '2024-09-07 02:28:16', '2024-09-16 10:42:01'),
('941123030465', 'Anyana Bel Air', 'Maxine', 'Cavite', 'Tanza', '219448016814', '3', '1', '1', 80, 80, '640975', 2, 127695, 38695, 0, 'RFO', 'active', '2024-09-07 06:04:11', '2024-09-07 06:04:11');

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
('13887', '941123030465', '411393', '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('156519', '860385383616', '805271', '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('163692', '679309917865', '475724', '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('207538', '374227501356', '411393', '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('372322', '679309917865', '411393', '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('391547', '941123030465', '475724', '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('425306', '860385383616', '411393', '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('433458', '251257837812', '475724', '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('443555', '159271929659', '287164', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('446026', '876148182644', '475724', '2024-09-07 02:28:16', '2024-09-07 02:28:16'),
('488093', '314959578966', '475724', '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('549714', '251257837812', '411393', '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('58355', '314959578966', '411393', '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('655795', '681446473777', '411393', '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('662979', '159271929659', '411393', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('699597', '159271929659', '368978', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('715464', '374227501356', '475724', '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('732167', '159271929659', '118656', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('778954', '876148182644', '411393', '2024-09-07 02:28:16', '2024-09-07 02:28:16'),
('791939', '159271929659', '870756', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('859801', '860385383616', '368978', '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('912986', '681446473777', '475724', '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('915117', '860385383616', '870756', '2024-09-10 20:41:29', '2024-09-10 20:41:29');

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
('199751', '679309917865', '723404', '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('2526', '159271929659', '952734', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('257295', '876148182644', '723404', '2024-09-07 02:28:16', '2024-09-07 02:28:16'),
('278927', '860385383616', '723404', '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('463926', '374227501356', '952734', '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('470729', '314959578966', '723404', '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('473217', '681446473777', '952734', '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('509327', '159271929659', '723404', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('636357', '876148182644', '952734', '2024-09-07 02:28:16', '2024-09-07 02:28:16'),
('652549', '314959578966', '952734', '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('654238', '374227501356', '723404', '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('655972', '681446473777', '723404', '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('722758', '860385383616', '952734', '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('753398', '941123030465', '723404', '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('901285', '679309917865', '952734', '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('918570', '159271929659', '293791', '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('951355', '251257837812', '723404', '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('993173', '251257837812', '952734', '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('994158', '941123030465', '952734', '2024-09-07 06:04:11', '2024-09-07 06:04:11');

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
('136596', 'fQSc7oKhqGOjFIE1E9k2egiG.jpg', '159271929659', 7, '2024-09-07 07:39:50', '2024-09-07 07:39:50'),
('138294', 'iosWCGjf51PPfZxYXmIF16DZ.jpg', '251257837812', 5, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('142254', 'y53vqJK59aZbIstXK9r14rXN.jpg', '251257837812', 8, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('150968', 'PaL6qJQT5UcQXidZnbXv30fI.jpg', '941123030465', 4, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('165204', 'gQJszTuoAhz4fXtOAe0TMYci.jpg', '314959578966', 11, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('177405', 'wpu7W8PGBDbAoVscj1egGBSg.jpg', '374227501356', 19, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('187353', 'MTLvdY7U0GUYnceDPAqdUKSC.JPG', '876148182644', 10, '2024-09-07 02:28:16', '2024-09-07 02:28:42'),
('187843', '2djy3rHT7FS2eNdUdB8jd0xE.jpg', '679309917865', 9, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('194639', 'M1NtynXEj73ajbG7qfSSMn08.JPG', '876148182644', 7, '2024-09-07 02:28:16', '2024-09-07 02:28:42'),
('209213', 'USL5W3ngjzpEoljRVVvrKZCs.jpg', '374227501356', 12, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('235241', 'ylIAa274XkvZAiW627g0j5DC.png', '679309917865', 3, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('257282', 'zddEMaqVFfRSfzqq04LRsUeu.jpg', '159271929659', 10, '2024-09-07 07:39:50', '2024-09-07 07:39:50'),
('263154', 'KX3HV3E1peS43Duu1dN9c9wf.jpg', '251257837812', 6, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('272061', 'xTfQRi3PyjIu2dRCDKdTbgVt.png', '679309917865', 4, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('27405', 'ms4yULZ4NrIdA1foRbGpjBgN.JPG', '876148182644', 4, '2024-09-07 02:28:16', '2024-09-07 02:28:53'),
('282329', 'oQ6R0Mkaca9XNXBR9Us6vy2B.jpg', '876148182644', 8, '2024-09-07 02:28:16', '2024-09-07 02:28:42'),
('296778', 'LuSNJMZL0UsoFut56XtB6LhG.jpg', '314959578966', 13, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('301184', 'ExpV7TJ6iSR2eLPdBMlpaShx.jpg', '251257837812', 7, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('302051', '69KgNeBtfQQZgEgT25k4juSY.jpg', '314959578966', 5, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('317028', 'Afm3yti7T0C61laeoftSTSZ4.jpg', '860385383616', 3, '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('318081', 'Idxm71npL17hEDPjAULfsCIc.png', '374227501356', 2, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('348969', 'YT35vRGxlffy7TzHCubEyMta.jpg', '941123030465', 6, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('357646', 'KJEWgO2zVX7pXRZZtM5NYxLr.jpg', '860385383616', 7, '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('367166', 'Wyjcbj2iAlfwzJVyGzwsKenV.JPG', '876148182644', 5, '2024-09-07 02:28:16', '2024-09-07 02:28:16'),
('389837', 'eWNseyT63fMeAwbT1l5PQnUU.png', '681446473777', 3, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('391024', 'ngdj6dtsVkNN5W2OTl3SmtVl.png', '314959578966', 3, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('405511', 'm1j2XWGpzIIj2fWsQd928KE9.jpg', '159271929659', 5, '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('409538', '0aD7KqEkuhBcbRWCYLvpzaIj.jpg', '941123030465', 7, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('414792', '8AN6Az7FfPeX9LVDAiuyfDd6.jpg', '374227501356', 13, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('42463', 'ARoLTD5Ho17HWTZe43OzPcFw.jpg', '679309917865', 7, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('426298', 'ajSRuH6NWR6zPgy9vLVSTfhL.jpg', '374227501356', 9, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('4347', 'AlxhkZNN9FtbB1SGWloCc257.png', '681446473777', 4, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('439789', 'XjysIFMATgFEn25qy0zveu03.png', '314959578966', 2, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('454412', 'TTyGeSCA6QxK4ube7FHRsSMA.jpg', '679309917865', 10, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('464314', 'zwVc4TULKrtoDRc6SjAQZp2z.jpg', '314959578966', 12, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('467060', 'MyPfLwC2SS2xXiIlfJYEt9pU.jpg', '374227501356', 5, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('468367', 'TsrhUSOuyJaKGQwPBlK2UixY.jpg', '159271929659', 4, '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('479115', 'IN3h2HMhASrGys1Ue1g4FFGf.webp', '941123030465', 2, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('479904', '3fgWMhTDtNvJaNAKMXVnXQwm.jpg', '374227501356', 11, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('497601', 'PVxSpLqN7P7BKfZ0Ej9NCp9l.jpg', '860385383616', 6, '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('501904', 'Jgai8j9QKfkXdDP9VUTdcLwY.png', '251257837812', 2, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('52126', 'k6OCr2MqudrXelEvDbgBeNAS.jpg', '374227501356', 10, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('528201', 'cZnVPjl8ep62TdbNcxdadvq2.jpg', '679309917865', 5, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('538708', 'Y2j3JPCByZ2EOUz62k1yV1Ru.jpg', '251257837812', 9, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('548257', 'iYKfjGce2kKjpUGu0thZc75z.jpg', '876148182644', 6, '2024-09-07 02:28:16', '2024-09-07 02:28:16'),
('549899', 'OUl0ch3E1w7KqhoqCGZ12l3Y.jpg', '374227501356', 15, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('558895', 'gLuT6L2ncA9DqCarRa3uVnKc.jpg', '941123030465', 8, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('592298', '0uE59C21xxwFjI14F4XQSnjA.jpg', '681446473777', 10, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('596283', 'KtsJkPC8ri5jdZCA09fjmBlK.jpg', '374227501356', 4, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('596908', 'QtcH5Mcof0ja8o5od65KpAAg.jpg', '374227501356', 8, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('600449', 'ZfUAuNlbGlk2L8696803ESCc.jpg', '679309917865', 8, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('601722', 'LPe0Wb0uxa62bhPt527oXK9y.jpg', '681446473777', 6, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('618513', '0zK5EivIzyjwVg1D7kRJQzyD.jpg', '681446473777', 12, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('630973', 'opavyVXIKyB4tbc0ulOVLpfE.jpg', '681446473777', 11, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('635957', 'f5Ein3V1ury46uN0OaRSmq89.png', '679309917865', 2, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('636513', 'kT7G0zagJcm30DSWRgAZitEz.jpg', '876148182644', 3, '2024-09-07 02:28:16', '2024-09-07 02:28:53'),
('64272', 'MhUs3b2BEGsTUzLfr6LZGT8r.jpg', '876148182644', 2, '2024-09-07 02:28:16', '2024-09-07 02:28:52'),
('657276', 'N29iaX4ke7mLveZaeIqhV3w9.jpg', '941123030465', 5, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('657713', '3h9fkRntNVvdVebsVY2kmOC3.jpg', '860385383616', 5, '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('661060', 't8QiEVcgewZ17SPc5WBQCIlg.jpg', '860385383616', 2, '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('661235', 'lsiIA6zWfPhJH0kYPtYb8Xb5.jpg', '374227501356', 18, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('661243', 'AO0wlh4LRgxGVwll0ZENa9VR.jpg', '314959578966', 7, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('669417', 'cqmbhaytW4Ym0O0XreIjgRuz.jpg', '159271929659', 8, '2024-09-07 07:39:50', '2024-09-07 07:39:50'),
('677968', 'O0QwjPxLnhQeItniogJlxCLf.jpg', '374227501356', 14, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('704429', 'c1ipLyTpy3JUNA8y4MV9nC2t.jpg', '374227501356', 16, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('705575', 'GL5OMYz2JAqca3cOuyozKF0b.jpg', '314959578966', 9, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('70587', 'NxMO7mIKWnpLeTguAOiXsJDc.jpg', '159271929659', 6, '2024-09-07 07:39:50', '2024-09-07 07:39:50'),
('709976', 'eNnicFtzYG35p8pL9AaXaDFS.png', '876148182644', 1, '2024-09-07 02:28:16', '2024-09-07 02:28:51'),
('719664', '5kJpFtqCQiup4zBW2VQjg0kP.jpg', '159271929659', 3, '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('721710', 'nYRPMDZ78VA7rt71buXXE63R.jpg', '860385383616', 4, '2024-09-10 20:41:29', '2024-09-10 20:41:29'),
('745756', 'Spz2k30rJ8HVi5iMWAweeV6m.jpg', '251257837812', 4, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('750870', 'nMeewOyACRujw4lKHN03v60h.jpg', '159271929659', 9, '2024-09-07 07:39:50', '2024-09-07 07:39:50'),
('752411', 'VA9xQRS1XsHMvPAwRqbuTHS0.jpg', '314959578966', 10, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('761439', 'D76WwL9IEMrxySXts5EtpIex.jpg', '159271929659', 2, '2024-09-07 07:39:49', '2024-09-07 07:39:49'),
('767825', 'WwOZ6QoJnG3tSCLJXzUMqObg.jpg', '681446473777', 8, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('791279', 'EWonzyDuHeaEnKWNolTg3ZH9.jpg', '374227501356', 20, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('79374', 'JSr9Yr5tkhmwbMqjFofOGAJR.jpg', '314959578966', 8, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('823297', 'ZWUJ5dvZLvi44VuZRyOIGMK6.webp', '941123030465', 3, '2024-09-07 06:04:11', '2024-09-07 06:04:11'),
('836065', 'lr4fHr35cJ9umgoqSoRpRtMK.jpg', '679309917865', 11, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('866585', 'nm3L3GoSY04QmmsJ7mD1amS9.jpg', '681446473777', 5, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('873394', 'icvZ6ungNfRIqQVHvxn4lkvT.jpg', '681446473777', 9, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('883068', 'OD1RS3AhLV6ODfQ81KhsBDUi.jpg', '314959578966', 6, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('888885', 'Hf1SeIn0TjGH8woYjFnHuZiN.png', '314959578966', 4, '2024-09-07 04:17:08', '2024-09-07 04:17:08'),
('892343', 'mDKXqz5l8MMRXISHfaSav30s.jpg', '374227501356', 3, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('901562', '36rILl4hhotNN3F2fnlN7HK9.jpg', '251257837812', 3, '2024-09-07 04:24:37', '2024-09-07 04:24:37'),
('908255', 'z4HdlhdgcCNw9jnDFSk0h8M2.jpg', '374227501356', 6, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('910302', 'L8yFihOI5GwLd7AegGNyYM0u.jpg', '374227501356', 17, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('920733', 'q0JH7hPKwuXsr8DPQY0S4yGi.jpg', '374227501356', 7, '2024-09-07 05:29:06', '2024-09-07 05:29:06'),
('925839', '9L4V2BdCNRL6MlIeSYCOzalP.png', '681446473777', 2, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('951588', 'C4S4HVqn9BwbHiqxKmRnkbwV.jpg', '679309917865', 6, '2024-09-07 05:54:23', '2024-09-07 05:54:23'),
('981349', 'sTBDmocNmbPu31J3O6PSRyDf.jpg', '681446473777', 7, '2024-09-07 05:33:41', '2024-09-07 05:33:41'),
('995989', '6XKrxbCLwSx1GoYpWS8pMFTd.JPG', '876148182644', 9, '2024-09-07 02:28:16', '2024-09-07 02:28:42');

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
('824907', 'Airich Jay', 'Sevilla', 'Diawan', 'Male', '2003-04-23', 'airichjaydiawan@gmail.com', 'adiawan', '967 764 4695', '$2y$12$0yvf43PEvEq.Xc7/F/s3ouzn1t8yyfI9wOR/zk4.tGAs120GjGQai', 'gKX59iILLQTD0lwQ0MtDmUxF.jpg', '20000', '478189', 'Entry-level Web Developer', '2024-06-22 18:41:41', '2024-09-12 09:55:09');

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
('326635043035', '824907', 'Wishlist 1', '2024-09-09 01:02:10', '2024-09-09 01:02:10');

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
('149365', '326635043035', '374227501356', '2024-09-10 21:58:43', '2024-09-10 21:58:43'),
('219873', '326635043035', '876148182644', '2024-09-10 21:30:02', '2024-09-10 21:30:02'),
('440423', '326635043035', '251257837812', '2024-09-10 21:50:07', '2024-09-10 21:50:07'),
('520358', '326635043035', '314959578966', '2024-09-10 21:29:53', '2024-09-10 21:29:53'),
('722548', '326635043035', '681446473777', '2024-09-10 21:54:22', '2024-09-10 21:54:22'),
('853902', '326635043035', '679309917865', '2024-09-09 01:02:10', '2024-09-09 01:02:10');

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
  ADD KEY `published_properties_developer_foreign` (`developer`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `client_prefered_locations`
--
ALTER TABLE `client_prefered_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=342;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
-- Constraints for table `published_properties`
--
ALTER TABLE `published_properties`
  ADD CONSTRAINT `published_properties_developer_foreign` FOREIGN KEY (`developer`) REFERENCES `property_developers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `published_properties_property_type_foreign` FOREIGN KEY (`property_type`) REFERENCES `property_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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