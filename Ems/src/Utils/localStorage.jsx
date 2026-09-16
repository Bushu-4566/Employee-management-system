localStorage.clear()
const employees = [
  {
      id: 1,
      firstName: "Aarav",
      email: "employee1@gmail.com",
      password: "123",

      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 2,
        total: 5
      },

      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Design Login Page",
          taskDescription:
            "Create a responsive login page for the employee management system.",
          taskDate: "2026-08-20",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          taskTitle: "Fix Dashboard UI",
          taskDescription:
            "Fix alignment and spacing issues on the dashboard.",
          taskDate: "2026-08-21",
          category: "UI/UX"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Create Navbar",
          taskDescription:
            "Create a responsive navigation bar for the application.",
          taskDate: "2026-08-18",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Test Employee Login",
          taskDescription:
            "Test login functionality with different employee accounts.",
          taskDate: "2026-08-22",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Update Documentation",
          taskDescription:
            "Update the project documentation with the latest changes.",
          taskDate: "2026-08-17",
          category: "Documentation"
        }
      ]
    },

    {
      id: 2,
      firstName: "Priya",
      email: "employee2@gmail.com",
      password: "123",

      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 2,
        total: 5
      },

      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Create Employee Form",
          taskDescription:
            "Develop a form to add new employees to the system.",
          taskDate: "2026-08-20",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          taskTitle: "Validate Form Inputs",
          taskDescription:
            "Add validation for employee name, email and department fields.",
          taskDate: "2026-08-21",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Setup Employee Table",
          taskDescription:
            "Create a table to display employee information.",
          taskDate: "2026-08-18",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Test Employee Form",
          taskDescription:
            "Test all fields and validation rules in the employee form.",
          taskDate: "2026-08-23",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Review UI Design",
          taskDescription:
            "Review the employee management UI and suggest improvements.",
          taskDate: "2026-08-16",
          category: "UI/UX"
        }
      ]
    },

    {
      id: 3,
      firstName: "Rahul",
      email: "employee3@gmail.com",
      password: "123",

      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 2,
        total: 5
      },

      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Develop Employee Dashboard",
          taskDescription:
            "Build the main dashboard for employees.",
          taskDate: "2026-08-20",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          taskTitle: "Add Task Counter",
          taskDescription:
            "Display active, completed and new task counts on the dashboard.",
          taskDate: "2026-08-22",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Create Task Cards",
          taskDescription:
            "Create reusable cards for displaying employee tasks.",
          taskDate: "2026-08-17",
          category: "UI/UX"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Add Task Categories",
          taskDescription:
            "Add categories such as Development, Testing and Design.",
          taskDate: "2026-08-24",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Fix Responsive Layout",
          taskDescription:
            "Make the dashboard responsive for different screen sizes.",
          taskDate: "2026-08-19",
          category: "UI/UX"
        }
      ]
    },

    {
      id: 4,
      firstName: "Sneha",
      email: "employee4@gmail.com",
      password: "123",

      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 2,
        total: 5
      },

      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "API Integration",
          taskDescription:
            "Connect the frontend employee dashboard with backend APIs.",
          taskDate: "2026-08-21",
          category: "Backend"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          taskTitle: "Fetch Employee Data",
          taskDescription:
            "Fetch employee details from the backend and display them.",
          taskDate: "2026-08-22",
          category: "Backend"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Setup Axios",
          taskDescription:
            "Configure Axios for making API requests.",
          taskDate: "2026-08-18",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Handle API Errors",
          taskDescription:
            "Add proper error handling for failed API requests.",
          taskDate: "2026-08-23",
          category: "Backend"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Test API Endpoints",
          taskDescription:
            "Test all employee-related API endpoints.",
          taskDate: "2026-08-19",
          category: "Testing"
        }
      ]
    },

    {
      id: 5,
      firstName: "Vikram",
      email: "employee5@gmail.com",
      password: "123",

      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 2,
        total: 5
      },

      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Create Reports Page",
          taskDescription:
            "Build a page to display employee performance reports.",
          taskDate: "2026-08-21",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          taskTitle: "Add Search Feature",
          taskDescription:
            "Add a search feature to find employees quickly.",
          taskDate: "2026-08-22",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Create Employee Profile",
          taskDescription:
            "Create a profile page showing employee information.",
          taskDate: "2026-08-17",
          category: "UI/UX"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          taskTitle: "Add Notifications",
          taskDescription:
            "Implement notifications for newly assigned tasks.",
          taskDate: "2026-08-24",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          taskTitle: "Test Dashboard",
          taskDescription:
            "Perform functional testing of the employee dashboard.",
          taskDate: "2026-08-19",
          category: "Testing"
        }
      ]
    }
];

export default employees;
const admin=[
  {
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
  }
];
export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))

    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}