/* Import Libraries */
import express from 'express';

// Controllers
import AdminUserController from '../controllers/admin/UserController';
// Middlewares
import AdminAuth from '../middlewares/AdminAuth';
import UrlProvider from '../middlewares/UrlProvider';

const router = express.Router({ mergeParams: true });

router.use(UrlProvider);// URL Segments Provider Middleware

// Public Admin Routes
router.get('/admin/login', [AdminUserController.login]);
router.post('/admin/login', [AdminUserController.login]);
// Protected Admin Routes
router.use(AdminAuth); // Admin Auth Middleware
router.get('/admin/dashboard', [AdminUserController.dashboard]);

export default router;
