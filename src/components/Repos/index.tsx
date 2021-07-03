import styles from './styles.module.scss'

type Repos = {
  name: string;
  url: string;
}

type ReposProps = {
  title: string;
  repos: Repos[];
}

export function Repos({ title, repos }: ReposProps) {
  return (
    <div className={styles.repos}>
      <h3>{title}</h3>
    
      <ul>
        { repos.map((repo, index) => (
          <li key={index}>
            <a href={repo.url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
