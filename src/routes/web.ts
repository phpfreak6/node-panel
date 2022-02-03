import { Router } from 'express';
// Controllers
import AdminUserController from '../controllers/admin/UserController';
// Middlewares
import AdminAuth from '../middlewares/AdminAuth';
import UrlProvider from '../middlewares/UrlProvider';
const Route = Router({ mergeParams: true });

Route.use(UrlProvider);// URL Segments Provider Middleware
// Public Admin Routes
Route.get('/admin/login', [AdminUserController.login]);
Route.post('/admin/login', [AdminUserController.login]);
// Protected Admin Routes
Route.use(AdminAuth); // Admin Auth Middleware
Route.get('/admin/dashboard', [AdminUserController.dashboard]);

export default Route;
