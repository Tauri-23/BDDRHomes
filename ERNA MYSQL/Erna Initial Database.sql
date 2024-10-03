-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2024 at 05:17 PM
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
(74, '2024_07_12_042824_create_published_properties_table', 48);

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
(10, 'App\\Models\\user_clients', 0, 'main', 'f3d3706a7eb95ac63098d49f68a9ace84198fc7d3323634feea448d59f0763ae', '[\"*\"]', NULL, NULL, '2024-06-23 18:41:41', '2024-06-23 18:41:41');

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
('593013', '918078844222', NULL, '2024-10-02 04:19:20', '2024-10-02 04:19:20');

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
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=407;

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
