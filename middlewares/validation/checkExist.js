const { Station } = require("../../models")

const checkExist=(Model) => {
   return async (req, res, next) => {0
        const { id } = req.params;
        //kiểm tra station có tồn tại hay không
        const station = await Model.findOne({
            where: {
                id,
            }
        });
        if (station) {
            next();
        } else {
            res.status(404).send(`không tìm thấy id là:${id}`);
        }

    }
}

module.exports = {
    checkExist,
}