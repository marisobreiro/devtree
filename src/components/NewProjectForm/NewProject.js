import NewProjectForm from './NewProjectForm';
import { useNavigate } from 'react-router-dom'

function NewProject() {

    function createPost(project) {
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', 
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <NewProjectForm handleSubmit={createPost}/>
        </div>
    )
}

export default NewProject;