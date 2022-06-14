const bookingRepository = require('../repositories/BookingRepository');
const ticketRepository = require('../repositories/TicketRepository');
const NotFoundError = require("../errors/NotFoundError");

class BookingService {
    async GetAll() {
        return await bookingRepository.GetAll();
    }

    async GetDetailedById(bookingId) {
        return await bookingRepository.GetDetailedById(bookingId);
    }

    async GetDetailedActiveUserTickets(userId) {
        return await bookingRepository.GetDetailedActiveUserTickets(userId);
    }

    async Create(bookingData) {
        let ticket = await ticketRepository.GetById(bookingData.ticketId);
        if (!ticket) {
            throw new NotFoundError('Ticket not found');
        }
        let booking = await bookingRepository.Create(ticket.id);

        await ticketRepository.EditById(booking.ticketId, {
            isOccupied: true
        })

        return booking;
    }

    async EditById(bookingId, booking) {
        return await bookingRepository.EditById(bookingId, booking);
    }

    async DeleteById(bookingId) {
        let booking = await bookingRepository.GetById(bookingId);
        if (booking) {
            let ticketId = booking.ticketId;
            await bookingRepository.DeleteById(bookingId);

            await ticketRepository.EditById(ticketId, {
                isOccupied: true
            })
        }
        else {
            throw new NotFoundError('Booking is not found');
        }
    }
}

module.exports = new BookingService();
