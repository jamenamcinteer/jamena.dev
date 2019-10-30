// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: ${props => props.type === "primary" ? props.theme.colors.primaryDark : props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primaryDark};
  color: ${props => props.type === "primary" ? props.theme.colors.background : props.theme.colors.primaryDark};
  cursor: pointer;
  display: inline-block;
  padding: 0.8rem 2.8rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: ${props => props.type === "primary" ? props.theme.colors.background : props.theme.colors.primaryDark};
    color: ${props => props.type === "primary" ? props.theme.colors.primaryDark : props.theme.colors.background};
  }
`

const Button = ({ text, type }) => <StyledButton type={type}>{text}</StyledButton>

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

Button.defaultProps = {
  text: ``,
  type: 'primary'
}

export default Button
