const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create the landing page UI design.",
        date: "2025-08-21",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve navigation bar alignment issues.",
        date: "2025-08-22",
        category: "dev",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss project requirements with client.",
        date: "2025-08-23",
        category: "management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Build Login Page",
        description: "Implement login functionality using React.",
        date: "2025-08-21",
        category: "dev",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Prepare README for project setup.",
        date: "2025-08-25",
        category: "documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Schema",
        description: "Design initial DB schema for tasks app.",
        date: "2025-08-20",
        category: "backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate task API with frontend.",
        date: "2025-08-23",
        category: "dev",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Logo",
        description: "Make a logo for the project.",
        date: "2025-08-22",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS Issues",
        description: "Resolve mobile responsiveness problems.",
        date: "2025-08-24",
        category: "frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Make slides for weekly team meeting.",
        date: "2025-08-21",
        category: "management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Unit Testing",
        description: "Write Jest unit tests for login module.",
        date: "2025-08-26",
        category: "testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];
