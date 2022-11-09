import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1667916818451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE moveo.user RENAME COLUMN passowrd TO password;`,
    );
    await queryRunner.query(`INSERT INTO moveo.user (id, username, password, userType) VALUES
        (1, 'yuval_student', '$2a$10$kkZBYXxojVDKM5z/aiqhtO63cGjwXznRWsyGEAjaG8y0pPi9Jf6Zq', 'STUDENT'),
        (2, 'yuval_mentor', '$2a$10$kkZBYXxojVDKM5z/aiqhtO63cGjwXznRWsyGEAjaG8y0pPi9Jf6Zq', 'MENTOR');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
    await queryRunner.query('TRUNCATE TABLE moveo.user');
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
  }
}
