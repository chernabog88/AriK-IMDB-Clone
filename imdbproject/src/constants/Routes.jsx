import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home/';
import { NotFound } from '../pages/NotFound/';


function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]);
    return routes;
}

export { Routes };