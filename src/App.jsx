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
    let content
    if (projectsState.selectedProjectId === null) {
        content = <NewProject />
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected />
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSideBar onStartAddProject={handleStartAddProject} />
            {content}
        </main>
    )
}
