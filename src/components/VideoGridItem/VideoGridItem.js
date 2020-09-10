import React from 'react'
import Stye from './VideoGridItem.module.scss'
import { Link } from 'react-router-dom'

const VideoGridItem = ({ id, src, title}) => {
    return (
        <Link to={{ pathname: 'watch',search: `?v=${id}`}} className={Stye.item}>
            <div>
                <img src={src} alt={title} />
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default VideoGridItem
