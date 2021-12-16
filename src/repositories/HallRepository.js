const sequelize = require('../database/Database');

class HallRepository {
    async GetAll() {
        return await sequelize.models.hall.findAll();
    }

    async GetById(hallId) {
        return await sequelize.models.hall.findOne({
            where: {
                id: hallId
            }
        })
    }

    async Create(hall) {
        return sequelize.models.hall.create(hall)
    }

    async EditById(hallId, hall) {
        await sequelize.models.hall.update(hall, {
            where: {
                id: hallId
            }
        });

        return await this.GetById(hallId);
    }

    async DeleteById(hallId) {
        await sequelize.models.movie.destroy({
            where: {
                id: hallId
            }
        });
    }
}

module.exports = new HallRepository();
