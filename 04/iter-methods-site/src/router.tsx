import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FixedPointPage } from './pages/FixedPointPage';
import { JacobiGaussSeidelPage } from './pages/JacobiGaussSeidelPage';
import { SpectralPage } from './pages/SpectralPage';
import { ConditionPage } from './pages/ConditionPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'fixed-point', element: <FixedPointPage /> },
      { path: 'jacobi-gauss-seidel', element: <JacobiGaussSeidelPage /> },
      { path: 'spectral', element: <SpectralPage /> },
      { path: 'condition', element: <ConditionPage /> },
    ],
  },
]);
