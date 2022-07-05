import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../ui/Card'
import CustomPaginationActionsTable from './TableComments'



function Comments(props) {
  const comments = useSelector((state)=> state.cart.comments)
  return (
    <Card>
      <CustomPaginationActionsTable comments={comments} />
    </Card>
  )
}

export default Comments