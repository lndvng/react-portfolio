import React from 'react'
import ProjectsItem from './ProjectsItem'
import pokedexImg from '../assets/PokeDexSS.png'
import helpdeskImg from '../assets/HelpDeskTechView.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-black '>Projects </h1>
            <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error, quas magni dolor expedita placeat similique optio voluptatem in eius dolore veniam tempore repudiandae distinctio odio quos? Nisi, consequuntur ut?</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectsItem img={pokedexImg} title='PokedexImg'/>
                <ProjectsItem img={helpdeskImg} title='HelpdeskImg'/>
            </div>
        </div>
    )
}

export default Projects;