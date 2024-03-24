const { User } = require("../models/")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email, password: hashPassword, numberPhone });
        res.status(200).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (user) {
            const isAuth = bcrypt.compareSync(password, user.password);
            if (isAuth) {
                const token = jwt.sign({ emai: user.email, type: user.type }, "npph2512", { expiresIn: 30 * 60 })
                res.status(200).send({ message: "Đăng nhập thành công", token });
            } else {
                res.status(401).send("Đăng nhập thất bại");
            }
        } else {
            res.status(404).send("Người dùng không tồn tại");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    register,
    login,
};
