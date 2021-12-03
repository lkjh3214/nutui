import React, { useState, FunctionComponent, useContext } from 'react'
import { DataContext } from '../swiper/UserContext'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './swiperitem.scss'

interface SwiperitemProps {
  direction?: string
}

interface IStyle {
  width?: string
  height?: string
  transform?: string
}

const defaultProps = {
  direction: 'horizontal',
} as SwiperitemProps

export const Swiperitem: FunctionComponent<
  Partial<SwiperitemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSteps = { ...defaultProps, ...props }
  const { children, direction } = propSteps

  const parent: any = useContext(DataContext)

  const [offset, setOffset] = useState(0)

  const b = bem('swiper-item')
  const classes = classNames(b(''))
  // const setOffset = (offset: number) => {
  //   state.offset = offset;
  // };
  const childCon = () => {
    console.log('childCon')
  }
  const style = () => {
    const style: IStyle = {}
    if (parent?.size) {
      style[direction === 'horizontal' ? 'width' : 'height'] = `${parent?.size}px`
    }
    if (offset) {
      style['transform'] = `translate${direction === 'horizontal' ? 'X' : 'Y'}( ${offset} px )`
    }
    return style
  }
  return (
    <div className={classes} style={style()}>
      {children}
    </div>
  )
}

Swiperitem.defaultProps = defaultProps
Swiperitem.displayName = 'NutSwiperitem'
