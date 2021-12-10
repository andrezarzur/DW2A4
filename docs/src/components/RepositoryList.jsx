import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { Link } from "react-router-dom";

const repository = {
    name: "Atividade",
    description: "Descrição da atividade",
    link: "https://github.com/andrezarzur/DW2A4"
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repostórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
            <Link to="/signup">
                <button variant="outlined">
                    Sign up
                </button>
            </Link>
        </section>
    )
}