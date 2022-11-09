import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TablesMigration1668034230994 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'userType',
            type: 'enum',
            enum: ['STUDENT', 'MENTOR'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'code_block',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'code',
            type: 'longtext',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'session',
        columns: [
          {
            name: 'uuid',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'codeblock_id',
            type: 'longtext',
          },
          {
            name: 'student_id',
            type: 'int',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearDatabase();
  }
}
