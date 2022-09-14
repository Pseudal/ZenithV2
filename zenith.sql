-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 27 août 2022 à 22:35
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `zenith`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `categorie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `categorie`) VALUES
(1, 'Conseil'),
(2, 'Marketing'),
(3, 'Design'),
(4, 'Rédaction'),
(5, 'Photographie'),
(6, 'Vidéo'),
(7, 'Webmarketing'),
(8, 'Création de contenus'),
(9, 'Référencement'),
(10, 'Publicité');

-- --------------------------------------------------------

--
-- Structure de la table `chiffres`
--

CREATE TABLE `chiffres` (
  `id` int(11) NOT NULL,
  `collab` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `digital` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `chiffres`
--

INSERT INTO `chiffres` (`id`, `collab`, `digital`, `photo`, `video`) VALUES
(1, '500', '125', '752', '388');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `secteur_id` int(11) NOT NULL,
  `nom_client` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `histoire` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `enjeu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reponse` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `elementprecision` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temoignage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `debut` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `mission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `secteur_id`, `nom_client`, `logo`, `updated_at`, `histoire`, `enjeu`, `reponse`, `elementprecision`, `temoignage`, `debut`, `fin`, `mission`, `duree`) VALUES
(1, 14, 'Twitter', 'twitter-6301800c83df7177987990.png', '2022-08-21 02:45:00', NULL, NULL, NULL, NULL, NULL, '2022-08-14', '2022-08-20', 'Lorem', NULL),
(2, 13, 'Paypal', 'pay-pal-630180f4559ac943469861.png', '2022-08-21 02:48:52', '<p>Lorem ipsum dolor sit amet. Et rerum ipsum corrupti nostrum aut quaerat velit qui consequatur magnam est amet odit qui aspernatur dolorem sed repellendus consequatur! Est modi quos et atque fugit 33 magni suscipit et voluptates deserunt vel nesciunt co', '<p>Non iure porro qui sequi vel dolore necessitatibus et autem alias? Quo deleniti atque At quaerat tempore numquam perspiciatis in voluptates necessitatibus. Aut doloribus necessitatibus ut ipsa iusto rem cumque mollitia? Ad dicta voluptatem aut modi gal', '<p>Aut enim ipsam cum inventore deleniti sed temporibus rerum eos dolor illum ab quia veniam id dolorem harum. Eum ipsum magnam et dolor cumque At dolores incidunt cumque internos.</p>', '<p>Lorem ipsum dolor sit amet. Aut tempora culpa ad nemo modi et impedit ipsam. Sit facere odit ut commodi voluptatum 33 voluptas fugit ab tenetur doloremque.</p>', '<p>Lorem ipsum dolor sit amet. Nam consequatur repudiandae eos culpa dolore et incidunt saepe aut omnis quas 33 tempore sint. Est dolor eius eum optio molestiae et natus laborum in laudantium eius?</p>', NULL, NULL, 'Ipsum', NULL),
(3, 2, 'Mcdonalds', 'mcdonalds-63018288a4b06802282781.png', '2022-08-21 02:55:36', NULL, NULL, NULL, NULL, '<p>Ea numquam quibusdam aut dolorem ullam eum quas ratione in galisum nobis in itaque rerum sed laborum molestias sed aliquid itaque. Et reprehenderit officiis qui dicta nihil ut suscipit nihil et tempore quia est possimus sunt ex sequi nesciunt ex omnis ', '2022-08-20', '2022-08-20', 'Meilleur burger', NULL),
(4, 12, 'Adidas', 'adidas-630183e8da46e059427670.png', '2022-08-21 03:01:28', NULL, '<p>In natus voluptatem aut maiores autem aut tempore natus et sint distinctio! Est nemo debitis vel magni impedit aut dolore cupiditate vel numquam recusandae ut quas deleniti. Sit maiores magnam qui voluptas quia ut architecto sint id accusamus iusto et<', '<p>Ea quam voluptate qui quos minus et pariatur quod? Vel Quis deserunt eum ipsum omnis aut eaque neque. Ad reprehenderit debitis est sint quia est nisi incidunt in provident earum et accusamus harum sit provident rerum et neque nulla.</p>', NULL, NULL, '2022-08-20', '2022-08-20', 'MOI JE VEUX LES CHAUSSURES!', NULL),
(5, 7, 'DHL', 'dhl-630184a75af5e830729089.png', '2022-08-21 03:04:39', NULL, NULL, NULL, '<p>Et libero minima et cupiditate porro cum saepe quas et eligendi minus rem libero voluptates id ratione tenetur. Et suscipit perspiciatis ut dolore beatae est quia quia omnis rerum. Vel consequatur accusamus sit dolore officia ab rerum harum aut ducimus', NULL, NULL, NULL, 'Pas d\'idée', NULL),
(6, 9, 'TripAdvisor', 'tripadvisor-630188346b4cf690120453.png', '2022-08-21 03:19:48', '<p>dhjbfskqhjfbsjwkqlwdcsjnhcw</p><p>hdfsjcxn ,w</p>', NULL, NULL, '<h1>Text</h1><p>texte en petit</p><p>j\'ai plus d\'idée et flemme de ctrl c ctrl v</p>', NULL, NULL, NULL, 'Mission principale', '1000j');

-- --------------------------------------------------------

--
-- Structure de la table `client_categorie`
--

CREATE TABLE `client_categorie` (
  `client_id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `client_categorie`
--

INSERT INTO `client_categorie` (`client_id`, `categorie_id`) VALUES
(1, 1),
(2, 4),
(3, 1),
(3, 5),
(4, 3),
(5, 7),
(5, 8),
(6, 6),
(6, 8);

-- --------------------------------------------------------

--
-- Structure de la table `client_image`
--

CREATE TABLE `client_image` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `header` tinyint(1) NOT NULL DEFAULT 0,
  `secondaire` tinyint(1) NOT NULL DEFAULT 0,
  `imageprecision` tinyint(1) NOT NULL DEFAULT 0,
  `visible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `custom_web_site_img`
--

CREATE TABLE `custom_web_site_img` (
  `id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `custom_web_site_text`
--

CREATE TABLE `custom_web_site_text` (
  `id` int(11) NOT NULL,
  `texte` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220821000231', '2022-08-21 02:17:09', 330),
('DoctrineMigrations\\Version20220821010745', '2022-08-21 03:11:50', 44),
('DoctrineMigrations\\Version20220821152555', '2022-08-21 17:26:22', 576),
('DoctrineMigrations\\Version20220822084633', '2022-08-22 10:46:39', 1695),
('DoctrineMigrations\\Version20220822170254', '2022-08-22 19:03:01', 367),
('DoctrineMigrations\\Version20220827203151', '2022-08-27 22:32:09', 2323);

-- --------------------------------------------------------

--
-- Structure de la table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `new` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `emails`
--

INSERT INTO `emails` (`id`, `email`, `new`) VALUES
(1, 'Email@email.com', 0),
(2, 'Email@email.com2', 0);

-- --------------------------------------------------------

--
-- Structure de la table `footer`
--

CREATE TABLE `footer` (
  `id` int(11) NOT NULL,
  `adresse` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `footer`
--

INSERT INTO `footer` (`id`, `adresse`, `email`, `tel`) VALUES
(1, '48 rue lorem', 'lorem@lorem.fr', '06.06.06.06.06');

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `secteur_id` int(11) NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `projet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `demande` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `defi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `focus` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temoignage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `debut` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `duree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `client_id`, `secteur_id`, `logo`, `projet`, `description`, `mission`, `demande`, `defi`, `action`, `focus`, `temoignage`, `updated_at`, `debut`, `fin`, `duree`) VALUES
(1, 4, 3, 'adidas-63018887e7fe2791687497.png', 'Projet', '<h1>Gros text</h1><h1>petit text</h1>', 'abcde', NULL, NULL, NULL, NULL, NULL, '2022-08-21 03:21:11', '2022-08-20', '2022-08-20', '500j'),
(2, NULL, 8, 'xiaomi-630188dda5786880410694.png', 'Projet sans client', NULL, 'texte ici', NULL, NULL, NULL, '<p>FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p><p>OOOOOOOOOOOOOOOOOOOOOOOOO</p><p>CCCCCCCCCCCCCCCCCCCCCCCCCCCC</p><p>UUUUUUUUUUUUUUUUUUUUUUUUUUUU</p><p>SSSSSSSSSSSSSSSSSSSSSSSSSSSS</p>', NULL, '2022-08-21 03:22:37', '2022-08-03', NULL, NULL),
(3, 3, 5, NULL, 'un dernier, j\'en ai marre', NULL, 'pas de logo', '<p>histoire</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', NULL, '2022-08-19', '2022-08-14', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `projet_categorie`
--

CREATE TABLE `projet_categorie` (
  `projet_id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet_categorie`
--

INSERT INTO `projet_categorie` (`projet_id`, `categorie_id`) VALUES
(1, 3),
(1, 10),
(2, 6),
(3, 2),
(3, 8);

-- --------------------------------------------------------

--
-- Structure de la table `projet_image`
--

CREATE TABLE `projet_image` (
  `id` int(11) NOT NULL,
  `projet_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `header` tinyint(1) NOT NULL DEFAULT 0,
  `secondaire` tinyint(1) NOT NULL DEFAULT 0,
  `focus` tinyint(1) NOT NULL DEFAULT 0,
  `visible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet_image`
--

INSERT INTO `projet_image` (`id`, `projet_id`, `image`, `updated_at`, `header`, `secondaire`, `focus`, `visible`) VALUES
(1, 1, '1j4a0136-6303bf298ee52818265000.jpg', '2022-08-22 19:38:49', 0, 0, 0, 1),
(2, 1, '1j4a0363-6303bf2cd8da5553277705.jpg', '2022-08-22 19:38:52', 0, 0, 0, 1),
(3, 1, '1j4a4181-1-6303bf2fe8788662042780.jpg', '2022-08-22 19:38:55', 0, 0, 0, 1),
(4, 1, '1j4a5009-1-6303bf32d6520460115940.jpg', '2022-08-22 19:38:58', 0, 0, 0, 1),
(5, 1, '1j4a5818-6303bf35cf0db709263149.jpg', '2022-08-22 19:39:01', 0, 0, 0, 1),
(6, 1, '1j4a7170-6303bf38e97c2686059072.jpg', '2022-08-22 19:39:04', 0, 0, 0, 1),
(7, 1, '1j4a9693-6303bf3bc9d9e537659680.jpg', '2022-08-22 19:39:07', 0, 0, 0, 1),
(8, 1, '1j4a9796-6303bf3f3e8d0753657964.jpg', '2022-08-22 19:39:11', 0, 0, 0, 1),
(9, 1, '1j4a9801-6303bf42d972e915947847.jpg', '2022-08-22 19:39:14', 0, 0, 0, 1),
(10, 1, '1j4a9924-6303bf45c4d67917003944.jpg', '2022-08-22 19:39:17', 0, 0, 0, 1),
(11, 1, 'dia-0242-6303bf4899500677663777.jpg', '2022-08-22 19:39:20', 0, 0, 0, 1),
(12, 1, 'dia-0301-6303bf49dd0e8532954510.jpg', '2022-08-22 19:39:21', 0, 0, 0, 1),
(13, 1, 'dia-0750-6303bf4b5f98e277600509.jpg', '2022-08-22 19:39:23', 0, 0, 0, 1),
(14, 1, 'dia-0851-6303bf4d10c69942282404.jpg', '2022-08-22 19:39:25', 0, 0, 0, 1),
(15, 1, 'dia-1090-6303bf4e586e3995995506.jpg', '2022-08-22 19:39:26', 0, 0, 0, 1),
(16, 1, 'dia-1192-6303bf4f8d833004083678.jpg', '2022-08-22 19:39:27', 0, 0, 0, 1),
(17, 1, 'img-0758-6303bf50f2d16361832410.jpg', '2022-08-22 19:39:29', 0, 0, 0, 1),
(18, 1, 'img-1027-6303bf538531c121666643.jpg', '2022-08-22 19:39:31', 0, 0, 0, 1),
(19, 1, 'img-3442-6303bf569f215466559341.jpg', '2022-08-22 19:39:34', 0, 0, 0, 1),
(20, 1, 'img-3450-6303bf5a11658529762707.jpg', '2022-08-22 19:39:38', 0, 0, 0, 1),
(21, 1, 'img-3483-6303bf5d51da3768083734.jpg', '2022-08-22 19:39:41', 0, 0, 0, 1),
(22, 1, 'img-3589-6303bf60906bd355982407.jpg', '2022-08-22 19:39:44', 0, 0, 0, 1),
(23, 1, 'img-7385-6303bf6427846439192188.jpg', '2022-08-22 19:39:48', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `secteur`
--

CREATE TABLE `secteur` (
  `id` int(11) NOT NULL,
  `secteur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `secteur`
--

INSERT INTO `secteur` (`id`, `secteur`) VALUES
(1, 'Jeux vidéo'),
(2, 'Restauration'),
(3, 'Agroalimentaire'),
(4, 'Imprimerie'),
(5, 'Chimie'),
(6, 'Communication'),
(7, 'Logistique'),
(8, 'Électronique'),
(9, 'BTP'),
(10, 'pharmaceutique'),
(11, 'Métallurgie'),
(12, 'Textile'),
(13, 'Commerce'),
(14, 'Social');

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'admin', '[\"ROLE_ADMIN\"]', '$2y$13$fGXgWCW7HJFdhCESoC0DAentmoaykLoUQZNvvNS.qOMD477df7s6C'),
(2, 'test', '[\"ROLE_ADMIN\"]', '$2y$13$AdvYr05sVrWLKcfpp1zTEOkumnQ3D7ywurPxw56ShXcr3xcyV48FW');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `chiffres`
--
ALTER TABLE `chiffres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C74404559F7E4405` (`secteur_id`);

--
-- Index pour la table `client_categorie`
--
ALTER TABLE `client_categorie`
  ADD PRIMARY KEY (`client_id`,`categorie_id`),
  ADD KEY `IDX_A25D063B19EB6921` (`client_id`),
  ADD KEY `IDX_A25D063BBCF5E72D` (`categorie_id`);

--
-- Index pour la table `client_image`
--
ALTER TABLE `client_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_665098E819EB6921` (`client_id`);

--
-- Index pour la table `custom_web_site_img`
--
ALTER TABLE `custom_web_site_img`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `custom_web_site_text`
--
ALTER TABLE `custom_web_site_text`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_50159CA919EB6921` (`client_id`),
  ADD KEY `IDX_50159CA99F7E4405` (`secteur_id`);

--
-- Index pour la table `projet_categorie`
--
ALTER TABLE `projet_categorie`
  ADD PRIMARY KEY (`projet_id`,`categorie_id`),
  ADD KEY `IDX_6A8331E0C18272` (`projet_id`),
  ADD KEY `IDX_6A8331E0BCF5E72D` (`categorie_id`);

--
-- Index pour la table `projet_image`
--
ALTER TABLE `projet_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6E9BEBE9C18272` (`projet_id`);

--
-- Index pour la table `secteur`
--
ALTER TABLE `secteur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `chiffres`
--
ALTER TABLE `chiffres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `client_image`
--
ALTER TABLE `client_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `custom_web_site_img`
--
ALTER TABLE `custom_web_site_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `custom_web_site_text`
--
ALTER TABLE `custom_web_site_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `projet_image`
--
ALTER TABLE `projet_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `secteur`
--
ALTER TABLE `secteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `FK_C74404559F7E4405` FOREIGN KEY (`secteur_id`) REFERENCES `secteur` (`id`);

--
-- Contraintes pour la table `client_categorie`
--
ALTER TABLE `client_categorie`
  ADD CONSTRAINT `FK_A25D063B19EB6921` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A25D063BBCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `client_image`
--
ALTER TABLE `client_image`
  ADD CONSTRAINT `FK_665098E819EB6921` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `FK_50159CA919EB6921` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_50159CA99F7E4405` FOREIGN KEY (`secteur_id`) REFERENCES `secteur` (`id`);

--
-- Contraintes pour la table `projet_categorie`
--
ALTER TABLE `projet_categorie`
  ADD CONSTRAINT `FK_6A8331E0BCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_6A8331E0C18272` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `projet_image`
--
ALTER TABLE `projet_image`
  ADD CONSTRAINT `FK_6E9BEBE9C18272` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
