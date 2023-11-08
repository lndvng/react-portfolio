import React from 'react'
import ProjectsItem from './ProjectsItem'
// importing project images
import pokedexImg from '../assets/PokeDexSS.png'
import helpdeskImg from '../assets/HelpDeskTechView.png'
// import PWAImg from '../assets/PWA-text-editor.png'
// import SocialImg from '../assets/Social-api.png'
// import EcommerceImg from '../assets/Ecommerce.png'
import EmpTrackerImg from '../assets/Employee-tracker.png'
import SnackHappyImg from '../assets/Snack-happy.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-serif text-center text-black '>Projects </h1>
            <p className='text-center font-serif py-8'>Explore a collection of projects that demonstrate my proficiency in both front-end and back-end development. From creating captivating user interfaces to architecting robust server-side solutions, my work reflects a harmonious blend of technical skills aimed at delivering exceptional web applications. Dive in and witness the synergy of creativity and functionality in each project.</p>
            {/* clickable project preview images that will open project links in new window */}
            <div className='grid sm:grid-cols-2 gap-12'>
                <a href='https://github.com/KrystianKowalak/poke-match' target='blank'>
                    <ProjectsItem img={SnackHappyImg} title='snack happy preview' />
                </a>
                <a href='https://github.com/KrystianKowalak/poke-match' target='blank'>
                    <ProjectsItem img={pokedexImg} title='PokedexImg' />
                </a>
                <a href='https://murmuring-chamber-70429-75790581b652.herokuapp.com/login' target='blank'>
                    <ProjectsItem img={helpdeskImg} title='HelpdeskImg' />
                </a>
                <a href='https://github.com/lndvng/employee-tracker' target='blank'>
                    <ProjectsItem img={EmpTrackerImg} title='' />
                </a>
            </div>
        </div>
    )
}

export default Projects;