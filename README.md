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

### Development Tools
- **[Visual Studio Code](https://code.visualstudio.com/)** - Code Editor
- **[Prettier](https://prettier.io/)** - Code Formatter

## Known Issues
- [1.0] Adding a new task after deleting one will duplicated IDs, editing or deleting tasks with duplicated IDs will take effect on all tasks with the same ID. (Fixed [2.0])
- [2.0] When hovering over longer task titles, the scroll animation scrolls farther than necessary to display the hidden text.
- [2.0] After adding a task, opening the "Add Task" form again will have the previously checked radio button automatically checked.
