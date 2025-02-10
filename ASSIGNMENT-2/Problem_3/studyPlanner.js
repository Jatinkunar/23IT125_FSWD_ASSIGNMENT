// studyPlanner.js (Module)

const studySessions = [];

// Function to add a study session
function addSession(topic, sessionTime, duration) {
  try {
    // Validate topic
    if (!topic || topic.trim() === "") {
      throw new Error("Topic cannot be empty");
    }

    // Validate duration (must be a positive number)
    if (isNaN(duration) || duration <= 0) {
      throw new Error("Duration must be a positive number");
    }

    // Validate sessionTime (must be a valid Date object)
    if (!(sessionTime instanceof Date) || isNaN(sessionTime)) {
      throw new Error("Invalid session time");
    }

    // Create and push the new session object
    const newSession = { topic, sessionTime, duration };
    studySessions.push(newSession);
    console.log("Study session added successfully");
  } catch (error) {
    console.error("Error adding session:", error.message);
  }
}

// Function to list today's study sessions
function listTodaysSessions() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);  // Start of today
  const endOfDay = new Date(today);
  endOfDay.setHours(23, 59, 59, 999);  // End of today

  const todaysSessions = studySessions.filter(session =>
    session.sessionTime >= today && session.sessionTime <= endOfDay
  );

  if (todaysSessions.length > 0) {
    console.log("Today's Study Sessions:");
    todaysSessions.forEach(session => {
      console.log(`${session.topic} at ${session.sessionTime}`);
    });
  } else {
    console.log("No study sessions scheduled for today.");
  }
}

// Function to start a countdown for a session
function sessionCountdown(session) {
  const now = new Date();
  const timeUntilSession = session.sessionTime - now;

  // Ensure the session is in the future
  if (timeUntilSession > 0) {
    setTimeout(() => {
      console.log(`Session on ${session.topic} starts now!`);
    }, timeUntilSession); // Countdown to the session start
  } else {
    console.log(`Session on ${session.topic} already started or is in the past.`);
  }
}

// Simulate fetching study materials asynchronously for a given topic
function asyncFetchStudyMaterials(topic) {
  return new Promise((resolve, reject) => {
    // Simulate delay for fetching materials
    setTimeout(() => {
      if (topic) {
        resolve(`Study materials for ${topic}: [PDF, Notes, Practice Questions]`);
      } else {
        reject("No topic provided");
      }
    }, 2000); // 2 seconds delay
  });
}

// Export functions
module.exports = { addSession, listTodaysSessions, sessionCountdown, asyncFetchStudyMaterials };
