const employees = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare Monthly Report",
                "description": "Compile the financial data for the monthly report.",
                "date": "2024-10-20",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Client Meeting",
                "description": "Attend the meeting with Client A to discuss requirements.",
                "date": "2024-10-18",
                "category": "Meetings"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Update Inventory System",
                "description": "Update the inventory tracking system with the latest stock info.",
                "date": "2024-10-21",
                "category": "Operations"
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design Website Mockup",
                "description": "Create a mockup for the new client website.",
                "date": "2024-10-19",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Submit Time Sheets",
                "description": "Submit time sheets for the last two weeks.",
                "date": "2024-10-17",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Project Delivery",
                "description": "Deliver the final version of the project to the client.",
                "date": "2024-10-16",
                "category": "Projects"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Create Marketing Plan",
                "description": "Develop a marketing strategy for Q4.",
                "date": "2024-10-22",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Database Optimization",
                "description": "Optimize database queries for faster access times.",
                "date": "2024-10-20",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Bug Fixes",
                "description": "Resolve critical bugs reported by the QA team.",
                "date": "2024-10-19",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update Documentation",
                "description": "Update project documentation for version 2.0 release.",
                "date": "2024-10-18",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 4,
        "name": "Bob Brown",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Test Software Release",
                "description": "Perform testing on the new software release.",
                "date": "2024-10-21",
                "category": "QA"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Organize Team Meeting",
                "description": "Arrange a meeting for project kickoff.",
                "date": "2024-10-18",
                "category": "Meetings"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Update Codebase",
                "description": "Merge feature branch with the main codebase.",
                "date": "2024-10-19",
                "category": "Development"
            }
        ]
    },
    {
        "id": 5,
        "name": "Charlie Davis",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Conduct User Research",
                "description": "Survey customers to gather feedback on the new product.",
                "date": "2024-10-20",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Prepare Presentation",
                "description": "Create a presentation for the next client meeting.",
                "date": "2024-10-19",
                "category": "Sales"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Develop API",
                "description": "Implement the REST API for the new feature.",
                "date": "2024-10-21",
                "category": "Development"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "123",
    }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};