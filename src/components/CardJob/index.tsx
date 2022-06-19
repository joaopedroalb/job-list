import React from 'react'
import { BottomTextHeader, Card, HeaderCard, Tag, TagContainer, TextHeaderContainer, TopTextHeader } from './style'

type CardProps = {
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

export default function CardJob(props: CardProps) {

    const getNewAndFeature = () => {
        const result = []
        if(!props.new && !props.featured)
            return 
        
        if(props.new)
            result.push('New')
        if(props.featured)
            result.push('Featured')
        
        return (
            <>
                {result.map(item=><p key={item} className={item}>{item}</p>)}
            </>
        )
        
        
    }

    return (
        <Card>
            <HeaderCard>
                <img src={props.logo} alt="logo" />
                <TextHeaderContainer>
                    <TopTextHeader>
                        <p>{props.company}</p>
                        {getNewAndFeature()}
                    </TopTextHeader>
                    <h1 className='title'>{props.position}</h1>
                    <BottomTextHeader>
                        <p>{props.postedAt}</p>
                        <p>{props.contract}</p>
                        <p>{props.location}</p>
                    </BottomTextHeader>
                </TextHeaderContainer>
            </HeaderCard>
            <TagContainer>
                {props.languages.map((item,index)=><Tag key={index}>{item}</Tag>)}
                {props.tools.map((item,index)=><Tag key={index}>{item}</Tag>)}
            </TagContainer>
        </Card>
  )
}
