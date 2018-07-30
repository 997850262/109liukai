
export default function List(state ={
  dataSource : [{
    key: '1',
    class: '高级班',
    classstate:'进行中',
    opentime: '2017-4-20',
    teacher:'小白老师',
    classrate:'3/21',
    submitwork:'67.98%',
    Comment:'87.98%',
    card:'3/21',
    satisfaction:'90.14%'
  }, {
    key: '2',
    class: '进阶班',
    classstate:'进行中',
    opentime: '2017-4-21',
    teacher:'小白老师',
    classrate:'5/21',
    submitwork:'76.89%',
    Comment:'31.87%',
    card:'5/21',
    satisfaction:'98.14%'
  }, {
    key: '3',
    class: '提高班',
    classstate:'进行中',
    opentime: '2017-4-22',
    teacher:'小白老师',
    classrate:'13/21',
    submitwork:'13.89%',
    Comment:'21.76%',
    card:'13/21',
    satisfaction:'88.01%'
  }, {
    key: '4',
    class: '入门班',
    classstate:'进行中',
    opentime: '2017-4-23',
    teacher:'小白老师',
    classrate:'20/21',
    submitwork:'98.45%',
    Comment:'98.67%',
    card:'20/21',
    satisfaction:'30.10%'
  }, {
    key: '5',
    class: '体验班',
    classstate:'已结束',
    opentime: '2017-4-24',
    teacher:'小白老师',
    classrate:'21/21',
    submitwork:'31.54%',
    Comment:'78.76%',
    card:'21/21',
    satisfaction:'94.10%'
  }
],columns : [{
  title: '班级',
  dataIndex: 'class',
  key: 'class',
}, {
  title: '课程状态',
  dataIndex: 'classstate',
  key: 'classstate',
}, {
  title: '开课时间',
  dataIndex: 'opentime',
  key: 'opentime',
}, {
  title: '老师',
  dataIndex: 'teacher',
  key: 'teacher',
}, {
  title: '上课率',
  dataIndex: 'classrate',
  key: 'classrate',
}, {
  title: '作业提交率',
  dataIndex: 'submitwork',
  key: 'submitwork',
}, {
  title: '被点评情况',
  dataIndex: 'Comment',
  key: 'Comment',
}, {
  title: '打卡率',
  dataIndex: 'card',
  key: 'card',
}, {
  title: '满意度',
  dataIndex: 'satisfaction',
  key: 'satisfaction',
}
],
data : [{
  key: '1',
  class: '高级班',
  classstate:'已结束',
  opentime: '2017-4-30',
  teacher1:'小白老师',
  classrate:'21/21',
  submitwork:'8/10',
  Comment:'10/10',
  card:'5/21',
  satisfaction:'90%'
}],
column: [{
  title: '班级',
  dataIndex: 'class',
  key: 'class',
}, {
  title: '课程状态',
  dataIndex: 'classstate',
  key: 'classstate',
}, {
  title: '开课时间',
  dataIndex: 'opentime',
  key: 'opentime',
}, {
  title: '教学组负责人',
  dataIndex: 'teacher1',
  key: 'teacher1',
}, {
  title: '上课率',
  dataIndex: 'classrate',
  key: 'classrate',
}, {
  title: '作业提交率',
  dataIndex: 'submitwork',
  key: 'submitwork',
}, {
  title: '被点评情况',
  dataIndex: 'Comment',
  key: 'Comment',
}, {
  title: '打卡率',
  dataIndex: 'card',
  key: 'card',
}, {
  title: '满意度',
  dataIndex: 'satisfaction',
  key: 'satisfaction',
}
],
},action){
  switch(action.type){

    default:
    return state;
  }
}