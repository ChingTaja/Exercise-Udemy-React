import Button from './Button';

export default function Project({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
        <div>
          <Button onClick={onStartAddProject}> + Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClasses = 'w-full px-2 py-1 rounded-sm text-left my-1 hover:bg-stone-800 hover:text-stone-200';

            if (project.id === selectedProjectId) {
              cssClasses += ' bg-stone-800 text-stone-200';
            } else {
              cssClasses += ' text-stone-400';
            }

            return (
              <li key={project.id}>
                <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
