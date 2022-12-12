import React, { useState } from "react";

export default function App() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' },
  ]);
  function handleAddrepositorie() {
    setRepositories([...repositories, { id: Math.random(), name: 'Novo repositório' }])
  }

  return (
    <>
      <ul>
        {
          repositories.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))
        }
      </ul>
      <span class="material-icons">face</span>
      <span class="material-icons">favorite</span>
      <span class="material-icons">article</span>
      <span class="material-icons">code</span>

      <button onClick={handleAddrepositorie}>
        Adicionar Repositorio
      </button>
    </>
  )
}
