import BoardCommentList_container from '@/components/unit/board_comment_list/BoardCommentList_container'
import BoardDetail_container from '@/components/unit/board_detail/BoardDetail_container'
import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (<>
        <BoardDetail_container />
        <BoardCommentList_container />
    </>
    )
}

export default index