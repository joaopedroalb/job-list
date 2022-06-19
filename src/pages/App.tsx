import { useEffect, useState } from 'react'
import {Header} from '../styles/components'
import json from '../db/data.json'

type Job = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: Array<string>,
  tools: Array<string>
}

function App() {
  const [jobs,setJobs] = useState<null|Array<Job>>(null)

  useEffect(()=>{
    setJobs(json)
  })

  return (
    <div >
      <Header />
      {
        jobs&&jobs.map(job=>(
          <div key={job.id}>
            <h1>{job.position}</h1>
            <img src={job.logo} alt="logo" />
            <p>{job.company}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
