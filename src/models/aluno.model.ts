import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_aluno')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 255 })
  email: string;
}
