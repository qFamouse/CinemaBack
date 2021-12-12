const hallRepository = require('../repositories/HallRepository');

class HallsService {
    async GetAll() {
        return await hallRepository.GetAll();
    }

    async GetById(hallId) {
        return await hallRepository.GetById(hallId);
    }

    async CreateOne(hall) {
        return await hallRepository.CreateOne(hall);
    }

    async EditById(hallId, hall) {
        return await hallRepository.EditById(hallId, hall);
    }

    async DeleteById(hallId) {
        return await hallRepository.DeleteById(hallId);
    }
}

module.exports = new HallsService();