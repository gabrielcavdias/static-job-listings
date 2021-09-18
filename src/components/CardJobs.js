import React from 'react'

const   CardJobs = (props) => {
    return (
        <section className={`cardJobsComponent ${props.job.isNew ? 'newCard' : ''}`}>
            <img src={props.job.img} alt={`${props.job.jobName} logo`} />
            <div className="cardJobsComponent__infos">
                <span className="cardJobsComponent__infos__entName">
                    {props.job.enterpriseName}
                    {props.job.isNew ? <span className="new">New</span> : null}
                    {props.job.isFeatured ? <span className="featured">Featured</span> : null}
                </span>
                <h2>{props.job.jobName}</h2>
                <span className="cardJobsComponent__infos__details">
                    {props.job.timeStamp}
                    <span className="dot"></span>
                    {props.job.workPeriod}
                    <span className="dot"></span>
                    {props.job.location}
                </span>
            </div>
            <div className="cardJobsComponent__tags">
                {props.job.tags.map(tag=>{
                    return <span className="tag" key={tag} onClick={ e =>{    
                        
                        props.handleFilterClick(e.target.innerText)
                    }
                    }>{tag}</span>
                })}
            </div>
        </section>
    )
}

export default CardJobs
