import React from 'react'
import { SortableTable } from './SortableTable'
import { IProps } from './types'



const mockDataForSortableTable: IProps = {

    rows: [
        {userID: 2, id: 35, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit '},
        {userID: 1, id: 3555, title: ' Eos, veritatis. Ullam, ducimus'},
        {userID: 4, id: 33, title: ' Optio neque tempore, vel nihil ipsum obcaecati vitae repudiandae laboriosam deleniti'},
        {userID: 3, id: 3566, title: 'ratione in asperiores molestias minus illum ut!'},
    ]
}

export const HomeWork3 = () => {
  return (
    <SortableTable rows={mockDataForSortableTable.rows}/>
  )
}
