import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home/';
import { NotFound } from '../pages/NotFound/';
import { Autor } from '../pages/Autor/';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <NotFound />
        },
        {
            path: 'autor',
            element: <Autor />
        }
    ]);
    return routes;
}

export { Routes };