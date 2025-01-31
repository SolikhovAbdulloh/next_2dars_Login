import React from 'react'

const ContactDetails = ({params}:{params:{id:string}}) => {
  return (
    <div>ContactDetails {params.id}</div>
  )
}

export default ContactDetails