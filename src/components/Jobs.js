import React from 'react'
import CardJobs from './CardJobs'
import photosnap from '../assets/images/photosnap.svg'
import manage from '../assets/images/manage.svg'
import account from '../assets/images/account.svg'
import myhome from '../assets/images/myhome.svg'
import loopstudios from '../assets/images/loop-studios.svg'
import faceit from '../assets/images/faceit.svg'
import shortly from '../assets/images/shortly.svg'
import insure from '../assets/images/insure.svg'
import eyecam from '../assets/images/eyecam-co.svg'
import airfilter from '../assets/images/the-air-filter-company.svg'

const Jobs = () => {
    //Um useState com um array do que deve ser filtrado
    const [filters, setFilters] = React.useState([])
    function handleFilterClick(newFilter){
        setLista([...listaJobs])                    
        let auxFilter = [...filters]
        if(!auxFilter.includes(newFilter)){
            auxFilter.push(newFilter)
        }else{
            auxFilter.splice(auxFilter.indexOf(newFilter), 1)
        }
        setFilters(auxFilter)
    }

    let listaJobs = [
        {
            img: photosnap,
            enterpriseName: 'Photosnap',
            jobName: 'Senior Frontend Developer',
            timeStamp: '1d ago',
            workPeriod: 'Full Time',
            location: 'USA only',
            isNew: true, 
            isFeatured: true,
            tags : [
                'Frontend', 'Senior', 'HTML', 'CSS', 'Javascript'
            ]
        },
        {   
            img: manage,
            enterpriseName: 'Manage',
            jobName: 'Fullstack Developer',
            timeStamp: '1d ago',
            workPeriod: 'Part Time',
            location: 'Remote',
            isNew: true,
            isFeatured: true,
            tags: [
                'Fullstack', 'Midweight', 'Python', 'React'
            ]
        },
        {
            img: account,
            enterpriseName: 'Account',
            jobName: 'Junior Frontend Developer',
            timeStamp: '2d ago',
            workPeriod: 'Part Time',
            location: 'USA only',
            isNew: false,
            isFeatured: false,
            tags: [
                'Frontend', 'Junior', 'Javascript', 'React', 'Sass'
            ]
        },
        {
            img: myhome,
            enterpriseName: 'MyHome',
            jobName: 'Junior Frontend Developer',
            timeStamp: '5d ago',
            workPeriod: 'Contract',
            location: 'USA only',
            isNew: false,
            isFeatured: false,
            tags: [
                'Frontend', 'Junior', 'CSS', 'Javascript'
            ]
        },
        {
            img: loopstudios,
            enterpriseName: 'Loop Studios',
            jobName: 'Software Engineer',
            timeStamp: '1w ago',
            workPeriod: 'Full Time',
            location: 'Worldwide',
            isNew: false,
            isFeatured: false,
            tags: [ 
                'Fullstack', 'Midweight', 'Javascript', 'Ruby', 'Sass'
            ]
        },
        {
            img: faceit,
            enterpriseName: 'FaceIt',
            jobName: 'Junior Backend Developer',
            timeStamp: '2w ago',
            workPeriod: 'Full Time',
            location: 'UK only',
            isNew: false,
            isFeatured: false,
            tags: [
                'Backend', 'Junior', 'Ruby', 'RoR'
            ]
        },
        {
            img: shortly,
            enterpriseName: 'Shortly',
            jobName: 'Junior Developer',
            timeStamp: '2w ago',
            workPeriod: 'Full Time',
            location: 'Worldwide',
            isNew: false,
            isFeatured: false,
            tags: [
                'Frontend', 'Junior', 'HTML', 'Javascript', 'Sass' 
            ]
        },
        {
            img: insure,
            enterpriseName:'Insure',
            jobName: 'Junior Frontend Developer',
            timeStamp: '2w ago',
            workPeriod: 'Worldwide',
            isNew: false,
            isFeatured: false,
            tags: [
                'Frontend', 'Junior', 'Javascript', 'Vue', 'Sass'
            ]
        },
        {
            img: eyecam,
            enterpriseName: 'Eyecam Co.',
            jobName: 'Full Stack Engineer',
            timeStamp: '3w ago',
            workPeriod: 'Full Time',
            location: 'Worldwide',
            isNew: false,
            isFeatured: false,
            tags: [
                'Fullstack', 'Midweight', 'Javascript', 'Python', 'Django'
            ]
    
        },
        {
            img: airfilter,
            enterpriseName: 'The Air Filter Company',
            jobName: 'Front-end Dev',
            timeStamp: '1mo ago',
            workPeriod: 'Part Time',
            location: 'Worldwide',
            tags: [
                'Frontend', 'Junior', 'Javascript', 'React', 'Sass'
            ]
        }
        
        
    ]   

    const [lista,setLista] = React.useState([...listaJobs])

    React.useEffect(()=>{
        let auxLista = [...lista]
        filters.forEach(filterItem => auxLista = auxLista.filter(job => job.tags.includes(filterItem)))   
        setLista(auxLista)
    }, [filters])

    return (
        <main className="jobsComponent">
            <div className={`jobsComponent__filters ${filters.length>0 ? 'ativo': ''}`}>
                <div className="filtersContainer">
                    {filters.length>0 ? filters.map((item, index) => {
                        return  <div key={item + index}>
                            
                                    <span className="jobsComponent__filters__tag">
                                            {item}
                                    </span>
                                    <span className="jobsComponent__filters__tag--delete" onClick={()=>{
                                        handleFilterClick(item)
                                    }}
                                    >X</span>
                                </div>
                    }) : null}
                </div>
                <p onClick={()=>{
                    setLista([...listaJobs])
                    setFilters([])
                    }}>
                    Clear
                </p>
            </div>
            {
                lista.map(job =>{
                    return (
                        <CardJobs handleFilterClick={handleFilterClick} filters={filters} setFilters={setFilters} job={job} key={job.jobName + job.enterpriseName} />
                    )
                })
            }
        </main>
    )
}

export default Jobs
