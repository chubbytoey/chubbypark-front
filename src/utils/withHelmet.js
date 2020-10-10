import React from 'react'
import { Helmet } from 'react-helmet'
import fontFile from '../assets/HelveticaNeue.ttc'

function withHelmet (title) {
  return Component => props => (
    <>
      <Helmet>
        <link href={fontFile} />
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}
export default withHelmet
