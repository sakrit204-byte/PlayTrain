const courses = [
  {
    id: "cricket",
    slug: "cricket-intelligence",
    title: "Cricket Intelligence",
    fullTitle: "CRICKET: FROM FIELD TO STADIUM",
    type: "Blended Course",
    category: "Outdoor",
    image: "/assets/cricket.png",
    enrolled: true,

    lessons: 26,
    authors: 3,
    authorName: "Harsha Bhogle",

    description:
      "This course is designed for learners who want a deep understanding of cricket fundamentals, rules, field positions and match strategies.",

    theoryPoints: [
      "Learn cricket rules, positions and match flow",
      "Perfect for beginners and analysts",
      "No practical enrollment required"
    ],

    practicalPoints: [
      "Side-by-side theory and video explanation",
      "Time-synced notes with practical sessions",
      "Auto-highlighted theory during videos"
    ]
  },

  {
    id: "football",
    slug: "football-analytics",
    title: "Football Analytics",
    fullTitle: "FOOTBALL ANALYTICS MASTERCLASS",
    type: "Theory Course",
    category: "Outdoor",
    image: "/assets/football.png",
    enrolled: true,

    lessons: 18,
    authors: 2,
    authorName: "Gary Neville",

    description:
      "Understand football tactics, formations and performance analytics in modern football.",

    theoryPoints: [
      "Formations explained",
      "Match data breakdown",
      "Tactical strategy deep dive"
    ],

    practicalPoints: [
      "Video case studies",
      "Real match simulations",
      "Performance tracking system"
    ]
  },

  {
    id: "tennis",
    slug: "tennis-strategy",
    title: "Tennis Strategy",
    fullTitle: "TENNIS: STRATEGY & PERFORMANCE",
    type: "Blended Course",
    category: "Outdoor",
    image: "/assets/tennis/tennis.png",
    enrolled: false,

    lessons: 20,
    authors: 2,
    authorName: "Rafael Strategy",

    description:
      "Master tennis techniques, strategy building and match intelligence.",

    theoryPoints: [
      "Court positioning",
      "Shot selection theory",
      "Match psychology"
    ],

    practicalPoints: [
      "On-court demonstrations",
      "Video breakdown sessions",
      "Skill improvement drills"
    ]
  },

  {
    id: "basketball",
    slug: "basketball-mastery",
    title: "Basketball Mastery",
    fullTitle: "BASKETBALL: COMPLETE SKILL DEVELOPMENT",
    type: "Practical Course",
    category: "Indoor",
    image: "/assets/basketball.png",
    enrolled: false,

    lessons: 22,
    authors: 1,
    authorName: "Coach Jordan",

    description:
      "Develop elite basketball skills including shooting, dribbling and tactical awareness.",

    theoryPoints: [
      "Game fundamentals",
      "Offensive strategies",
      "Defensive formations"
    ],

    practicalPoints: [
      "Drill sessions",
      "Live match simulation",
      "Performance tracking"
    ]
  }
];

export default courses;