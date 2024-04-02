const { Trip } = require('../models/')

const createTrip = async (req, res) => {
    const { fromStation, toStation, startTime, price } = req.body;
    const newTrip = await Trip.create({ fromStation, toStation, startTime, price });
    res.status(201).send(newTrip);

}
const getAllTrip = async (req, res) => {
    const tripList = await Trip.findAll();
    res.status(200).send(tripList)
}
module.exports = {
    createTrip,
    getAllTrip
}