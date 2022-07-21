import React from 'react'
import styled from "styled-components"
const Li = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    list-style: none;
    color: #625ac9 !important

`
const ListItem = ({ name, Icon}) => {
  return (
    <Li>
        <Icon />
        <span style={{ fontSize: "12px", fontWeight: "bold"}}>{name}</span>
    </Li>
  )
}

export default ListItem