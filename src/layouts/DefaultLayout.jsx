import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Loader from "../components/Loader";


export default function DefaultLayout() {
  return (
    <>
       <Loader />
       <AppHeader />
       <main className="min-vh-100">
        <Outlet />
       </main>
       <AppFooter />
    
    
    </>

  )
}