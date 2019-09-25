// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.primaryDark};
  display: inline-block;
  padding: 0.8rem 2.8rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.primaryDark};
    color: #fff;
  }
`

const Button = ({ text, to }) => <StyledButton>{text}</StyledButton>

Button.propTypes = {
  text: PropTypes.string
}

Button.defaultProps = {
  text: ``
}

export default Button
