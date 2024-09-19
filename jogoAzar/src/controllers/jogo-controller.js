import Aposta from "../models/aposta-model";

async function store(req,res) {
    try {
        
    } catch (error) {
        
    }
}

async function index(req,res) {
    try {
        
    } catch (error) {
        
    }
}

async function show(req,res) {
    try {
        
    } catch (error) {
        
    }
}

async function update(req,res) {
    try {
        
    } catch (error) {
        
    }
}

async function destroy(req,res) {
    try {
        
    } catch (error) {
        
    }
}

async function resolve(req,res) {
    try {
        const numeros = [
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
            Math.ceil(Math.random() * 100),
        ]
        await Jogo.findByIdAndUpdate(req.params.id, {
            numeroEscolhido
        })
    } catch (error) {
        
    }
}

export default {
    store,
    index,
    show,
    update
}