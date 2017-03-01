-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2017 at 12:47 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guesssong`
--

-- --------------------------------------------------------

--
-- Table structure for table `youtube`
--

CREATE TABLE `youtube` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `artist` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `language` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `likecount` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `dislikecount` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `createby` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `createdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateby` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updatedate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isvalid` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `youtube`
--

INSERT INTO `youtube` (`id`, `code`, `link`, `title`, `artist`, `language`, `likecount`, `dislikecount`, `createby`, `createdate`, `updateby`, `updatedate`, `isvalid`) VALUES
(1, 'default', 'default', 'default', 'default', 'NU', 1, 0, 'Chin', '2017-03-01 10:23:55', '', '2017-03-01 03:23:55', 1),
(2, 'QyhrOruvT1c', 'https://www.youtube.com/watch?v=QyhrOruvT1c', 'อ้าว - Atom ชนกันต์', 'Atom ชนกันต์', 'TH', 98, 0, 'Chin', '2017-03-01 10:36:22', NULL, '2017-03-01 03:36:22', 1),
(3, 'PTR-ad3pLQU', 'https://www.youtube.com/watch?v=PTR-ad3pLQU', 'ไม่เดียงสา', 'BIG ASS', 'TH', 1, 0, 'Chin', '2017-03-01 16:23:42', NULL, '2017-03-01 09:23:42', 1),
(4, 'Jt8SMztJrx8', 'https://www.youtube.com/watch?v=Jt8SMztJrx8', 'รักกินไม่ได้', 'สงกรานต์ รังสรรค์', 'un', 1, 0, 'Chin', '2017-03-01 16:34:33', NULL, '2017-03-01 09:34:33', 1),
(5, 'E6TWhzCwvYo', 'https://www.youtube.com/watch?v=E6TWhzCwvYo', 'หน้าหนาวที่แล้ว', 'The TOYS', 'TH', 1, 0, 'Chin', '2017-03-01 16:49:12', NULL, '2017-03-01 09:49:12', 1),
(6, 'E6TWhzCwvYo', 'https://www.youtube.com/watch?v=E6TWhzCwvYo', 'หน้าหนาวที่แล้ว', 'The TOYS', 'TH', 1, 0, 'Chin', '2017-03-01 16:49:22', NULL, '2017-03-01 09:49:22', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `youtube`
--
ALTER TABLE `youtube`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `youtube`
--
ALTER TABLE `youtube`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
