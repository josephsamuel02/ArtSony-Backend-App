import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true, nullable: true })
  user_name?: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({ unique: true, nullable: true })
  phone_number?: string;

  @Column({ type: 'varchar', nullable: true })
  first_name?: string;

  @Column({ type: 'varchar', nullable: true })
  last_name?: string;

  @Column({ type: 'varchar', nullable: true })
  middle_name?: string;

  @Column({ type: 'date', nullable: true })
  date_of_birth?: Date;

  @Column({ type: 'varchar', nullable: true })
  state_of_residence?: string;

  @Column({ type: 'varchar', nullable: true })
  photo_url?: string;

  @Column({ nullable: true })
  profile_poster_img?: string;

  @Column({ type: 'varchar', nullable: true })
  country?: string;

  // @Column()
  // password: string;

  @Column('text', { nullable: true })
  about?: string;

  @Column('simple-array', { nullable: true })
  socials?: string;

  @Column('simple-array', { nullable: true })
  hubbys?: string[];

  @Column({ nullable: true })
  isActive?: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  authStrategy?: string;
}
