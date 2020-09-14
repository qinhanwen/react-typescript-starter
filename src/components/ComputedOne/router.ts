import React, { lazy } from 'react'

const ComputedOne = React.lazy(() => import(/* webpackChunkName: "ComputedOne" */ 'Components/ComputedOne'))

const computedOneRouter = [{ name: '', component: ComputedOne, path: '/cookbook/index' }]
export default computedOneRouter
