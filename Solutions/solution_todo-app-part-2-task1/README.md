# To Do App - Part 2

Today we will add some extra functionality to the "To-Do" app you started building yesterday. 

Throughout the day I will give you extra tasks in the "Exercises" Slack channel - when you get a new task, please copy and paste it into this Readme file, so you have a record of everything you did today. :-)

---

## Today's goals: 

- Complete the To-Do app, by giving it more useful functionality!

---

### Task 1:

**Goals:**

- Change the way the App is working, so each new "to do" is created as an **object**, not a string.
- These changes will help us a lot when we start adding new features this afternoon!
- When you are done, the app should work the same way as before - no new features yet. :-)

**Starting in `App.js`...**

1. Create a new `h2` element **above** your `<ToDoList />`. Give it the content "TO-DO".
2. Create a third **state variable** called "currentId". It should be initialized when the app starts to a value of `1`.
3. Change the way your app works in the following ways:
    - When the app starts, your `currentToDo` state variable should be initialized as an **object**, not an empty string.
    - This object should have two properties, `text` (an empty string), and `id` (set to the `currentId` state variable).
    - As you type into the input, the `text` property of the `currentToDo` should be updated with what you type.

4. When you click the button, the `addNewToDo` function will be called - you do not need to change anything for this to work. However, you should give the `addNewToDo` function some some extra functionality:
    - First, the `currentToDo` will be added to the `toDos` state array. You do not need to change this (but note that now you will be making an array of **objects**, not strings!)
    - Once you have done this, you should **add 1** to your `currentIndex` state variable.
    - Finally, you should update the `setCurrentToDo` function call, so it resets your `currentToDo` state variable to an object (its `text` property should be an empty string, its `id` should be set to the `currentIndex` state variable).
 
5. Make sure that you also update your **child components** (e.g. their props) so that they work with the new object structure (currently they expect each "to-do" item to be a string!)

6. Finally, prove that everything you have done so far is working by creating a new "to-do" item - does it appear correctly in the "TODO" list?