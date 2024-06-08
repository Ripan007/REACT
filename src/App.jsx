import React, { useState } from 'react'
import ProjectsSideBar from './components/ProjectsSideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'

export default function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    })
    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        })
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSideBar onStartAddProject={handleStartAddProject} />
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        </main>
    )
}
