import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import{CgMail} from"react-icons/cg"
import '../Social/social.css'

const Social = () => {
  return (
    <ul class="icon">
      <li><a href="mailto:cysnova@gmail.com"><CgMail/></a></li>
      <li><a href="http://www.linkedin.com/in/nova-sin/"><FaLinkedin/></a></li>
      <li><a href="http://github.com/cysnova"><FaGithub/></a></li>
   </ul>
)                       
}

export default Social