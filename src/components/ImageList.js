import React from 'react'

const ImageList = (props) => {
    return props.images.map((image) => {
        return <img alt=""  src={image.urls.small} />
    })
    
    
}

export default ImageList
