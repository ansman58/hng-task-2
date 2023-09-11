import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({name: "user_id"})
  userId: number;

  @Column()
  name: string;
}
