import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CodeBlock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('longtext')
  code: string;
}
