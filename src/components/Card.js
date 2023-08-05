import React from "react"
import cardSideIcon from "../images/right-arrow-icon.png"
import { useNavigate } from "react-router-dom"

const Card =({posts})=>{

const navigate = useNavigate()
    return(
        <div>
         <div className="card-container" >
            {posts.map((post)=>(
               
                <div key={post.id} className="post-card" onClick={()=>navigate(`/detail/${post.id}`)}>
                    <div className="post-card-top">
                        <img src={`https://picsum.photos/200?random=${post.id}`}  alt="post-img"/>
                    </div>
                    
                    <div className="post-card-bottom">
                    <div className="post-card-content">
                    <div className="post-title">{post.title.substring(0, 30) + "...."}</div>
                        <div className="post-desc">{post.body.substring(0, 100)} <span>Read more...</span></div>
                    </div>
                        
                
                <div className="card-side-icon"><img src={cardSideIcon } alt="side-icon"/></div>
                    </div>
                    </div>
                   
            ))}
           </div>
        </div>
    )
}

export default Card;