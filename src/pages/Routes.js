import React, {lazy, Suspense} from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import FullSpinner from "../components/Spinners/FullSpinner";
import LayoutRoute from "../containers/LayoutRoute";

const Main = lazy(() => import('./Main'))
const AboutCompany = lazy(() => import('./AboutCompany'))
const Contacts = lazy(() => import('./Contacts'))
const Gallery = lazy(() => import('./Gallery'))
const Projects = lazy(() => import('./Projects'))
const ProjectDetail = lazy(() => import('./ProjectDetail'))

const Routing = () => {
    return (
        <Suspense fallback={<FullSpinner/>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/projects/:id' element={<LayoutRoute>
                        <ProjectDetail/>
                    </LayoutRoute>}>
                    </Route>
                    <Route path='projects' element={<LayoutRoute>
                        <Projects/>
                    </LayoutRoute>}>
                    </Route>
                    <Route path='gallery' element={<LayoutRoute>
                        <Gallery/>
                    </LayoutRoute>}>
                    </Route>
                    <Route path='contacts' element={<LayoutRoute>
                        <Contacts/>
                    </LayoutRoute>}>
                    </Route>
                    <Route path='about-company' element={<LayoutRoute>
                        <AboutCompany/>
                    </LayoutRoute>}>
                    </Route>
                    <Route exact path='/' element={<LayoutRoute>
                        <Main/>
                    </LayoutRoute>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default Routing;