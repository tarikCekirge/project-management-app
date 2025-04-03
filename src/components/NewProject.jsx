import React from 'react'
import Input from './Input'

const NewProject = () => {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <form>
                <Input label={"Title"} name={'title'} />
                <Input label={"Description"} name={'description'} textArea />
                <Input label={"Due Date"} name={'date'} />
            </form>
        </div>
    )
}

export default NewProject
