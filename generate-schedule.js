// generate-schedule.js
const talksData = [
  {
    title: "The Future of AI in Software Development",
    speakers: ["Alice Smith"],
    category: ["AI", "Software Engineering"],
    duration: 60,
    description: "Exploring the transformative impact of AI on coding, testing, and deployment workflows.",
  },
  {
    title: "Mastering Modern JavaScript Frameworks",
    speakers: ["Bob Johnson"],
    category: ["JavaScript", "Frontend", "Web Development"],
    duration: 60,
    description: "A deep dive into the latest features and best practices in React, Vue, and Angular.",
  },
  {
    title: "Demystifying Cloud Native Architectures",
    speakers: ["Charlie Brown", "Diana Prince"],
    category: ["Cloud", "DevOps", "Architecture"],
    duration: 60,
    description: "Understanding Kubernetes, serverless, and microservices for scalable applications.",
  },
  {
    title: "Effective Data Visualization Techniques",
    speakers: ["Eve Adams"],
    category: ["Data Science", "UI/UX"],
    duration: 60,
    description: "Turning complex data into compelling visual stories.",
  },
  {
    title: "Secure Coding Practices for Web Applications",
    "speakers": [
      "Frank White"
    ],
    "category": [
      "Security",
      "Web Development"
    ],
    "duration": 60,
    "description": "Protecting your applications from common vulnerabilities and threats.",
  },
  {
    "title": "Beyond Relational Databases: NoSQL Options",
    "speakers": [
      "Grace Lee"
    ],
    "category": [
      "Databases",
      "Backend"
    ],
    "duration": 60,
    "description": "A comparative analysis of MongoDB, Cassandra, and other NoSQL solutions.",
  },
];

function calculateSchedule(talks, eventStartTime = "10:00", lunchBreak = { afterTalk: 3, duration: 60 }) {
  let currentMoment = new Date(`2026-05-01T${eventStartTime}:00`); // Use a fixed date for consistent date object creation
  const scheduledTalks = [];
  const transitionTime = 10; // minutes

  for (let i = 0; i < talks.length; i++) {
    // Add talk
    const talk = { ...talks[i], id: `talk-${i + 1}` };
    talk.startTime = currentMoment.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    currentMoment.setMinutes(currentMoment.getMinutes() + talk.duration);
    talk.endTime = currentMoment.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    scheduledTalks.push(talk);

    // Add transition or lunch
    if (i < talks.length - 1) { // If it's not the last talk
      if (i === lunchBreak.afterTalk - 1) { // If it's time for lunch
        currentMoment.setMinutes(currentMoment.getMinutes() + transitionTime); // Add transition before lunch
        const lunchStartTime = currentMoment.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        currentMoment.setMinutes(currentMoment.getMinutes() + lunchBreak.duration);
        const lunchEndTime = currentMoment.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        scheduledTalks.push({
          id: 'lunch',
          title: 'Lunch Break',
          description: 'Enjoy your meal!',
          startTime: lunchStartTime,
          endTime: lunchEndTime,
          duration: lunchBreak.duration,
          category: ["Break"]
        });
      } else {
        currentMoment.setMinutes(currentMoment.getMinutes() + transitionTime);
      }
    }
  }
  return scheduledTalks;
}

const finalSchedule = calculateSchedule(talksData);
console.log(JSON.stringify(finalSchedule, null, 2));
