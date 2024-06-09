import React, { useState } from 'react'
import ProjectsSideBar from './components/ProjectsSideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SelectedProject from './components/SelectedProject'

export default function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    })

    function handleSelectProject(id) {
        setProjectsState(prevState => {
            return { ...prevState, selectedProjectId: id }
        })
    }
    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        })
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random(),
            }
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            }
        })
    }
    function handleCancelAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            }
        })
    }
    // console.log(projectsState)
    const selectedProject = projectsState.projects.find(
        project => project.id === projectsState.selectedProjectId
    )
    let content = <SelectedProject project={selectedProject} />
    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelAddProject}
            />
        )
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        )
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSideBar
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
            />
            {content}
        </main>
    )
}
