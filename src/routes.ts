import UserLayout from './components/layout/UserLayout';
import LoginPage from './components/pages/LoginPage';
import { RouteConfig } from './components/types/basics';
import HomePageDemo from './components/pages/HomePageDemo';
import Inventory from './components/pages/InventoryPage/inventory';
import CarGrid from './components/All_Products/CarProduct';
import CardContainer from './components/CardContainer/cardcontainer';
import VehicleDescription from './components/CarModels/Oldsmobile442';
// const HomePage = React.lazy(() => import('./components/pages/HomePage'));


const routes: RouteConfig[] =[
    {
    path: '/Home',
    component: HomePageDemo,
    layout: UserLayout
  },
 
  {
    path: '/login',
    component: LoginPage,
    layout: UserLayout
  },
  {
    path: '/Oldsmobile442',
    component: VehicleDescription,
    layout: UserLayout, 
  },
  {
    path: '/inventory',
    component: Inventory,
    layout: UserLayout, 
  },
  {
    path: '/',
    component: CardContainer,
    layout: UserLayout, 
  },
  {
    path: '/cars/:slideIndex',
    component: CarGrid,
    layout: UserLayout, 
  },
];

export default routes;