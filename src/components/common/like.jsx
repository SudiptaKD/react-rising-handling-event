import React from 'react'

const  Like = (props) => {

    const icon = (p) => {
        let classes = <i className="fa  fa-heart" aria-hidden="true"></i>
        if (!p) classes = <i className="fa  fa-heart-o" aria-hidden="true"></i>
        return classes;
    }

    return (
        <div>
            <div type="button" style={{ cursor: 'pointer'}} onClick={props.onLike} > {icon(props.liked)} </div>                   
        </div>
    )
}

export default Like
