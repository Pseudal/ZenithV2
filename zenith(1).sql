-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 07 déc. 2022 à 23:07
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
(1, 'cat1'),
(2, 'cat2'),
(3, 'cat3'),
(4, 'cat4'),
(5, 'cat5'),
(6, 'cat6'),
(7, 'cat7'),
(8, 'cat8');

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
(1, 4, 'Garnier', 'isaac-0-63910060a75e9681189908.webp', '2022-12-07 22:06:40', '<p>histoire</p>', '<p>enjeu</p>', '<p>reponse</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-04', '2022-12-29', 'Mission principale', '400j'),
(2, 4, 'Garnier', 'isaac-0-63910060a75e9681189908.webp', '2022-12-07 22:06:40', '<p>histoire</p>', '<p>enjeu</p>', '<p>reponse</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-04', '2022-12-29', 'Mission principale', '400j'),
(3, 4, 'Garnier', 'isaac-0-63910060a75e9681189908.webp', '2022-12-07 22:06:40', '<p>histoire</p>', '<p>enjeu</p>', '<p>reponse</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-04', '2022-12-29', 'Mission principale', '400j');

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
(1, 2),
(2, 3),
(3, 8);

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
('DoctrineMigrations\\Version20221207205507', '2022-12-07 21:55:27', 12800);

-- --------------------------------------------------------

--
-- Structure de la table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `new` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 1, 3, 'png-clipart-girl-anime-character-illustration-miss-kobayashi-s-dragon-maid-youtube-kamuy-minecraft-youtube-child-manga-639100bd66c88380334710.png', 'projet', '<p>Ceci est la description du projet</p>', 'Mission principale', '<p>demande</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', '2022-12-07 22:08:13', '2022-12-04', '2022-12-15', '500j'),
(2, 1, 3, 'a9a76a3d7c8347f05ad3cf3c8fb08b7a-63910c17a5892884097276.png', 'projet', '<p>Ceci est la description du projet</p>', 'Mission principale', '<p>demande</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', '2022-12-07 22:56:39', '2022-12-03', '2022-12-14', '500j'),
(3, 1, 2, 'telecharge-1-63910c3400b18026037018.png', 'projet', '<p>Ceci est la description du projet</p>', 'Mission principale', '<p>demande</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', '2022-12-07 22:57:08', '2022-12-03', '2022-12-14', '500j');

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
(1, 4),
(2, 5),
(3, 5);

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
  `visible` tinyint(1) NOT NULL DEFAULT 1,
  `creation` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet_image`
--

INSERT INTO `projet_image` (`id`, `projet_id`, `image`, `updated_at`, `header`, `secondaire`, `focus`, `visible`, `creation`) VALUES
(1, 1, '2896636094-preview-real-no-spoil-censor2-639105a460d46279286196.jpg', '2022-12-07 22:29:08', 0, 0, 0, 1, 0),
(2, 1, 'stephen-walker-unsplash-639106765a691109389985.jpg', '2022-12-07 22:32:38', 0, 0, 0, 1, 0),
(3, 1, 'test-639106777fbf0732201173.jpg', '2022-12-07 22:32:39', 0, 0, 0, 1, 0),
(4, 1, 'pexels-photo-2387793-63910679bd666725376226.jpeg', '2022-12-07 22:32:41', 0, 0, 0, 1, 0),
(5, 1, 'pexels-photo-12568038-6391067a813e0782747371.webp', '2022-12-07 22:32:42', 0, 0, 0, 1, 0),
(6, 1, 'pexels-photo-11943277-6391067b8ee0d182635528.webp', '2022-12-07 22:32:43', 0, 0, 0, 1, 1),
(7, 1, 'pexels-photo-12666299-6391067ca16c0155368201.jpeg', '2022-12-07 22:32:44', 0, 0, 0, 1, 0),
(8, 1, 'pexels-photo-12632089-6391067d7ee29493260782.jpeg', '2022-12-07 22:32:45', 1, 0, 0, 1, 0),
(9, 1, 'pexels-photo-12488388-6391067e2c8af305819766.jpeg', '2022-12-07 22:32:46', 0, 0, 0, 1, 0);

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
(1, 'Voiture'),
(2, 'moto'),
(3, 'video'),
(4, 'location'),
(5, 'truc');

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
(1, 'admin', '[\"ROLE_ADMIN\"]', '$2y$13$37sWf0zld07laWxUKNe0eOvrmcsKPuxNXOG9S7hflo/RT3UiDJQWa');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `chiffres`
--
ALTER TABLE `chiffres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `secteur`
--
ALTER TABLE `secteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
