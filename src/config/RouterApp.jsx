import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'

import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Contact } from '../Pages/Contact';
import { Blogs } from '../Pages/Blogs';
import { Dynamic_Route } from '../pages/Dynamic_Route';

const Layout = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', justifyContent: 'space-between' }}>
            <nav>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate quibusdam obcaecati, perspiciatis reiciendis, nesciunt repellat labore veritatis, nulla quae quas! Consequatur similique nostrum commodi, accusamus iusto numquam et quae.
            </nav>

            <Outlet />


            <footer>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsam quia doloribus ea modi natus hic esse omnis odit. Facilis, veritatis reprehenderit eum vitae nesciunt dolorum quos ipsum nihil repellendus.
            </footer>

        </div>
    )
}



// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <Layout />
//         ),
//         children: [
//             {
//                 path: "/",
//                 element: <div>Home</div>,
//             },
//             {
//                 path: "contact/*",
//                 element: <div>Contact 
//                     <Outlet />
//                 </div>,
//                 children: [
//                     {
//                         path: "",
//                         element: <div>Contact - Home</div>,
//                     },
//                     {
//                         path: "contact",
//                         element: <div>Contact Contact</div>,
//                     },
//                 ]
//             },
//             {
//                 path: "about/*",
//                 element: <div>Contact 
//                     <Outlet />
//                 </div>,
//                 children: [
//                     {
//                         path: "",
//                         element: <div>Contact - about</div>,
//                     },
//                     {
//                         path: "contact",
//                         element: <div>Contact about</div>,
//                     },
//                 ]
//             },
//         ]
//     },

// ]);


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="contact" element={<Home />} />

        <Route path='dashboard/*' element={<About />}>
          <Route
            path="login"
            element={<Blogs />}
            // loader={redirectIfUser}
          />
          <Route
            path="reset"
            element={<Home />}
            // loader={redirectIfUser}
          />
          <Route
            path="reset/:id"
            element={<Dynamic_Route />}
            // loader={redirectIfUser}
          />
          {/* <Route path="logout" action={logoutUser} /> */}
        </Route>
      </Route>
    )
  );


export const RouterApp = () => {
    return (
        <Home />
        // <RouterProvider router={router} />
        // <BrowserRouter>
        // <Routes>
        //     <Route path='/' element={<Home />} />
        //     <Route path='/about' element={<About />} />
        // </Routes>
        // </BrowserRouter>
    )
}
