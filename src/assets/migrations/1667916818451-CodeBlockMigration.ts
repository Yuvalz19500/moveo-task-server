import { MigrationInterface, QueryRunner } from 'typeorm';

export class CodeBlockMigration1667916818451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`code_block\` DROP COLUMN \`code\``);
    await queryRunner.query(
      `ALTER TABLE \`code_block\` ADD \`code\` longtext NOT NULL`,
    );
    await queryRunner.query(`INSERT INTO moveo.code_block (id, title, code) VALUES
        (1, 'Convert a Singly Linked List to Circular Linked List', '# Convert a Singly Linked List to Circular Linked List
        def convertTocircular(head):'),
        (2, 'Return the N-th value of the Fibonacci sequence Recursively', '// Return the N-th value of the Fibonacci sequence Recursively
        function fib(n) {
          }'),
        (3, 'Reverse a String using Stack', '// Reverse a String using Stack
        public static String reverse(String str) {
            char[] charArr = str.toCharArray();
            int size = charArr.length;
            Stack stack = new Stack(size);
        
            int i;
            for (i = 0; i < size; ++i) {
            }
        
            for (i = 0; i < size; ++i) {
            }
        
            return;
        }'),
        (4, 'Implement a Queue using two Stacks', 'import { Stack } from ''./Stack'';

        // Implement a Queue using two Stacks
        class QueueUsingTwoStacks {
          constructor() {
            this.stack1 = new Stack();
            this.stack2 = new Stack();
          }
        
          enqueue(data) {}
        
          dequeue() {}
        }
        
        export { QueueUsingTwoStacks };');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`code_block\` DROP COLUMN \`code\``);
    await queryRunner.query(
      `ALTER TABLE \`code_block\` ADD \`code\` varchar(255) NOT NULL`,
    );

    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
    await queryRunner.query('TRUNCATE TABLE moveo.code_block');
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
  }
}
