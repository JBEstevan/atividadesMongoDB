import User from "../models/user-model.js";

async function store(req, res) {
try {
    await User.create(req.body);
    res.json();
} catch (error) {
    res.status(400).json(error);
}
}

async function index(req, res) {
try {
    const content = await User.find(req.query).exec();
    res.json(content);
} catch (error) {
    res.status(400).json(error);
}
}

async function show(req, res) {
try {
    const content = await User.findById(req.params.id).exec();
    res.json(content);
} catch (error) {
    res.status(400).json(error);
}
}

async function update(req, res) {
try {
    await User.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
} catch (error) {
    res.status(400).json(error);
}
}

const signup = async (req, res) => {
    try {
        const content = await User.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
    }

    const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        if (!user) {
            res.sendStatus(404);
        }

        
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
    }

export default {
store,
index,
show,
update,
};