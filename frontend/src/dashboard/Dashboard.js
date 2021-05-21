import React, { Suspense } from 'react'
import App from './App'
import { SidebarProvider } from './context/SidebarContext'
import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import './Dashboard.scss'


const Dashboard = () => {
  return (
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences>
        <App />
      </Windmill>
    </Suspense>
  </SidebarProvider>
  )
    }

    export default Dashboard 