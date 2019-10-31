# Roleet

Website developped to train a bit in tech

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

#### 4. Mock data

- Think about what entities you want to display, what fields you'll need, and how you'll want to organize these fields
- Create literal objects for these entities, and store them in separate files
- Call these mockData from your components. Be sure to use them in the `componentDidMount()` function and **not** in the constructor. For now, test it via a `console.log()`

## Used libraries

- `node-sass`: Use .scss files and make for easier styling
- `react-router-dom`: Add a router to your app, to ease UX and add browser usability
- `dotenv`: Add an env file to your generic conf
