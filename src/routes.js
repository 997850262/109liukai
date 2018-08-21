import UserCenter from './Container/UserCenter';
import StudentsLib from './Container/StudentsLib';
import ClassDetail from './Container/ClassDetail';
import AppWrapper from './Container/AppWrapper';
import Homework from './Container/Homework';
import Test from './Container/Test';
import Test2 from './Container/Test2';
import Test3 from './Container/Test3';

import Test5 from './Container/Test5';
import Power from './Container/Power';
import game2048 from './Container/game2048';

const routeConfig = {
  path: '/',
  component: AppWrapper,
  indexRoute: { component: game2048 },
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
    { path: 'homework', component: Homework },
    { path: 'test', component: Test },
    { path: 'test2', component: Test2 },
    { path: 'test3', component: Test3 },
    { path: 'test5', component: Test5 },
    { path: 'power', component: Power },
    { path: 'game', component: game2048 }

  ]
};

// /studentsLib

export default routeConfig;
