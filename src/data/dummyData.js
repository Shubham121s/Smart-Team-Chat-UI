// Dummy chat conversations data
export const dummyChats = [
  {
    id: 1,
    name: "Marketing Team",
    lastMessage: "Let's schedule the campaign review for tomorrow",
    time: "2:30 PM",
    unread: 3,
    participants: ["Alice", "Bob", "Charlie"]
  },
  {
    id: 2,
    name: "Product Development",
    lastMessage: "The new feature is ready for testing",
    time: "1:15 PM",
    unread: 0,
    participants: ["David", "Eve", "Frank"]
  },
  {
    id: 3,
    name: "Design Sync",
    lastMessage: "Updated the wireframes based on feedback",
    time: "11:45 AM",
    unread: 1,
    participants: ["Grace", "Henry"]
  },
  {
    id: 4,
    name: "Engineering Standup",
    lastMessage: "Sprint planning meeting at 3 PM",
    time: "Yesterday",
    unread: 0,
    participants: ["Ivy", "Jack", "Kate", "Liam"]
  },
  {
    id: 5,
    name: "Sales Strategy",
    lastMessage: "Q4 targets look promising",
    time: "Yesterday",
    unread: 2,
    participants: ["Mark", "Nina", "Oscar"]
  },
  {
    id: 6,
    name: "Customer Success",
    lastMessage: "Client feedback session scheduled",
    time: "Monday",
    unread: 0,
    participants: ["Paul", "Quinn", "Rachel", "Steve"]
  }
];

// Dummy messages for each chat
export const dummyMessages = {
  1: [
    { 
      id: 1, 
      sender: "Alice", 
      message: "Hey team! How's the campaign progress looking?", 
      time: "2:15 PM", 
      isMe: false 
    },
    { 
      id: 2, 
      sender: "Me", 
      message: "We're on track! The creative assets are 90% complete and looking great.", 
      time: "2:20 PM", 
      isMe: true 
    },
    { 
      id: 3, 
      sender: "Bob", 
      message: "Awesome! I've scheduled the stakeholder review for tomorrow at 10 AM.", 
      time: "2:25 PM", 
      isMe: false 
    },
    { 
      id: 4, 
      sender: "Charlie", 
      message: "Let's schedule the campaign review for tomorrow", 
      time: "2:30 PM", 
      isMe: false 
    }
  ],
  2: [
    { 
      id: 1, 
      sender: "David", 
      message: "The user authentication module is complete and tested", 
      time: "12:30 PM", 
      isMe: false 
    },
    { 
      id: 2, 
      sender: "Eve", 
      message: "Excellent! I'll start the integration testing this afternoon", 
      time: "12:45 PM", 
      isMe: false 
    },
    { 
      id: 3, 
      sender: "Me", 
      message: "I've updated the API documentation with all the new endpoints", 
      time: "1:00 PM", 
      isMe: true 
    },
    { 
      id: 4, 
      sender: "Frank", 
      message: "The new feature is ready for testing", 
      time: "1:15 PM", 
      isMe: false 
    }
  ],
  3: [
    { 
      id: 1, 
      sender: "Grace", 
      message: "I've incorporated all the feedback from yesterday's review", 
      time: "11:30 AM", 
      isMe: false 
    },
    { 
      id: 2, 
      sender: "Me", 
      message: "The new user flow looks much cleaner now", 
      time: "11:35 AM", 
      isMe: true 
    },
    { 
      id: 3, 
      sender: "Henry", 
      message: "Updated the wireframes based on feedback", 
      time: "11:45 AM", 
      isMe: false 
    }
  ],
  4: [
    { 
      id: 1, 
      sender: "Ivy", 
      message: "Good morning everyone! Ready for today's standup?", 
      time: "9:00 AM", 
      isMe: false 
    },
    { 
      id: 2, 
      sender: "Jack", 
      message: "I completed the database optimization task", 
      time: "9:05 AM", 
      isMe: false 
    },
    { 
      id: 3, 
      sender: "Kate", 
      message: "The API performance improvements are deployed", 
      time: "9:10 AM", 
      isMe: false 
    },
    { 
      id: 4, 
      sender: "Liam", 
      message: "Sprint planning meeting at 3 PM", 
      time: "9:15 AM", 
      isMe: false 
    }
  ],
  5: [
    { 
      id: 1, 
      sender: "Mark", 
      message: "The pipeline is looking strong this quarter", 
      time: "10:00 AM", 
      isMe: false 
    },
    { 
      id: 2, 
      sender: "Nina", 
      message: "We've closed 3 major deals already this month", 
      time: "10:15 AM", 
      isMe: false 
    },
    { 
      id: 3, 
      sender: "Oscar", 
      message: "Q4 targets look promising", 
      time: "10:30 AM", 
      isMe: false 
    }
  ],
  6: [
    { 
      id: 1, 
      sender: "Paul", 
      message: "Customer satisfaction scores are up 15% this month", 
      time: "2:00 PM", 
      isMe: false 
    },
    { 
      id: 2, 
      sender: "Quinn", 
      message: "That's fantastic! The new onboarding process is working", 
      time: "2:10 PM", 
      isMe: false 
    },
    { 
      id: 3, 
      sender: "Rachel", 
      message: "Client feedback session scheduled", 
      time: "2:20 PM", 
      isMe: false 
    }
  ]
};

// AI-generated content placeholders
export const aiContent = {
  summaries: {
    1: "This Marketing Team conversation focuses on campaign progress and stakeholder alignment. Key points: creative assets are 90% complete, stakeholder review scheduled for tomorrow at 10 AM, and the team is on track with deliverables. The discussion shows good coordination and proactive planning.",
    2: "Product Development team discusses technical progress on authentication and testing. Main updates: user authentication module completed and tested, integration testing starting this afternoon, API documentation updated with new endpoints, and new feature ready for testing phase.",
    3: "Design Sync conversation covers wireframe updates and user experience improvements. Summary: feedback from previous review has been incorporated, new user flow appears cleaner and more intuitive, and wireframes have been updated accordingly.",
    default: "This conversation covers team coordination and project updates. The discussion shows active collaboration and progress on key deliverables with clear next steps identified."
  },
  
  suggestions: {
    1: "Sounds great! Should we also prepare a brief status report for the stakeholders before tomorrow's review?",
    2: "Perfect timing! I can help with the integration testing if you need an extra pair of eyes on it.",
    3: "The improvements look excellent! Should we schedule a quick user testing session to validate the new flow?",
    default: "That sounds like a solid plan! Let me know if you need any support with the next steps."
  },
  
  icebreakers: [
    "Hi there! I hope you're having a great day. I wanted to touch base about the upcoming project and see how we can collaborate effectively. What are your thoughts on the timeline?",
    "Hello! I'm excited to work with you on this initiative. I've been looking forward to hearing your perspective on how we can make this project a success.",
    "Hey! Thanks for taking the time to connect. I'd love to discuss how we can align our efforts and make sure we're all moving in the same direction.",
    "Hi! I hope you're doing well. I wanted to reach out to introduce myself and explore how we can work together on the upcoming challenges.",
    "Hello there! I'm really looking forward to collaborating with you. What's your take on the project scope and how we should approach it?"
  ]
};

export default {
  dummyChats,
  dummyMessages,
  aiContent
};