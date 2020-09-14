import React from 'react'
import './index.scss'
import { add } from 'Utils/math'

interface IProps {
  a: number
  b: number
}

function ComputedOne(props: IProps) {
  const { a, b } = props
  const sum = add(a, b)
  if (Array.isArray([])) {
    console.log(1)
  }
  return <p className='computed-one'>{`Hi, I'm computed one, my sum is ${sum}.`}</p>
}

export default ComputedOne
