
import Login from './../view/login.jsx';
import Admin from './../view/admin.jsx'
import Test from './../view/test.jsx'
import Course from './../view/course'

const routes = [
    {
        path: '/',
        component: Login,
        exact: true,
    },
    {
        path: '/test',
        component: Test,
        children: [
            {
                path: '/test/course',
                component: Course
            }
        ]
    },
    
    {
        path: '/admin',
        component: Admin
    },
];
 
export {routes}