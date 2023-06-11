import React from 'react'

const NewsList = ({ title, date, desc }) => {
  return (
    <article>
        <h3>| {title}</h3>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{date}</h4>
        <p>---</p>
        <p>{desc}</p>
    </article>
  )
}

export default NewsList