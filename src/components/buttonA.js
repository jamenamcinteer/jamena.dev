// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  background: ${props => props.type === "primary" ? props.theme.colors.primaryDark : props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primaryDark};
  color: ${props => props.type === "primary" ? props.theme.colors.background : props.theme.colors.primaryDark};
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

const ButtonLink = ({ text, to }) => <StyledLink href={to}>{text}</StyledLink>

ButtonLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}

ButtonLink.defaultProps = {
  text: ``,
  to: ``,
}

export default ButtonLink
