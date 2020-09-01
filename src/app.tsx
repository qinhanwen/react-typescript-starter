import React from 'react'
import './app.scss'
import ComputedOne from 'Components/ComputedOne'
import ComputedTwo from 'Components/ComputedTwo'

function App() {
  return (
    <div className='app'>
      <ComputedOne />
      <ComputedTwo />
    </div>
  )
}

export default App

// import React, { Suspense, useState } from 'react'
// import './app.scss'

// const ComputedOne = React.lazy(() => import(/* webpackChunkName: "ComputedOne" */ 'Components/ComputedOne'))
// const ComputedTwo = React.lazy(() => import(/* webpackChunkName: "ComputedTwo" */ 'Components/ComputedTwo'))

// function App() {
//   const [showTwo, setShowTwo] = useState<boolean>(false)

//   return (
//     <div className='app'>
//       <Suspense fallback={<div>Loading...</div>}>
//         <ComputedOne a={1} b={2} />
//         {showTwo && <ComputedTwo a={3} b={4} />}
//         <button type='button' onClick={() => setShowTwo(true)}>
//           显示Two啊啊啊
//         </button>
//       </Suspense>
//     </div>
//   )
// }

// export default App
