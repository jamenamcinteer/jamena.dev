import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import Button from "../components/button"
import Tree from "react-tree-graph"
import "react-tree-graph/dist/style.css"
import "../components/tree-graph.css"
import SEO from "../components/seo"
// import data from "../data/study-roadmap"

const PageSection = styled.div`
  margin: 4rem 0;
`

const PageSectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  text-align: center;
`

const ContentSection = styled.div`
  font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 1.6;

  h1, h2, h3, h4 {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
`

const LearningPage = () => {
  const themeContext = useContext(ThemeContext)

  const data = {
    name: 'React',
    textProps: {x: -20, y: 25},
    children: [
      {
        name: 'Node.js/Express',
        textProps: {x: -20, y: 25},
        children: [
          {
            name: 'Unit Testing',
            textProps: {x: -20, y: 25},
            children: [
              {
                name: 'Webpack',
                textProps: {x: -20, y: 25},
                children: [
                  {
                    name: 'TypeScript',
                    textProps: {x: -25, y: 25},
                    gProps: {
                      className: 'inprogress-node',
                      onClick: onClick
                    },
                    children: [
                      {
                        name: 'GraphQL',
                        textProps: {x: -20, y: 25},
                        gProps: {
                          className: 'inprogress-node',
                          onClick: onClick
                        },
                        children: [
                          {
                            name: 'Docker + K8s',
                            textProps: {x: -20, y: 25},
                            gProps: {
                              className: 'inprogress-node',
                              onClick: onClick
                            },
                            children: [
                              {
                                name: 'Python',
                                textProps: {x: -20, y: 25},
                                gProps: {
                                  className: 'inprogress-node',
                                  onClick: onClick
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Algorithms and Data Structures',
                        textProps: {x: -20, y: 25},
                        gProps: {
                          className: 'inprogress-node',
                          onClick: onClick
                        }
                      },
                      {
                        name: 'Webpack Deep Dive',
                        textProps: {x: -20, y: 25},
                        gProps: {
                          className: 'inprogress-node',
                          onClick: onClick
                        }
                      },
                      {
                        name: 'Greensock (SVG Animation)',
                        textProps: {x: -20, y: 25},
                        gProps: {
                          className: 'inprogress-node',
                          onClick: onClick
                        }
                      }
                    ]
                  },
                  {
                    name: 'React Native',
                    textProps: {x: -25, y: 25},
                    gProps: {
                      className: 'inprogress-node',
                      onClick: onClick
                    },
                  }
                ]
              },
              {
                name: 'Jest',
                textProps: {x: -20, y: 25}
              },
              {
                name: 'React Testing Library',
                textProps: {x: -20, y: 25}
              },
              {
                name: 'Enzyme',
                textProps: {x: -20, y: 25}
              },
              {
                name: 'C#',
                textProps: {x: -20, y: 25}
              }
            ]
          }
        ]
      },
      {
        name: 'Git',
        textProps: {x: -20, y: 25}
      },
      {
        name: 'UI/UX',
        textProps: {x: -20, y: 25}
      },
      {
        name: 'Accessibility',
        textProps: {x: -20, y: 25}
      },
      {
        name: 'ES6',
        textProps: {x: -20, y: 25}
      }
    ]
  }

  const [dynamicData, setDynamicData] = useState(data)

  function onClick(event, nodeKey) {
    let newData;

    function checkNodes(children) {
      children.map(node => {
        // go through the child nodes
        if(node.name !== nodeKey) {
          // check the next node
          if(node.children) checkNodes(node.children)
        }
        else newData = node
        return false;
      })
    }

    checkNodes(dynamicData.children)
    if(newData) setDynamicData(newData)
  }

  function reset(e) {
    e.preventDefault()
    setDynamicData(data)
  }

  return (
    <>
      <SEO title="Learning" />

      <PageSection>
        <PageSectionHeader>Learning</PageSectionHeader>
        <ContentSection>
        <p>Learning is extremely important to me. I am constantly reading, studying, and expanding my skills and knowledge in this field. Here's a glimpse into what I've been learning lately.</p>
        <h3>Reading List</h3>
        <h4>Currently Reading</h4>
        <ul>
          <li>A Programmer's Guide to Computer Science</li>
          <li>Cracking the Coding Interview</li>
          <li>You Don't Know JS: Types & Grammar</li>
        </ul>
        <h4>In the Queue</h4>
        <ul>
          <li>High Performance Browser Networking</li>
          <li>Modern PHP: New Features and Good Practices</li>
          <li>You Don't Know JS: this & Object Prototypes</li>
          <li>You Don't Know JS: ES6 & Beyond</li>
          <li>You Don't Know JS: Up & Going</li>
        </ul>
        <h4>Already Read</h4>
        <ul>
          <li>You Don't Know JS: Scope & Closures</li>
          <li>You Don't Know JS: Async & Performance</li>
        </ul>
        <p>Have a book to recommend or want to chat about a book I've read? <Link to="/contact">Get in touch!</Link></p>
        <h3>Study Roadmap</h3>
        <div className={themeContext.theme} style={{overflow: 'hidden'}}>
        <Tree
          data={dynamicData}
          width={960}
          height={400}
          animated
          nodeRadius={10}
          gProps={{
            onClick: onClick
          }}
        />
        <Button
          onClick={reset}
          type="secondary"
          compact={true}
          text="Reset"
        />
        </div>
        </ContentSection>
      </PageSection>
    </>
  )
}

export default LearningPage
