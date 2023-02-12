import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comments } from "./comments.schema";

@Entity("usersWhoPutDislikeForComment")
export class UsersWhoPutDislikeForComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    userId: number;

    @Column({ nullable: false })
    login: string;

    @Column({ nullable: false })
    commentId: number;

    @Column({ nullable: false })
    addedAt: Date;

    @ManyToOne(() => Comments)
    @JoinColumn({ name: "commentId" })
    comment: Comments;
}
