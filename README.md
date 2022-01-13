# React Hooks Koans

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Tha aim of this repository is to get you started with React Hooks. Feel free to refer to the documentation or to the course materials in case of need.

## Prequisites
For this project, you will need have:
- [ ] an IDE like [VS Code](https://code.visualstudio.com/Download)
- [ ] an Browser like [Google Chrome](https://www.google.com/chrome/?brand=BNSD&gclid=CjwKCAiAlfqOBhAeEiwAYi43F-MdtK2HPyL25HDzyxniZfeuqPz6cuFbaAe1SR6Biilmr5XOs6JckRoCnukQAvD_BwE&gclsrc=aw.ds)
- [ ] [Node](https://nodejs.org/en/) and npm installed.
You can check this buy running
```
node -v
npm -v
``` 
- [ ] [git](https://git-scm.com/downloads) locally installed.

## Project Description
We will be making a clone of the game called [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/). In this game, the user gets a point (click) for every time he clicks the cookie. The user can use his clicks to buy some other bonuses. 
You will build a basic React project using functional components with Hooks that will help a user keep track of the clicks made on a button.

- Every 20 seconds, the user will get a bonus that makes every click count for `2x times` the original click value for only `5 seconds`.
- Meaning if the user click is originally `1`, it will be counted for `2`, if it is `4`, it will count for `8`.
- The user can use `100` clicks from his clicks count to buy a bonus called `Shadow clicker`. Every shadow clicker will give the user a 1 click per second bonus.  
## Instructions

### Before you start
You should create a fork of this repository under your github account and download it by running
```
$ git clone link_to_the_forked_repository
```

### Get Started
Run the following commands to start your project:
```
npm i
npm start
```

### Step 1: Implement a simple click counter

- [ ] Remove everything that is inside the App component
- [ ] Create a new directory called components. All our components are going to be created there.
- [ ] Create a functional component called `Main`.
- [ ] Import the component into the `App` component and render it there.
- [ ] Start by creating the image of the cookie. You can bring one from the internet and creating.
- [ ] Import `useState` from `react`.
- [ ] Create a state variable called `clicks` using `useState` hook.
- [ ] Use the `onClick` event listener to bind an event to make the cookie clickable and bind it to a function called `handleClick`
- [ ] Define the function handleClick inside your component. It should call `setClicks` to increment it by 1
- [ ] Create a new paragraph on top that ouputs the current score by rendering the value of `clicks`
- [ ] Try the behaviour and make sure the value is being incremented by 1 with every click.
- [ ] Clear any warnings caused by `eslint`

- [ ] Now it's time to commit your changes with a message **Implemented a simple click counter**
```
$ git add .
$ git commit -m "Implemented a simple click counter"
$ git push
```

### Step 2: Implement the automatic bonus

- [ ] Create a new state variable called `step` with `useState` hook and initialize it to `1`
- [ ] Create a new paragraph under the score paragraph indicating the step
- [ ] Update the handleClick `method` to increment the `clicks` value by the value of `step` in the state.
- [ ] Import `useEffect` hook from react.
- [ ] Create a new effect with useEffect.
- [ ] Use `setInterval` inside the effect to increment the value of `step` to `2 * step` every 20 seconds by calling `setStep` function.
- [ ] Use `setTimeout` to make this change last for only `5 seconds`

- [ ] Now it's time to commit your changes with a message **Implemented the automatic bonus**

### Step 3: Implement the shadow clicker

- [ ] Create a new state variable called `shadowClickers` with `useState` hook and initialize it to `0`.
- [ ] Create a new paragraph under the step paragraph indicating the number of shadowClickers the user has bought.
- [ ] Create a new effect that will update the value of `clicks` by the number of shadow clickers (the value of `shadowClickers`) every second.
- [ ] Create a new button to buy new shadow clickers.
- [ ] Bind the button to a new function called `handleBuyShadowClicker`.
- [ ] Implement the `handleBuyShadowClicker` method to:
    - remove 100 clicks of the current value of clicks
    - increment the number of shadow clickers by 1.
- [ ] Add a condition to the `handleBuyShadowClicker` method to only allow user to buy shadow clickers when he has enough balance.
- [ ] Test the behaviour and clear all the warnings in the console.

- [ ] Now it's time to commit your changes with a message **Implemented shadow clickers**

### Persist the state of the user thanks to localstorage

If the user exists or refreshes the page, all his progress will be lost. That's why we will use the localstorage to persist all the values in our state

- [ ] Call `localStorage.setItem()` to save the new values whenever we have an update inside our effects and methods
- [ ] Create a new effect that **`Only runs when we first visit the page`**
- [ ] Inside that effect, call `localstorage.getItem()` to set our state variables to the values in the localstorage **`if they exist`**
- [ ] We can enhance this behaviour with a new effect that runs every 10 seconds to save all the current state of the game

- [ ] Test the behaviour and clear all the warnings in the console.

- [ ] Now it's time to commit your changes with a message **Implemented state persistence**

### Extra

If you are done wih the features of the game, you can go ahead and refactor your styles and layouts to give a better experience to the players

### Submit your work for code review

You can submit your work by creating a Pull Request to the original repository under the name `your_first_name you_last_name`

### Resources

- Class Material on Moodle
- [ReactJS Documentation](https://git-scm.com/downloads)
- [React useEffect Documentation](https://reactjs.org/docs/hooks-effect.html)
- [React useState Documentation](https://reactjs.org/docs/hooks-state.html)
- [LocalStorage Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)