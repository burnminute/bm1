# bm1

![Burnminute - Basic Flow](https://github.com/burnminute/assets/raw/master/images/png/burnminute-logo-1.png)

## spec links

- [Burnminute - Basic Flow](https://github.com/burnminute/assets/blob/master/docs/basic-flow.md)
- [Initial project setup (+ TS)](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1)
- [Apollo GQL Express Mongo set-up](https://sysgears.com/articles/how-to-create-an-apollo-react-express-application/)

## git setup

Fork this repository on GitHub and clone your forked origin to your desktop.

### Add upstream repository

```shell
cd bm1

git remote add upstream https://github.com/burnminute/bm1.git
```

### Run rebase fns against upstream/master

- Add this bash script to your `.profile`, etc for an uber rebase against the main upstream fork, with an optional target branch (defaults to **"master"**).

  ```shell
  function y-r () {
    local thebranch="master"
    if [ $1 ]
    then  
      thebranch=$1
    fi
    echo the target branch is $thebranch
    git checkout $thebranch ;
    git fetch --prune upstream ;
    git rebase upstream/$thebranch ;
    git push --force origin $thebranch ;
    yarn install;
  }
  ```  

  > Example:
  `$ y-r "my-new-branch"`

---

# Server

- Trying a MERN stack, based on [this tutorial](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1)

---

# CRA Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `yarn build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
