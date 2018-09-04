import Router from 'express/lib/router/index'

const router = Router()

/**
 * Create root endpoint
 */
router.get('/', async (req, res) => {
  res.json({
    message: 'Hello from API!'
  })
})

export default router
