import React, { useState } from 'react'
import { Pagination } from './pagination'

const PaginationDemo = () => {
  const [currentPage, setCurrent] = useState(1)
  const pageChange = (v: any) => {
    console.log(v)
    let c = v
    setCurrent(c)
  }
  const pageNodeRender = (item: any) => {
    return (
      <div>
        {/* 自定义 */}
        {'第' + item.text + '页'}
      </div>
    )
  }
  // console.log(currentPage)
  return (
    <div className="demo">
      <h2>基础用法</h2>
      <Pagination modelValue={currentPage} totalItems="25" itemsPerPage="5" onChange={pageChange} />
      <h2>简单模式</h2>
      <Pagination modelValue={currentPage} pageCount={12} mode="simple" onChange={pageChange} />
      <h2>显示省略号</h2>
      <Pagination
        modelValue={currentPage}
        totalItems="125"
        showPageSize="3"
        forceEllipses
        onChange={pageChange}
      />
      <h2>自定义按钮</h2>
      <Pagination
        // defaultValue={currentPage}
        // modelValue={currentPage}
        totalItems="500"
        showPageSize="5"
        onChange={pageChange}
        prevText={'prev'}
        nextText={'next'}
        pageNodeRender={pageNodeRender}
      />
    </div>
  )
}

export default PaginationDemo
