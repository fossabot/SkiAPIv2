import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("studentgrouphistoryold", { schema: "ski" })
export class StudentGroupHistoryold {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "GroupID" })
  groupId: number;

  @Column("int", { name: "StudentID" })
  studentId: number;

  @Column("int", { name: "Status", default: () => "'0'" })
  status: number;

  @Column("datetime", { name: "Timestamp", default: () => "CURRENT_TIMESTAMP" })
  timestamp: Date;
}
