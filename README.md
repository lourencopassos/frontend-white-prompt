# 🦌 White Prompt Challenge - Frontend React.js | Typescript | Context API | SASS


<br>

## 🚀 Challenge
Create the frontend for a survey application using React.js that can be embeded into any HTML page. For showcasing purposes, the Create React App page is being displayed to mock the HTML website. If I had to do in this test, I would use the official [React.js doc](https://reactjs.org/docs/add-react-to-a-website.html).

## 👨🏽‍💻 Tech Stack
- React.js
- Typescript
- Context API
- HTML
- CSS
- SASS


## 📝 Functional Requirements
- The survey pop-up should load 2 seconds after the page has loaded. `DONE` 
- The survey should contain 4 steps and have 'Next' and 'Previous' buttons on steps which need them. `DONE` 
- The survey should have a 'Submit' button on the last step, which on click should set the survey as submitted and close the popup. `DONE` 
- The survey steps should contain the following: `DONE` 

|Step #   | Description  | Fields  |
|---|---|---|
|  1 | Identity  | Name (input), Email (input)  |
| 2  | Details  | Age (select), Gender (radio input)  |
|  3 | Favorites  | Favorite Book (input), Favorite Colors (multi-input checkbox)  |
|  4 | Summary  | Table with all of the data collected in the survey  |

Bonus:

- If the browser tab was closed before the survey was submitted and subsequently re-opened,
the script should re-open the survey and continue from where the user left off.
- The survey should not re-open if it was already submitted. `DONE` 



## ❗ Choices Justification
- `Context API` was choosen to handle the global state of the survey application so the questions that were being answered by the user would all be available into any component. Also Context API have a faster and easier approach than Redux
- `useReducer` were used to handle the actions since I decided to use Function Components and Hooks.
- `Typescript` makes the application easier to maintain, especially if there will be more than one software developer coding.


## 🏃‍♂️ How to run this application

1. `git clone` to download the repository;
2. `cd survey-app && yarn install && yarn start` to install the dependencies and run the application.


#### 👋🏽 How to reach me

Lourenço Passos | Fullstack Software Engineer | lo.passos93@gmail.com | 55-51-996106010





