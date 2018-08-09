import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import AppWrapper from './container/AppWrapper';
import Homework from './container/Homework';
import Test from './container/Test';
import Test2 from './container/Test2';
import Test3 from './container/Test3';

const routeConfig = { 
  path: '/',
  component: AppWrapper,
  indexRoute: { component: Test3 },
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
    { path:'homework', component:Homework},
    {path:'test',component:Test},
    {path:'test2',component:Test2},
    {path:'test3',component:Test3}
  ]
}

// /studentsLib

export default routeConfig
