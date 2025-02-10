// test.js (Testing script)

const { addSession, listTodaysSessions, sessionCountdown, asyncFetchStudyMaterials } = require('./studyPlanner');

// Add some study sessions
addSession("Math - Algebra", new Date("2025-02-10T10:00:00"), 60);
addSession("Physics - Kinematics", new Date("2025-02-10T14:00:00"), 90);
addSession("Chemistry - Organic Chemistry", new Date("2025-02-11T09:00:00"), 120);

// List today's study sessions
listTodaysSessions();

// Start a countdown for each session scheduled today
studySessions.forEach(session => {
  if (session.sessionTime.toDateString() === new Date().toDateString()) {
    sessionCountdown(session);
  }
});

// Fetch study materials asynchronously for a topic
asyncFetchStudyMaterials("Math - Algebra")
  .then(materials => {
    console.log(materials);
  })
  .catch(error => {
    console.error("Error fetching study materials:", error);
  });
