import { Router } from 'express'

/**
 * Import any routes
 */
import hello from './hello'

/**
 * Create new Instance of Router
 */
const router = Router()

/**
 * User routes here
 */
router.use(hello)

export default router
