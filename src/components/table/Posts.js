import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../ui/Card'
import CustomPaginationActionsTable from './Table'

function Posts() {
  console.log('from the post table')
  const posts = useSelector((state)=>console.log('from the post table', state.data.posts))
  return (
    <Card>
      <CustomPaginationActionsTable posts={posts} />
    </Card>
  )
}

export default Posts