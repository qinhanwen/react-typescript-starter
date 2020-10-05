import React, { lazy } from 'react'

const ComputedTwo = React.lazy(() => import(/* webpackChunkName: "ComputedTwo" */ 'Components/ComputedTwo'))

const ComputedTwoRouter = [{ name: '', component: ComputedTwo, path: '/cookbook/Components/ComputedTwo' }]
export default ComputedTwoRouter
