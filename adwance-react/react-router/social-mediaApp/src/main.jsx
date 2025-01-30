import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App.jsx';
import CreatePost from './components/CreatePost.jsx';
import PostList  from './store/post-list-store.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/postList", element: <PostList/> },
      { path: "/create-post", element: <CreatePost/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
