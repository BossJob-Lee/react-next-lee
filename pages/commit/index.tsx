import { NextPage } from 'next'
import { useState } from 'react'

const Commit: NextPage = () => {
  const [name, setName] = useState('lee')
  return (
    <div>
      commit
      <div>{name}</div>
      <div onClick={() => setName('wang')}>click</div>
    </div>
  )
}

export default Commit
