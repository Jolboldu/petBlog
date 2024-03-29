import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Author } from '../../../core/entities';

@Entity()
export class AuthorEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  firstName: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar', { unique: true })
  lastName: string;

  @Column('varchar', { unique: true })
  pseudonym: string;
}
