import React from 'react'
import './index.scss'

function ComputedTwo() {
  return <p className='computed-two'>111222</p>
}

export default ComputedTwo

// import React from 'react'
// import './index.scss'
// import { add } from 'Utils/math'

// interface IProps {
//   a: number
//   b: number
// }

// function ComputedTwo(props: IProps) {
//   const { a, b } = props
//   const sum = add(a, b)

//   return <p className='computed-two'>{`Hi, I'm computed two, my sum is ${sum}.`}</p>
// }

// export default ComputedTwo