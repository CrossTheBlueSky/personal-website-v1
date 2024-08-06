import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderNav from './components/HeaderNav.jsx'
import '@mantine/core/styles.css'
import { MantineProvider, Container } from '@mantine/core'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './routes/Contact.jsx'
import About from './routes/About.jsx'
import Home from './routes/Home.jsx'
import Projects from './routes/Projects.jsx'
import Blog from './routes/Blog.jsx'


const router = createBrowserRouter([
  {
    path: '/modern',
    element: <Home/>,
  },
  {
    path: '/modern/about',
    element: <About />,},
  {
    path: '/modern/projects',
    element: <Projects />,},
    {path: '/modern/blog',
    element: <Blog />,
    },
  {
    path: '/modern/contact',
    element: <Contact/>,},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
    <Container fluid>
    <HeaderNav/>
    <RouterProvider router={router} />
    </Container>
    </MantineProvider>
  </React.StrictMode>,
)
