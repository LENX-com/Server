import React, { Suspense, useEffect } from "react";
import App from "./App";
import { useDispatch, useSelector } from "react-redux";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import "./Dashboard.scss";
import "react-tabs/style/react-tabs.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { orderByUser } from "../actions/orderAction";

const Dashboard = () => {
  
  return (
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <App />
        </Windmill>
      </Suspense>
    </SidebarProvider>
  );
};

export default Dashboard;
