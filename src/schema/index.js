import { schema } from 'normalizr';


const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})
// const currentLessonsList= new schema.Entity('currentLessonsList',{},{
//   idAttribute:'id'
// })
// const historyLessonsList= new schema.Entity('historyLessonsList',{},{
//   idAttribute:'id'
// })
const studentlist = new schema.Entity('studentlist',{},{
  idAttribute:'mid'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})
// const lessonInfo = new schema.Array(currentLessonsList,historyLessonsList);
// const lessonInfo = new schema.Entity('lessonInfo',{
//   classInfo:classes,
//   teacherInfo:teacher,
//   currentLessonsList:currentLessonsList,
//   historyLessonsList:historyLessonsList
// },{
//   idAttribute:'id'
// })

const currentLessonsList = new schema.Entity('currentLessonsList',{
  classInfo:classes,
  teacherInfo:teacher
},{
  idAttribute:'id'
})
const historyLessonsList = new schema.Entity('historyLessonsList',{
  classInfo:classes,
  teacherInfo:teacher
},{
  idAttribute:'id'
})
export const SATISFILEDLIST = [ satisfiled ];
export const CurrentLessonsList = [ currentLessonsList ];
export const HistoryLessonsList = [ historyLessonsList ];
export const Studentlist = [ studentlist ];
// export const LessonInfo = [ lessonInfo ];
