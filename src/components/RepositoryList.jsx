import { RepositoryItem } from "./RepositoryItem"
const repository = {
  name: "unform2",
  description: "Forms in React",
  link: "https://github.com/gabrieljcf/01-github-explorer"
}
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}