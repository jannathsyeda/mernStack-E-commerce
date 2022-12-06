import express from 'express'
const router =express.Router()
import {getAllProducts,productById} from '../controllers/ProductConroller.js'

//@desc Fetch all products
//@route GET/api/products
//@access public

router.route('/').get(getAllProducts)
router.route('/:id').get(productById)

export default router