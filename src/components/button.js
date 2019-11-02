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
  padding: ${props => props.compact ? "0.2rem 0.4rem" : "0.8rem 2.8rem"};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: ${props => props.type === "primary" ? props.theme.colors.background : props.theme.colors.primaryDark};
    color: ${props => props.type === "primary" ? props.theme.colors.primaryDark : props.theme.colors.background};
  }
`

const Button = ({ text, type, compact, onClick }) => <StyledButton type={type} compact={compact} onClick={onClick}>{text}</StyledButton>

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  compact: PropTypes.bool
}

Button.defaultProps = {
  text: ``,
  type: 'primary',
  compact: false
}

export default Button
