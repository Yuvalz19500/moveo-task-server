import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @Column()
  student_id: number;

  @Column('longtext')
  codeblock_id: number;
}
