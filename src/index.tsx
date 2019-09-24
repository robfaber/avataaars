import * as React from 'react'
import { OptionContext, Context, AllOptions } from './options'

import Avatar, { AvatarStyle } from './avatar'
import { default as PieceComponent } from './avatar/piece'

export { AvatarStyle } from './avatar'
export { Option, OptionContext } from './options'

export interface Props {
  avatarStyle: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export const AvatarComponent = (props: Props) => {
  const { avatarStyle, style } = props
  const optionContext = new OptionContext(AllOptions)

  React.useEffect(() => {
      function updateOptionContext () {
        const data: { [index: string]: string } = {}
        for (const option of AllOptions) {
          const value = props[option.key]
          if (!value) {
            continue
          }
          data[option.key] = value
        }
        optionContext.setData(data)
      }
      updateOptionContext()
  }, [props])

  return (
    <Context.Provider value={optionContext}>
      <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} />
    </Context.Provider>
  )
}

export default AvatarComponent

export const Piece = (props: Props) => {
  const { avatarStyle, style, pieceType, pieceSize, viewBox } = props

  const optionContext = new OptionContext(AllOptions)

  React.useEffect(() => {
    function updateOptionContext () {
      const data: { [index: string]: string } = {}
      for (const option of AllOptions) {
        const value = props[option.key]
        if (!value) {
          continue
        }
        data[option.key] = value
      }
      optionContext.setData(data)
    }
    updateOptionContext()
  }, [props])

  return (
    <Context.Provider value={optionContext}>
      <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox}/>
    </Context.Provider>
  )
}
