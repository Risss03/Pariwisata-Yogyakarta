-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Bulan Mei 2024 pada 05.07
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yogyakarta_pariwisata`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pariwisata`
--

CREATE TABLE `pariwisata` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `deskripsi_gambar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pariwisata`
--

INSERT INTO `pariwisata` (`id`, `judul`, `deskripsi`, `gambar`, `deskripsi_gambar`) VALUES
(3, 'JOgja', 'desk edit', '1716940746810-20190818115802_IMG_1693.jpg', 'desk gambar'),
(10, 'contoj', 'kdnskndsknksknd', '1716949803908-IMG_0827.jpg', 'deskk gambar'),
(11, 'JOgja22', 'All images\r\nYogyakarta\r\nAll images\r\nYogyakarta is the capital city of the Special Region of Yogyakarta in Indonesia, in the south-central part of the island of Java. As the only Indonesian royal city still ruled by a monarchy, Yogyakarta is regarded as an important centre for classical Javanese fine arts and culture such as ballet, batik textiles, drama, literature, music, poetry, silversmithing, visual arts, and wayang puppetry. Renowned as a centre of Indonesian education, Yogyakarta is home to a large student population and dozens of schools and universities, including Gadjah Mada University, the country\'s largest institute of higher education and one of its most prestigious.', '1716950897560-Screenshot 2024-03-20 141535.png', 'All images\r\nYogyakarta\r\nAll images\r\nYogyakarta is the capital city of the Special Region of Yogyakarta in Indonesia, in the south-central part of the island of Java. As the only Indonesian royal city still ruled by a monarchy, Yogyakarta is regarded as an important centre for classical Javanese fine arts and culture such as ballet, batik textiles, drama, literature, music, poetry, silversmithing, visual arts, and wayang puppetry. Renowned as a centre of Indonesian education, Yogyakarta is home to a large student population and dozens of schools and universities, including Gadjah Mada University, the country\'s largest institute of higher education and one of its most prestigious.'),
(12, 'ffdfd', 'Berikut ini 69 tempat wisata Jogja & sekitarnya yang paling populer berdasarkan data trafik situs YogYes.com 3 bulan terakhir. 1. Candi Borobudur. Dibangun pada abad ke-9, Candi Borobudur sekarang menjadi magnet yang mampu menarik jutaan', '1716951109776-20190818115802_IMG_1693.jpg', 'Berikut ini 69 tempat wisata Jogja & sekitarnya yang paling populer berdasarkan data trafik situs YogYes.com 3 bulan terakhir. 1. Candi Borobudur. Dibangun pada abad ke-9, Candi Borobudur sekarang menjadi magnet yang mampu menarik jutaan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `pariwisata_id` int(11) DEFAULT NULL,
  `user` varchar(255) NOT NULL,
  `komentar` text NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `reviews`
--

INSERT INTO `reviews` (`id`, `pariwisata_id`, `user`, `komentar`, `rating`) VALUES
(1, 12, 'tiara', 'biasa aja', 4);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pariwisata`
--
ALTER TABLE `pariwisata`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pariwisata_id` (`pariwisata_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pariwisata`
--
ALTER TABLE `pariwisata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`pariwisata_id`) REFERENCES `pariwisata` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
