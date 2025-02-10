// test.js (Testing script)

const { addAppointment, upcomingAppointments, sendReminder } = require('./appointments');

// Add appointments
addAppointment("Alice", new Date("2025-02-10T14:00:00"), "Consultation");
addAppointment("Bob", new Date("2025-02-10T14:30:00"), "Follow-up");
addAppointment("Charlie", new Date("2025-02-10T15:00:00"), "Consultation");

// View upcoming appointments
upcomingAppointments();

// Send reminder for each appointment
setInterval(() => {
  appointments.forEach(appointment => {
    sendReminder(appointment);
  });
}, 60 * 1000); // Check every minute for upcoming appointments
