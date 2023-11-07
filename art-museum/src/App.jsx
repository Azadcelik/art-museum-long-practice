import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import  harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation'
import {Outlet} from 'react-router-dom'
import GalleryView from './components/ GalleryView/GalleryView.jsx'
function Layout () { 

  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
  
}

const router = createBrowserRouter([
  { 
    element : <Layout />,
    children: [
      {
        path: '/galleries',
        element: <GalleryNavigation galleries={harvardArt.records} />
       
      },
      { 
        path: '*',
        element : <h2>Page Not Found</h2>
      },
      {
        path : '/galleries/:galleryid',
        element : <GalleryView />
      }
    ]
  }
 
])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
