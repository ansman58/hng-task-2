import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  user_id: number;

  @Column({ nullable: false })
  name: string;

  @Column({
    name: "created_at",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @Column({
    name: "updated_at",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;
}
