import React from 'react';
import noProjectImage from './assets/note.jpg';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16  object-contain mx-auto"
        src={noProjectImage}
        alt="an empty task list"
      />
      <h2 className="text-xl font-bold  text-stone-500 my-4">
        no project selected
      </h2>
      <p className="text-stone-400 mb-4">
        select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>create new project</Button>
      </p>
    </div>
  );
}
