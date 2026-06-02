const admin = [
  {
    id: 100,
    email: "admin@gmail.com",
    password: "123"
  }
];

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Build Login UI",
        description: "Create login page using React",
        date: "2026-05-06",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar",
        description: "Resolve navbar responsiveness",
        date: "2026-05-04",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Connect backend API",
        date: "2026-05-03",
        category: "backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Dashboard",
        description: "Admin dashboard UI",
        date: "2026-05-06",
        category: "frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Charts",
        description: "Integrate chart library",
        date: "2026-05-05",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fixing",
        description: "Fix UI bugs",
        date: "2026-05-02",
        category: "debug"
      }
    ]
  },

  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Setup Backend",
        description: "Initialize Node server",
        date: "2026-05-06",
        category: "backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Schema",
        description: "Design MongoDB schema",
        date: "2026-05-01",
        category: "backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Auth System",
        description: "JWT authentication",
        date: "2026-05-03",
        category: "backend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create UI in Figma",
        date: "2026-05-06",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Convert to React",
        description: "Implement UI in React",
        date: "2026-05-04",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Animations",
        description: "Add animations",
        date: "2026-05-02",
        category: "frontend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Sneha",
    email: "employee5@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Testing",
        description: "Write test cases",
        date: "2026-05-06",
        category: "testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Performance Check",
        description: "Optimize app",
        date: "2026-05-05",
        category: "optimization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy App",
        description: "Deploy to Vercel",
        date: "2026-05-01",
        category: "devops"
      }
    ]
  }
];
 export const setLocalStorage= ()=>{
       
     localStorage.setItem("employees",JSON.stringify(employees))
      localStorage.setItem("admin",JSON.stringify(admin))
 };
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};