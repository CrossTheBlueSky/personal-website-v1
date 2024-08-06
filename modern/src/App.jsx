import Home from "./routes/Home.jsx"
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
return (
  <MantineProvider>
  <Home/>
</MantineProvider>
)
}

export default App
