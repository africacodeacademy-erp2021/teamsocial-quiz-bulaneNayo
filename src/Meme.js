import React from 'react'

export const Meme =({template}) => {
    return(
        <img 
        style={{width:200}}
        key={template.id}
        src={template.url}
        alt={template.name}
      />  
    )
}