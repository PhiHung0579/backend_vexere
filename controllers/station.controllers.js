
const { Op } = require("sequelize");
const { Station } = require("../models")

const createStation = async (req, res) => {
    const { name, address, province } = req.body;
    try {
        const newStation = await Station.create({ name, address, province });
        res.status(200).send(newStation);
    } catch (error) {
        res.status(500).send(error);
    }

}

const getAllStation = async (req, res) => {
    const { name } = req.query; // lấy ra name gần giống 
    try {
        if (name) {
            const stationList = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`,//thư viện op 
                    }
                }
            });
            res.status(200).send(stationList)
        } else {
            const stationList = await Station.findAll();
            res.status(200).send(stationList)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailStaion = async (req, res) => {
    const { id } = req.params;
    try {
        const detailList = await Station.findOne({
            where: {
                id,
            },
        });
        res.status(200).send(detailList)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateStation = async (req, res) => {
    const { id } = req.params;
    //kiểm tra station có tồn tại hay không
    const { name, address, province } = req.body;
    try {
        const detailList = await Station.findOne({
            where: {
                id,
            },
        });

        detailList.name = name;
        detailList.address = address;
        detailList.province = province;

        await detailList.save();

        res.status(200).send(detailList);
    } catch (error) {
        res.status(500).send(error);
    }


}

const deleteStation = async (req, res) => {
    const { id } = req.params;
    try {
        Station.destroy({
            where: {
                id,
            }
        });
        res.status(200).send("delete complete")
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    createStation,
    getAllStation,
    getDetailStaion,
    updateStation,
    deleteStation,
}