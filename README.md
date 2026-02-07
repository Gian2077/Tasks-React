# Tasks

## About the Project
**Tasks** is a Web Application built using React that allows users to add and complete tasks. It is designed to improve productivity by visually displaying activities that must be done.

### Features
- Unordered list of tasks created by the user and stored in the browser using local storage.
- Action buttons for completing, editing or deleting target tasks or each list item.
- 'Complete Task' Button will change to 'Incomplete Task', allowing user to mark a completed task as incompleted.
- Background color and 'Complete Task' action button will change when marking a task as completed, giving visual feedback to the user.
- Floating Action Button that opens a dialog element for adding new tasks.
- Dialog component for either adding new tasks or editing existing ones. When editing a task, the form inside the dialog will contain target task's current title.

## Technologies
### Front-end
- **React** - A JavaScript Library for Building User Interfaces

### Development Tools
- **Visual Studio Code** - Code Editor
- **Prettier** - Code Formatter

## Known Issues
- [1.0] Adding a new task after deleting one will duplicated IDs, editing or deleting tasks with duplicated IDs will take effect on all tasks with the same ID. (Fixed 2.0)
- [2.0] When hovering over longer task titles, the scroll animation scrolls farther than necessary to display the hidden text.
