import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET -localhost:3000/movies/new
router.get('/new', flightsCtrl.new)

//function(req, res) {
//res.send('respond with a resource')
//})

//router.get()

export {
  router
}
