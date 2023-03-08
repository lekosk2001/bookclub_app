import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const BoardList_UI = (props: Props) => {

    const router = useRouter();

    return (
        <button onClick={() => { router.push(`boards/new`) }}>작성</button>
    )
}

export default BoardList_UI