import { Router } from 'express';
/* Controllers */
import AdminUserController from '../controllers/admin/UserController';
import AdminAuth from '../middlewares/AdminAuth'; // Authentication Middleware
import validate from '../requests'; // Requests
import LoginRequest from '../requests/UserRequests/LoginRequest';
const Route = Router({ mergeParams: true });

// Admin Routes
Route.get('/admin/login', [AdminUserController.login]);
Route.post('/admin/login', validate(LoginRequest), [AdminUserController.login]);
Route.use(AdminAuth);
Route.get('/admin/dashboard', [AdminUserController.dashboard]);
Route.get('/admin/users/index', [AdminUserController.index]);

export default Route;
