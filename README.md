First of all, hats off to this legend [BroCode](https://www.youtube.com/@BroCodez)

> REACT Tutorial link [React Full Course for free ⚛️ (2024)](https://www.youtube.com/watch?v=CgkZ7MvWUAA)

# **REACT JS**

React is a JavaScript **library** for web-development, to build dynamic and interactive UI.

Mainly used to develop Single Page Applications (SPAs). SPAs are web-apps with only 1 page where the content dynamically changes i.e., the page never gets reloaded upon interactions. Only the content that has to change will be changed rest will stay the same and hence the page need not reload every time.

The above can also be done with just JavaScript also, but it is very difficult and REACT helps to make this easier.

<br><hr>

### DOM

Document Object Model => created by browser using the HTML files, as per the tags in the HTML. This forms a tree-like structure which is called as DOM.

Broswer <br>
---> gets HTML and creates **DOM** <br>
---> gets CSS and applies the **styling** to the respective DOM elements (HTML tags) <br>
---> JS may next **modify the DOM** as per the logic programmed/on user actions.

DOM manipulation using only JS becomes difficult when working on big applications. REACT abstracts away this difficulty with JS because JS is cumbersome, error-prone, and hard to maintain.

<br><hr>

### Working of REACT

- **no need to querying** for updating DOM elements.
- creates a webpage with **small and reusable components**.
- REACT will take care of **creating and updating DOM**.
- **saves a lot of time** in development.

> JS is **_IMPERATIVE_** (define each and every step/state) <br> REACT is **_DECLARATIVE_** (define target UI state and REACT figures out how to get to that)

<br><hr>

## Components

They are reusable parts of a webpage that makes it modular and better organized. We can define the components individually and use them when needed wherever needed.

The same components can be used on different pages and helps us changing the layout or content of a webpage by changing the order of removing / adding components on a webpage.

This helps increase reausability and reduces repetition in the code. We can define a component that will be repeated multiple times and make small changes each time it is rendered. No need to make the whole component again and again (Ctrl+C, Ctrl+V).

<br>

A REACT application is a **"tree"** of Components with the **App Component** as the root node i.e., the App Component will be the base page in which other individual components are rendered.

<br><hr>

## Setup

1. download and install **_Node.JS_**
2. Install VSCode extensions : **_Live Server, Prettier_**, and change setting to wrap words (Ctrl+P $ \rarr $ Word Wrap) and Tab size 2 (default is 4)

<br><hr>

## Creating a REACT App

|      CRA (Create-React-App)      |                        Vite                        |
| :------------------------------: | :------------------------------------------------: |
|          Official tool           | Modern tool that produces a quick and small bundle |
| `npm start` to lauch dev server. |         `npm run dev` to lauch dev server.         |

We shall use Vite.

<br>

```sh
$ npm --version
10.2.1

$ npm create vite@latest
Need to install the following packages:
create-vite@5.1.0
Ok to proceed? (y) y
√ Project name: ... first-react-app
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in D:\dev\PROJECTS\learning-REACT\first-react-app...

Done. Now run:

  cd first-react-app
  npm install
  npm run dev

$ cd first-react-app
first-react-app $ ls

Directory: D:\dev\PROJECTS\learning-REACT\first-react-app

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        12/24/2023   4:41 PM                public
d-----        12/24/2023   4:41 PM                src
-a----        12/24/2023   4:19 PM            526 .eslintrc.cjs
-a----        12/24/2023   4:19 PM            253 .gitignore
-a----        12/24/2023   4:19 PM            361 index.html
-a----        12/24/2023   4:41 PM            660 package.json
-a----        12/24/2023   4:19 PM            451 README.md
-a----        12/24/2023   4:19 PM            163 vite.config.js

$ npm install
added 269 packages, and audited 270 packages in 3m

97 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ ls
Directory: D:\dev\PROJECTS\learning-REACT\first-react-app


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        12/24/2023   4:47 PM                node_modules
d-----        12/24/2023   4:41 PM                public
d-----        12/24/2023   4:41 PM                src
-a----        12/24/2023   4:19 PM            526 .eslintrc.cjs
-a----        12/24/2023   4:19 PM            253 .gitignore
-a----        12/24/2023   4:19 PM            361 index.html
-a----        12/24/2023   4:47 PM         143251 package-lock.json
-a----        12/24/2023   4:41 PM            660 package.json
-a----        12/24/2023   4:19 PM            451 README.md
-a----        12/24/2023   4:19 PM            163 vite.config.js

$ npm run dev

> first-react-app@0.0.0 dev
> vite


  VITE v5.0.10  ready in 2363 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```


| File                     | Description                                                                 |
| :----------------------- | :-------------------------------------------------------------------------- | -------------------------------- |
| **`node_modules/`**      | contains all the installes node packages                                    |
| **`public/`**            | contains the static files that don't change                                 |
| **`src/`**               | is the main folder for all the REACT code                                   |
| **`src/components/`**    | contains reusable parts of UI aka "components"                              |
| **`src/assets/`**        | contains images, fonts and other static files                               |
| **`src/styles/`**        | contains CSS stylesheets                                                    |
| **`package.json`**       | contains information of project like project                                | name, version, dependencies, etc |
| **`vite.config.js`**     | contains the Vite configuration information.                                |
| **`.eslintrc.cjs`**      | linting tool configs                                                        |
| **`.gitignore`**         | tells git to ingnore some particular files when pushing                     |
| **`package-lock.jsnon`** | created when app is run and stores the current configs as in `package.json` |

<br><hr>

## Next steps

Next all the instructions and information/explanation is written in the code itself using example and code comments :)
