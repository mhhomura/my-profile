import React from "react";
import {
    Routes,
    Route,
} from 'react-router-dom';
import Layout from "../components/Layout";
import Dashboard from "../Pages/Dashboard";

const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route exact path="" element={<Dashboard />} />
        </Routes>
    </Layout>
);

export default AppRoutes;