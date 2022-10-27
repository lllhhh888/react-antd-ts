
import React, { DragEvent, useEffect } from 'react'
import style from './test.module.css'

const colors = ['red', 'green', 'blue', 'black']
let configViewLeft = 0
let configViewTop = 0
let dragDivGx = 0 // 拖拽元素在整个页面的X距离
let dragDivGY = 0 // 拖拽元素在整个页面的Y距离
let mouseDisEleX = 0 // 鼠标相差被拖拽元素X距离
let mouseDisEleY = 0 // 鼠标相差被拖拽元素Y距离

const Test: React.FC = () => {
  useEffect(() => {
    const offsetLeft = configViewRef?.current?.offsetLeft
    const offsetTop = configViewRef?.current?.offsetTop
    configViewLeft = offsetLeft === undefined ? 0 : offsetLeft
    configViewTop = offsetTop === undefined ? 0 : offsetTop
  })

  const configViewRef = React.createRef<HTMLDivElement>()

  const onDrop = (event: DragEvent): void => {
    const { clientX, clientY } = event
    const x = clientX - configViewLeft
    const y = clientY - configViewTop
    const id = event.dataTransfer.getData('id')
    const ele = document.getElementById(id)
    const newNode = ele?.cloneNode(true)
    if (newNode !== undefined) {
      const n = newNode as HTMLDivElement
      n.style.margin = '0'
      n.style.position = 'absolute'
      n.style.top = (y - mouseDisEleY - 1).toString() + 'px'
      n.style.left = (x - mouseDisEleX - 1).toString() + 'px'
    }
    newNode !== undefined && configViewRef.current?.appendChild(newNode)
  }

  const onDragStart = (event: DragEvent): void => {
    const baseTop = 101
    const baseLeft = 51
    const { clientX, clientY } = event
    const target = event.target as HTMLDivElement
    const { offsetLeft, offsetTop } = target
    dragDivGx = baseLeft + offsetLeft
    dragDivGY = baseTop + offsetTop
    mouseDisEleX = clientX - dragDivGx
    mouseDisEleY = clientY - dragDivGY

    event.dataTransfer.setData('id', target.id)
  }

  return (
        <div style={{ height: '100%', width: '100%' }}>
            <div className={style['tool-container']}>
                {
                    colors.map(item => {
                      return <div
                      id={item}
                      key={item}
                      draggable="true"
                      onDragStart={onDragStart}
                      onDragEnd={(event: DragEvent): void => {
                        event.preventDefault()
                      }}
                      style={{ width: '50px', height: '50px', background: item, marginTop: '20px', marginLeft: '15px' }}>
                        {item}
                    </div>
                    })
                }
            </div>
            <div
            ref={configViewRef}
            className={style['config-view']}
             onDragOver={(event: DragEvent): void => {
               event.preventDefault()
             }}
            onDrop={onDrop}></div>
        </div>
  )
}

export default Test
