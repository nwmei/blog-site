import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BlogPost } from "./BlogPost";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 50 })
  username!: string;

  @Column({ type: "varchar", length: 50 })
  email!: string;

  @Column({ type: "varchar", length: 50 })
  password!: string;

  @OneToMany(() => BlogPost, blogPost => blogPost.poster, {cascade: ["remove"]})
  blogPosts!: BlogPost[];
}
