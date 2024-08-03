import Home from "./routes/Home.jsx"
import './App.css'
import HeaderNav from './components/HeaderNav.jsx'
import '@mantine/core/styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';

function App() {
return (
  <MantineProvider>
  <Home/>
</MantineProvider>
)
}

export default App
