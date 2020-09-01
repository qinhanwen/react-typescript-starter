import React, { useEffect, useState } from 'react'
import './index.scss'

function ComputedOne() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setcount(1)
    }, 2000)
  }, [])
  return <p className='computed-one'>{count}</p>
}

export default ComputedOne

// import React from 'react'
// import './index.scss'
// import { add } from 'Utils/math'

// interface IProps {
//   a: number
//   b: number
// }

// function ComputedOne(props: IProps) {
//   const { a, b } = props
//   const sum = add(a, b)

//   return <p className='computed-one'>{`Hi, I'm computed one, my sum is ${sum}.`}</p>
// }

// export default ComputedOne
