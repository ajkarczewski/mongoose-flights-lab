import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new') 
}

function create(req, res) {
  console.log("req.body is", req.body);
  for (let key in req.body){
    if (req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight (req.body)
  console.log("flight is", flight);
  flight.save(function(err){
    if (err) return res.redirect('/flights/new') 
    res.redirect('/flights')
  }) 
  }

  function index(req, res) {
    Flight.find({}, function (error, flights) {
      res.render("flights/index", {
        error: error,
        flights: flights,
        title: 'All Flights',
      })
    })
  }


export {
  newFlight as new,
  create,
  index
}