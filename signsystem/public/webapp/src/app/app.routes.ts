import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";
import {CourseComponent} from "./pages/course/course.component";
import {SignComponent} from "./pages/sign/sign.component";
import {GradeComponent} from "./pages/grade/grade.component";
import {SpareComponent} from "./pages/spare/spare.component";
import {Spare2Component} from "./pages/spare2/spare2.component";
import {RoleComponent} from "./pages/role/role.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'role',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
      path: 'course',
      component: CourseComponent
    },
    {
      path: 'sign',
      component: SignComponent
    },
    {
      path: 'grade',
      component: GradeComponent
    },
    {
      path: 'spare',
      component: SpareComponent
    },
    {
      path: 'spare2',
      component: Spare2Component
    },
    {
      path: 'role',
      component: RoleComponent
    },
];
