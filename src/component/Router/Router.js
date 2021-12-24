import React from 'react';
import { Navigate,useRoutes } from 'react-router';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

import CartView from '../CartView/CartView';
import Checkout from '../Checkout/Checkout';

export const Router = () => {

    const routes = useRoutes([
        {path:'/', element: <ItemListContainer/> },
        {path:'/Products/:catId', element:<ItemListContainer />},
        {path:'/detail/:detailId', element:<ItemDetailContainer />},
        {path:'/Cart', element:<CartView />},
        {path:'/checkout', element: <Checkout />},
        {path:'*', element: <Navigate to='/' />}
    ])
    return routes
};


