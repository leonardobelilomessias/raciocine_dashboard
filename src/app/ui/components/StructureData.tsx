import React from "react";

export function StructureData({data}:{data:any}):React.JSX.Element{
    return(
        <script  id="structure-dade" type="application/ld+json"
        dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/ >
        
    
    )
}