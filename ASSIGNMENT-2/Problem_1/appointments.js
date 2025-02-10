// appointments.js (Module)

const appointments = [];

// Function to add an appointment
function addAppointment(clientName, appointmentTime, serviceType) {
  try {
    // Ensure client name is not empty
    if (!clientName || clientName.trim() === "") {
      throw new Error("Client name cannot be empty");
    }

    // Ensure appointmentTime is a valid Date object
    if (!(appointmentTime instanceof Date) || isNaN(appointmentTime)) {
      throw new Error("Invalid appointment time");
    }

    // Create and push the new appointment object to the array
    const newAppointment = {
      clientName,
      appointmentTime,
      serviceType
    };
    appointments.push(newAppointment);
    console.log("Appointment added successfully");
  } catch (error) {
    console.error("Error adding appointment:", error.message);
  }
}

// Function to get upcoming appointments within the next hour
function upcomingAppointments() {
  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000); // Current time + 1 hour

  const upcoming = appointments.filter(appointment => {
    return appointment.appointmentTime >= now && appointment.appointmentTime <= oneHourLater;
  });

  if (upcoming.length > 0) {
    console.log("Upcoming Appointments:");
    upcoming.forEach(appointment => {
      console.log(`${appointment.clientName} - ${appointment.serviceType} at ${appointment.appointmentTime}`);
    });
  } else {
    console.log("No upcoming appointments in the next hour.");
  }
}

// Function to send a reminder for the appointment
function sendReminder(appointment) {
  const now = new Date();
  const timeUntilAppointment = appointment.appointmentTime - now;

  // Ensure the appointment is in the future
  if (timeUntilAppointment > 0) {
    setTimeout(() => {
      console.log(`Reminder: Your appointment for ${appointment.serviceType} with ${appointment.clientName} is scheduled at ${appointment.appointmentTime}`);
    }, timeUntilAppointment - 5 * 60 * 1000); // 5 minutes before the appointment time
  }
}

// Export functions
module.exports = { addAppointment, upcomingAppointments, sendReminder };
