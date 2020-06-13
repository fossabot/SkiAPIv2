import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departement } from "./Departement";
import { Level } from "./Level";
import { Studentgroup } from "./Studentgroup";

@Index("FK_Groups_Levels_LevelID", ["levelId"], {})
@Index("FK_Groups_Departement_DepartementID", ["departementId"], {})
@Entity("group", { schema: "ski" })
export class Group {
  @PrimaryGeneratedColumn({ type: "int", name: "GroupID" })
  groupId: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Number", length: 2 })
  number: string;

  @Column("time", { name: "Time" })
  time: string;

  @Column("int", { name: "Day" })
  day: number;

  @Column("varchar", {
    name: "TeacherName",
    nullable: true,
    length: 50,
    default: () => "' '",
  })
  teacherName: string | null;

  @Column("int", { name: "NbStudents", default: () => "'0'" })
  nbStudents: number;

  @Column("int", { name: "DepartementID" })
  departementId: number;

  @ManyToOne(() => Departement, (departement) => departement.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "DepartementID", referencedColumnName: "departementId" },
  ])
  departement: Departement;

  @ManyToOne(() => Level, (level) => level.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Level;

  @OneToMany(() => Studentgroup, (studentgroup) => studentgroup.group)
  studentgroups: Studentgroup[];
}