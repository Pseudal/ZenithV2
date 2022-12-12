<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221207205507 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, categorie VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE chiffres (id INT AUTO_INCREMENT NOT NULL, collab VARCHAR(255) NOT NULL, digital VARCHAR(255) NOT NULL, photo VARCHAR(255) NOT NULL, video VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, secteur_id INT NOT NULL, nom_client VARCHAR(255) NOT NULL, logo VARCHAR(255) DEFAULT NULL, updated_at DATETIME DEFAULT NULL, histoire VARCHAR(255) DEFAULT NULL, enjeu VARCHAR(255) DEFAULT NULL, reponse VARCHAR(255) DEFAULT NULL, elementprecision VARCHAR(255) DEFAULT NULL, temoignage VARCHAR(255) DEFAULT NULL, debut DATE DEFAULT NULL, fin DATE DEFAULT NULL, mission VARCHAR(255) NOT NULL, duree VARCHAR(255) DEFAULT NULL, INDEX IDX_C74404559F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client_categorie (client_id INT NOT NULL, categorie_id INT NOT NULL, INDEX IDX_A25D063B19EB6921 (client_id), INDEX IDX_A25D063BBCF5E72D (categorie_id), PRIMARY KEY(client_id, categorie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client_image (id INT AUTO_INCREMENT NOT NULL, client_id INT DEFAULT NULL, image VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL, header TINYINT(1) DEFAULT 0 NOT NULL, secondaire TINYINT(1) DEFAULT 0 NOT NULL, imageprecision TINYINT(1) DEFAULT 0 NOT NULL, visible TINYINT(1) DEFAULT 1 NOT NULL, INDEX IDX_665098E819EB6921 (client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE custom_web_site_img (id INT AUTO_INCREMENT NOT NULL, image VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE custom_web_site_text (id INT AUTO_INCREMENT NOT NULL, texte VARCHAR(255) NOT NULL, position VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE emails (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, new TINYINT(1) DEFAULT 1 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE footer (id INT AUTO_INCREMENT NOT NULL, adresse VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE projet (id INT AUTO_INCREMENT NOT NULL, client_id INT DEFAULT NULL, secteur_id INT NOT NULL, logo VARCHAR(255) DEFAULT NULL, projet VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, mission VARCHAR(255) NOT NULL, demande VARCHAR(255) DEFAULT NULL, defi VARCHAR(255) DEFAULT NULL, action VARCHAR(255) DEFAULT NULL, focus VARCHAR(255) DEFAULT NULL, temoignage VARCHAR(255) DEFAULT NULL, updated_at DATETIME DEFAULT NULL, debut DATE DEFAULT NULL, fin DATE DEFAULT NULL, duree VARCHAR(255) DEFAULT NULL, INDEX IDX_50159CA919EB6921 (client_id), INDEX IDX_50159CA99F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE projet_categorie (projet_id INT NOT NULL, categorie_id INT NOT NULL, INDEX IDX_6A8331E0C18272 (projet_id), INDEX IDX_6A8331E0BCF5E72D (categorie_id), PRIMARY KEY(projet_id, categorie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE projet_image (id INT AUTO_INCREMENT NOT NULL, projet_id INT DEFAULT NULL, image VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL, header TINYINT(1) DEFAULT 0 NOT NULL, secondaire TINYINT(1) DEFAULT 0 NOT NULL, focus TINYINT(1) DEFAULT 0 NOT NULL, visible TINYINT(1) DEFAULT 1 NOT NULL, creation TINYINT(1) DEFAULT 1 NOT NULL, INDEX IDX_6E9BEBE9C18272 (projet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE secteur (id INT AUTO_INCREMENT NOT NULL, secteur VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE test (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE client ADD CONSTRAINT FK_C74404559F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE client_categorie ADD CONSTRAINT FK_A25D063B19EB6921 FOREIGN KEY (client_id) REFERENCES client (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE client_categorie ADD CONSTRAINT FK_A25D063BBCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE client_image ADD CONSTRAINT FK_665098E819EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE projet ADD CONSTRAINT FK_50159CA919EB6921 FOREIGN KEY (client_id) REFERENCES client (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE projet ADD CONSTRAINT FK_50159CA99F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE projet_categorie ADD CONSTRAINT FK_6A8331E0C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE projet_categorie ADD CONSTRAINT FK_6A8331E0BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE projet_image ADD CONSTRAINT FK_6E9BEBE9C18272 FOREIGN KEY (projet_id) REFERENCES projet (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE client_categorie DROP FOREIGN KEY FK_A25D063BBCF5E72D');
        $this->addSql('ALTER TABLE projet_categorie DROP FOREIGN KEY FK_6A8331E0BCF5E72D');
        $this->addSql('ALTER TABLE client_categorie DROP FOREIGN KEY FK_A25D063B19EB6921');
        $this->addSql('ALTER TABLE client_image DROP FOREIGN KEY FK_665098E819EB6921');
        $this->addSql('ALTER TABLE projet DROP FOREIGN KEY FK_50159CA919EB6921');
        $this->addSql('ALTER TABLE projet_categorie DROP FOREIGN KEY FK_6A8331E0C18272');
        $this->addSql('ALTER TABLE projet_image DROP FOREIGN KEY FK_6E9BEBE9C18272');
        $this->addSql('ALTER TABLE client DROP FOREIGN KEY FK_C74404559F7E4405');
        $this->addSql('ALTER TABLE projet DROP FOREIGN KEY FK_50159CA99F7E4405');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE chiffres');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE client_categorie');
        $this->addSql('DROP TABLE client_image');
        $this->addSql('DROP TABLE custom_web_site_img');
        $this->addSql('DROP TABLE custom_web_site_text');
        $this->addSql('DROP TABLE emails');
        $this->addSql('DROP TABLE footer');
        $this->addSql('DROP TABLE projet');
        $this->addSql('DROP TABLE projet_categorie');
        $this->addSql('DROP TABLE projet_image');
        $this->addSql('DROP TABLE secteur');
        $this->addSql('DROP TABLE test');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
