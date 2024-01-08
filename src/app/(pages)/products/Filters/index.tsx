import React from 'react'
import { Checkbox } from 'payload/components/forms'

import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {}
  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = false

            // return <Checkbox key={category.id} label={category.title} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Filters
