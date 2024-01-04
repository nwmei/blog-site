import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  text!: string;

  @ManyToOne(() => User)
  @JoinColumn({name: "posterId"})
  poster!: User;
}