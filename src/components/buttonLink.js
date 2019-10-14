// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled.span`
  a {
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
  }
`

const ButtonLink = ({ text, to }) => <StyledLink><Link to={to}>{text}</Link></StyledLink>

ButtonLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}

ButtonLink.defaultProps = {
  text: ``,
  to: ``,
}

export default ButtonLink
