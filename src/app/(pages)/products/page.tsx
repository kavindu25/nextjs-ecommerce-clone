import React from 'react'

import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

const Products = () => {
  return (
    <div className={classes.container}>
      <Gutter className={classes.gutter}></Gutter>
    </div>
  )
}

export default Products