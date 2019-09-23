import * as React from 'react'
import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, Context, AllOptions } from './options'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, OptionContext } from './options'

import { default as PieceComponent } from './avatar/piece'

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

  const optionContext = React.useContext(Context)

  function updateOptionContext (optionContext: OptionContext, props: Props) {
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

  React.useEffect(() => {
    updateOptionContext(optionContext, props)
  }, [props])

  const { avatarStyle, style } = props
  return (
    <Context.Provider value={optionContext}>
      <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} />
    </Context.Provider>
  )
}

export default AvatarComponent

export const Piece = (props: Props) => {

  const optionContext = React.useContext(Context)

  function updateOptionContext (optionContext: OptionContext, props: Props) {
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

  React.useEffect(() => {
    updateOptionContext(optionContext, props)
  }, [props])

  const { avatarStyle, style, pieceType, pieceSize, viewBox } = props
  return (
    <Context.Provider value={optionContext}>
      <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox}/>
    </Context.Provider>
  )
}
