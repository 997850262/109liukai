import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import AppWrapper from './container/AppWrapper';
import Homework from './container/Homework';

const routeConfig = { 
  path: '/',
  component: AppWrapper,
  indexRoute: { component: Homework },
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
    { path:'homework', component:Homework}
  ]
}

// /studentsLib

export default routeConfig
