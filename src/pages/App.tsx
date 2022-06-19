import { useEffect, useState } from 'react'
import {CardContainer, Header, PageContainer} from '../styles/components'
import json from '../db/data.json'
import CardJob from '../components/CardJob'

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
    <PageContainer >
      <Header />
      <CardContainer>
        {
          jobs&&jobs.map(job=>(
            <CardJob {...job}/>
          ))
        }
      </CardContainer>
    </PageContainer>
  )
}

export default App
