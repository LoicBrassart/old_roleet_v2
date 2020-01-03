# Roleet

Website developped to train a bit in tech

## How to use this repo

Install yarn if not already on your system.
Once everything is installed, go to frontend folder and use `yarn install` to add every required modules.
Then load the json server and start the react scripts in new consoles. 

### Linux

If you are using gnome-terminal, this should be done by `gnome-terminal -e "yarn load:json" ; gnome-terminal -e "yarn start"`

### Windows

If you are using PowerShell, this should be done by `Start-Process yarn -ArgumentList "load:json" ; Start-Process yarn -ArgumentList "start"`


## Steps to reproduce

### Frontend

#### 1. Initialization

- CRA a `frontend` app
- Delete useless files (and update useful ones which called them)
- Install useful libraries (`node-sass`)
- Add a `reset.css`

#### 2. Basic layout

- Add basic layout components (header, footer, navbar, ...)
- Write a first style pass, to get an idea of your layout

#### 3. Routing

- Install `react-router-dom`
- Add a BrowserRouter to your app
- Declare your first pages and Routes
- Add links in your app to these routes

#### 4. Mock data (basic)

- Think about what entities you want to display, what fields you'll need, and how you'll want to organize these fields
- Create literal objects for these entities, and store them in separate files
- Call these mockData from your components. Be sure to use them in the `componentDidMount()` function and **not** in the constructor. For now, test it via a `console.log()`
- Display this data on your pages

#### 5. Mock data (json-server)

- Install the `json-server` package (globally, or as a dev dependancy, it has nothing to do on you production server)
- Move all your mock data in a `.json` file.
- In your terminal, launch it (Example command: `json-server data.json --port 5050`)
- You can now use this server as an external API, you can CRUD anything in it and it will be persisted.

#### 6. Search engine

- Now that you have a data source, you can implement a search engine
- Add a controlled form: every time it's value updates (onChange), you'll fetch data and filter it according to the new value

## Used libraries

- `node-sass`: Use .scss files and make for easier styling
- `react-router-dom`: Add a router to your app, to ease UX and add browser usability
- `dotenv`: Add an env file to your generic conf
- `axios`: Replaces the native `fetch()` command
