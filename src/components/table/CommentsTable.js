import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../UI/Card'
import CustomPaginationActionsTable from './TableComments'




function CommentsTable(props) {
  const comments = useSelector((state)=> state.data.comments)
  return (
    <Card>
      <CustomPaginationActionsTable comments={comments} />
    </Card>
  )
}

export default CommentsTable