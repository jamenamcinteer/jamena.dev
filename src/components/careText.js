// import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledCareText = styled.span`
  /* border-bottom: 2px solid ${props => props.theme.colors.primaryLight}; */
  background-image: linear-gradient(to right, ${props =>
    props.theme.colors.primaryLight} 50%, ${props =>
  props.theme.colors.primaryLight} 50%);
  background-position: 0 .9em;
  background-size: 2em .8em;
  background-repeat: repeat-x;
`

const CareText = () => {
  const careArr = [
    "excellent user experiences",
    "accessibility and inclusion",
    "clear, efficient code",
    "teamwork and communication",
    "performance and security",
    "lifelong learning",
  ]
  const [careIndex, setCareIndex] = useState(0)
  const [careChanged, setCareChanged] = useState(false)
  const [displayCare, setDisplayCare] = useState(careArr[careIndex])

  let i = 0
  let speed = 50

  const callType = cI => {
    i = 0
    type(cI)
  }

  const type = cI => {
    if (i < careArr[careIndex].length) {
      setDisplayCare(prevValue => {
        return prevValue
          ? (prevValue += careArr[careIndex].charAt(i))
          : careArr[careIndex].charAt(i - 1)
      })
      i++
      setTimeout(type, speed)
    }
  }

  const callUntype = cI => {
    i = careArr[cI].length - 1
    speed = Math.floor(500 / careArr[cI].length)
    untype(cI)
  }

  const untype = () => {
    if (i < careArr[careIndex].length && i >= -1) {
      setDisplayCare(prevValue => {
        return prevValue.substring(0, prevValue.length - 1)
      })
      i = i - 1
      setTimeout(untype, speed)
    }
  }

  useEffect(() => {
    // let i = 0
    const interval = setInterval(() => {
      callUntype(careIndex)
      setTimeout(() => {
        setCareIndex(prevIndex =>
          prevIndex < careArr.length - 1 ? prevIndex + 1 : 0
        )
        setCareChanged(true)
      }, 1000)
      // i++
      // if (i === careArr.length - 1) clearInterval(interval)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (careChanged) callType(careIndex)
  }, [careIndex, careChanged])

  return <StyledCareText>{displayCare}</StyledCareText>
}

export default CareText
