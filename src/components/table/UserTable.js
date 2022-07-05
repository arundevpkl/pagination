import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../UI/Card'
import CustomPaginationActionsTable from './Table'

function UserTable() {
  const posts = useSelector((state)=> state.data.posts)
  return (
    <Card>
      <CustomPaginationActionsTable posts={posts} />
    </Card>
  )
}

export default UserTable