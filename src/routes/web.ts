import { Router } from 'express';

/* Controllers */
import AdminUserController from '../controllers/admin/UserController';

/* Middlewares */
import AdminAuth from '../middlewares/AdminAuth';
import UrlProvider from '../middlewares/UrlProvider';

/* Requests & Validation Methods */
import { validate } from '../requests/Validate';
import LoginRequest from '../requests/UserRequests/LoginRequest';


const Route = Router({ mergeParams: true });

Route.use(UrlProvider);// URL Segments Provider Middleware
// Public Admin Routes
Route.get('/admin/login', [AdminUserController.login]);
Route.post('/admin/login', validate(LoginRequest), [AdminUserController.login]);

// Protected Admin Routes
Route.use(AdminAuth); // Admin Auth Middleware
Route.get('/admin/dashboard', [AdminUserController.dashboard]);

// Admin User Routes
Route.get('/admin/users/index', [AdminUserController.index]);

export default Route;
