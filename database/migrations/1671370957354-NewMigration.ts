import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1671370957354 implements MigrationInterface {
    name = 'NewMigration1671370957354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`user_name\` varchar(255) NULL, \`email\` varchar(255) NULL, \`phone_number\` varchar(255) NULL, \`first_name\` varchar(255) NULL, \`last_name\` varchar(255) NULL, \`middle_name\` varchar(255) NULL, \`date_of_birth\` date NULL, \`state_of_residence\` varchar(255) NULL, \`photo_url\` varchar(255) NULL, \`profile_poster_img\` varchar(255) NULL, \`country\` varchar(255) NULL, \`about\` text NULL, \`socials\` text NULL, \`hubbys\` text NULL, \`isActive\` tinyint NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`authStrategy\` varchar(255) NULL, UNIQUE INDEX \`IDX_074a1f262efaca6aba16f7ed92\` (\`user_name\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_17d1817f241f10a3dbafb169fd\` (\`phone_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`auth\` (\`id\` int NOT NULL AUTO_INCREMENT, \`phone_number\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_013ebd35a4410a1b79111495f9\` (\`phone_number\`), UNIQUE INDEX \`IDX_b54f616411ef3824f6a5c06ea4\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b54f616411ef3824f6a5c06ea4\` ON \`auth\``);
        await queryRunner.query(`DROP INDEX \`IDX_013ebd35a4410a1b79111495f9\` ON \`auth\``);
        await queryRunner.query(`DROP TABLE \`auth\``);
        await queryRunner.query(`DROP INDEX \`IDX_17d1817f241f10a3dbafb169fd\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_074a1f262efaca6aba16f7ed92\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
