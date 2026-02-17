# Tasks

## About the Project

**Tasks** is a Web Application built using React that allows users to add and complete tasks. It is designed to improve productivity by visually displaying activities that must be done.

### Features

### [1.0](https://github.com/Gian2077/Tasks-React/releases/tag/v1.0)

- List of tasks created by the user and stored in the browser's local storage.
- Action buttons for completing, editing or deleting target tasks on each task.
- "Complete Task" button will change to "Incomplete Task", allowing the user to revert a completed task back to incomplete.
- Tasks' background color and "Complete Task" button will change when marking a task as completed, giving visual feedback to the user.
- Floating Action Button that opens a dialog element for adding new tasks.
- Dialog component for either adding new tasks or editing existing ones. When editing a task, the form inside the dialog will open with target task's current title.

### [2.0]

- Tasks can be separated in 4 types: daily, weekly, monthly and yearly. Tasks will be split and displayed in different sections according to it's type defined by the user.
- "Add Task" and "Edit Task" forms now contain radio buttons for each task type. When editing a task, the previously selected radio button will automatically be checked.
- Tasks IDs will no longer be array-based, instead, each id will be generated through JavaScript's built in crypto random ID generator, guaranteeing no task will have duplicate IDs.
- Tasks will reset to incomplete according to it's type, allowing the user to keep track more easily of routine tasks. Daily tasks will reset after 00:00, weekly tasks will reset on Sundays, monthly tasks on the first day of each month and yearly quests will reset every 1st day of the year. The application time is UTC based.

## Technologies

### Front-end

- **[React](https://react.dev/)** - A JavaScript Library for building user interfaces
- **[CSS Modules]** - Component-Scoped Styles
- **[Vite]**

### Development Tools

- **[Visual Studio Code](https://code.visualstudio.com/)** - Code Editor
- **[Prettier](https://prettier.io/)** - Code Formatter

## Known Issues

- [1.0] Adding a new task after deleting one will duplicated IDs, editing or deleting tasks with duplicated IDs will take effect on all tasks with the same ID. (Fixed [2.0])
- [2.0] When hovering over longer task titles, the scroll animation scrolls farther than necessary to display the hidden text. (Fixed [3.0])
- [2.0] After adding a task, opening the "Add Task" form again will have the previously checked radio button automatically checked. (Fixed [3.0])
- [2.0] Dialog and Form not responsive for Mobile and Smaller Screen Devices. (Fixed [3.0])

## How to Install

### Dependencies

To run this project, you will need the following dependencies installed:

- **[Node.js](https://nodejs.org/en)** - JavaScript Runtime Environment
- **[npm](https://www.npmjs.com/)** - Package Manager for Node.js

After intalling the depedencies, open the console and navigate to the project folder...

```bash
cd Tasks-React
```

...and run the following command line:

```bash
npm install
```

This will install all the necessary packages and modules, including react and vite to run the apllication.

## How to Run the Application

In the console, inside the project folder, run the following command line:

```bash
npm run dev
```

Vite will build the application and it can be accessed either by pressing ctrl + right-click on the link or by directly typing http://localhost:5173/ into your browser's nav bar

## Product Backlog

### 1.0

- [x] Tasks List
- [x] Form to add new task
- [x] Dialog to display "Add Task" Form
- [x] Floating Action Button to open Dialog with "Add Task" Form
- [x] Action Button to mark task as completed
- [x] Action Button to revert task to incomplete
- [x] Action Button to edit task
- [x] Form to edit task
- [x] Dialog to display "Edit Task" Form
- [x] Show target task's previous information when opening the "Edit Task" Form
- [x] Action Button to delete task
- [x] Save user's tasks in the browser's local storage
- [x] Create Task Provider to handle task-related code

### 2.0

- [x] Fix known issues from 1.0
- [x] Generate unique IDs for each task
- [x] Add types to tasks (daily, weekyl, monthly and yearly)
- [x] Add Radio Button options for task types in the "Add Task" Form
- [x] Add Radio Button options for task types in the "Edit Task" Form
- [x] Auto-check target task's previous type when opening the "Edit Task" Form
- [x] Create separated lists for each task type and display them accordingly
- [x] Add Scheduler to application
- [x] Add "Created At" date to task when creating a new one
- [x] Add "Completed At" date to task when marking one as completed
- [x] Remove "Completed At" date to task when reverting one back to incomplete
- [x] Create reset logic for reverting tasks back to incomplete when a certain amout of time has passed
- [x] Create Date Provider to handle date-related code
- [x] Add scroll animation to task titles when they are too long

### 3.0

- [x] Fix known issues from 2.0
- [x] Create Providers Directory
- [x] Create Task Class
- [ ] Create Task Class Methods
- [ ] Add Task Description
- [ ] Create Task Line Data Structure
- [ ] Add Task Lines
- [ ] Add Action Button to break task lines into minor tasks
