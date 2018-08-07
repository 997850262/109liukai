import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})

const studentlist = new schema.Entity('studentlist',{},{
  idAttribute:'mid'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})

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

const author = new schema.Entity('author',{},{
  idAttribute:'mid'
})
// const comments= new schema.Entity('comments',{},{
//   idAttribute:'id'
// })
const commentsItem = new schema.Entity("commentsItem", {}, {idAttribute: 'id'})
const comments = new schema.Array(commentsItem);
const data = new schema.Entity('data',{
  author:author,
  classInfo:classes,
  teacherInfo:teacher,
  comments:comments
},{
  idAttribute:'id'
})
export const Data=[data];