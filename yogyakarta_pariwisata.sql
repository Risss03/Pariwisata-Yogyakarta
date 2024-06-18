-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Jun 2024 pada 17.15
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
  `judul` varchar(50) NOT NULL,
  `deskripsi` text NOT NULL,
  `kabupaten` varchar(50) NOT NULL,
  `fasilitas` varchar(400) NOT NULL,
  `hargaTiket` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `latitude` varchar(50) NOT NULL,
  `longitude` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pariwisata`
--

INSERT INTO `pariwisata` (`id`, `judul`, `deskripsi`, `kabupaten`, `fasilitas`, `hargaTiket`, `lokasi`, `gambar`, `latitude`, `longitude`) VALUES
(14, 'Candi Prambanan', 'Candi Prambanan adalah candi Hindu terbesar di Indonesia yang terletak di perbatasan propinsi Daerah Istimewa Yogyakarta dan Jawa Tengah. Candi ini terdiri dari kompleks percandian yang berisi lebih dari 240 candi, termasuk candi utama seperti Candi Siwa, Candi Wisnu, Candi Brahma, Candi Nandi, Candi Angsa, dan Candi Garuda. Candi Prambanan juga memiliki legenda yang terkait dengan Roro Jonggrang, seorang dara yang jangkung putri Prabu Boko.', 'Sleman', 'Candi Prambanan memiliki beberapa fasilitas, seperti museum, toko souvenir, dan area parkir.', '- Dewasa (Warga Indonesia): Rp 40.000\r\n- Anak-anak (Usia 5-12 tahun, Warga Indonesia): Rp 20.000\r\n- Dewasa (Wisatawan Asing): Rp 100.000\r\n- Anak-anak (Usia 5-12 tahun, Wisatawan Asing): Rp 60.000', 'Lokasi Candi Prambanan berada di Jalan Raya Solo-Yogyakarta Nomor 16, Kranggan, Bokoharjo, Kecamatan Prambanan, Kebupaten Sleman, Daerah Istimewa Yogyakarta 55571. Candi ini terletak di perbatasan Daerah Istimewa Yogyakarta dan Klaten, dengan jarak 17 kil', '1718538742912-Candi Prambanan.jpg', '-7.752020', ' 110.491465'),
(15, 'Kaliurang', 'Kaliurang adalah sebuah kawasan wisata yang terletak di lereng Gunung Merapi, Kabupaten Sleman, Daerah Istimewa Yogyakarta. Kawasan ini menawarkan berbagai aktivitas menarik, seperti berbagai miniatur landmark dari seluruh dunia di The World Landmarks Merapi Park, belajar tentang sejarah Gunung Merapi di Bunker Kaliadem, dan menikmati pemandangan alam yang indah di Taman Bunga Matahari Helio Garden.', 'Sleman', 'Kaliurang dilengkapi dengan berbagai fasilitas seperti hotel, villa, guest house, restoran, warung makan, area parkir, dan toko suvenir. Di sekitar kawasan ini, terdapat juga berbagai wahana dan atraksi wisata seperti Jeep Merapi, Kaliadem, Pasar Sapi Kaliurang, dan Tlogo Putri. Selain itu, pengunjung juga dapat menikmati berbagai kegiatan seperti trekking, hiking, off-road, dan camping.', 'Weekdays: Rp 20.000 Weekends: Rp 22.000', 'Jalan Kaliurang, Km 20, Sawungan, Hargobinangun, Kecamatan Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta', '1718538598396-Kaliurang.jpg', '-7.5988019', '110.426360'),
(18, 'Taman Pintar ', 'Taman Pintar adalah taman rekreasi interaktif yang terletak di pusat Kota Yogyakarta, Indonesia. Dirancang sebagai tempat edukasi yang menyenangkan bagi anak-anak dan keluarga, Taman Pintar menawarkan berbagai wahana dan aktivitas yang menggabungkan pendidikan dengan hiburan. Pengunjung dapat menikmati pengalaman belajar yang interaktif melalui eksperimen sains, simulasi, dan permainan yang menarik.', 'Sleman', 'Taman Pintar dilengkapi dengan berbagai fasilitas termasuk area parkir, toilet umum, area istirahat, dan tempat makan. Di dalam taman, terdapat berbagai zona interaktif yang mencakup topik-topik seperti sains, teknologi, lingkungan, seni, dan budaya. Pengunjung dapat mengikuti berbagai eksperimen, demonstrasi, dan permainan edukatif yang dipandu oleh staf taman', 'Rp 3.000 - Rp 45.000.', 'Jl. Panembahan Senopati No.1-3, Ngupasan, Gondomanan, Yogyakarta, Daerah Istimewa Yogyakarta.', '1718541653768-Taman Pintar.jpg', '-7.80', '110.365'),
(19, 'Ullen Sentalu ', 'Ullen Sentalu adalah sebuah museum yang terletak di Kabupaten Sleman, Daerah Istimewa Yogyakarta, Indonesia. Museum ini terkenal karena koleksi seni dan budaya Jawa yang berharga, termasuk artefak, lukisan, patung, dan benda-benda bersejarah lainnya. Ullen Sentalu memberikan pengunjungnya pengalaman yang mendalam tentang kekayaan budaya Jawa, dengan penekanan pada sejarah keluarga kerajaan dan kehidupan masyarakat Jawa.', 'Sleman', ': Ullen Sentalu dilengkapi dengan berbagai fasilitas termasuk area parkir, kafe, toko suvenir, dan area istirahat. Museum ini juga menawarkan tur panduan yang dipandu oleh pemandu yang berpengetahuan tentang koleksi dan sejarah museum. Pengunjung dapat menikmati pemandangan indah dari taman yang terawat dengan baik di sekitar museum.', 'antara Rp 50.000 - Rp 100.000 per orang untuk wisatawan domestik, dan sekitar Rp 150.000 - Rp 200.000 per orang untuk wisatawan asing.', 'Ullen Sentalu terletak di Jl. Boyong Km. 25, Kaliurang Barat, Hargobinangun, Kabupaten Sleman, Daerah Istimewa Yogyakarta, Indonesia. Lokasinya sekitar 30 kilometer dari pusat Kota Yogyakarta, dan dapat dijangkau dengan mudah menggunakan kendaraan pribadi', '1718544203828-Ullen Sentalu.jpg', '-7.597973', '110.423174'),
(20, 'Candi Sambisari', 'Candi Sambisari adalah sebuah candi Hindu yang tersembunyi di tengah persawahan, tepatnya di Kabupaten Sleman, Daerah Istimewa Yogyakarta, Indonesia. Candi ini ditemukan secara tidak sengaja pada tahun 1966 ketika sedang dilakukan penggalian untuk pembuatan saluran irigasi. Candi Sambisari merupakan salah satu peninggalan budaya Hindu yang langka dan menarik untuk dikunjungi oleh wisatawan yang mencari pengalaman sejarah dan arkeologi yang unik.', 'Sleman', 'Candi Sambisari memiliki beberapa fasilitas seperti area parkir, toilet umum, dan area istirahat. Di sekitar candi, terdapat juga warung-warung kecil yang menjual makanan dan minuman ringan.', 'Harga tiket masuk ke Candi Sambisari relatif terjangkau, biasanya sekitar Rp 10.000 - Rp 20.000 per orang untuk wisatawan domestik, dan sekitar Rp 50.000 - Rp 100.000 per orang untuk wisatawan asing. Namun, harga ini dapat berubah tergantung pada kebijaka', 'Candi Sambisari terletak di Desa Purwomartani, Kecamatan Kalasan, Kabupaten Sleman, Daerah Istimewa Yogyakarta, Indonesia. Lokasinya sekitar 10 kilometer dari pusat Kota Yogyakarta', '1718586931025-Candi Sambisari.jpg', '-7.76289', '110.44689'),
(21, 'Pantai Parangtritis', 'Pantai Parangtritis adalah sebuah tempat wisata yang terletak di Kalurahan Parangtritis, Kecamatan Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta. Jaraknya sekitar 27 km dari pusat kota Yogyakarta. Pantai ini memiliki keindahan alam yang unik, termasuk hamparan pasir yang luas, pemandangan laut yang terbuka, dan gumuk pasir yang cocok untuk latar belakang foto.', 'Bantul', 'Warung makan, penyewaan perahu, area bermain anak, penginapan', 'Gratis (parkir kendaraan berbayar)', 'Desa Parangtritis, Kecamatan Kretek, Bantul, DIY', '1718587225659-OIP.jpeg', '-8.010057', '110.313009'),
(22, 'Kebun Buah Mangunan', 'Kebun Buah Mangunan adalah sebuah objek wisata yang terletak di Desa Mangunan, Jalan Imogiri-Dlingo, Sukorame, Mangunan, Kecamatan Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta. Wisata ini dikenal dengan julukan \"negeri di atas awan\" karena pemandangannya yang sangat indah dan mempesona.', 'Bantul', 'Area parkir, area bermain anak, warung makan, toilet', 'Gratis (ada biaya untuk memetik buah)', 'Dusun Muntuk, Desa Dlingo, Kecamatan Bantul, Bantul, DIY', '1718587479237-OIP (1).jpeg', '-7.833333', '110.416667');

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
(2, 15, 'asti', 'bagus', 5),
(3, 19, 'tiara', 'baguss', 5),
(5, 15, 'indra', 'seruuu sekali', 5),
(7, 20, 'muti', 'pemandangan bagus', 5),
(8, 22, 'nisa', 'sangat luas', 5),
(9, 21, 'andi', 'pantai nya bersih', 5),
(10, 18, 'naura', 'bagus untuk anak anak', 5),
(11, 18, 'tiara', 'baguss', 5);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
