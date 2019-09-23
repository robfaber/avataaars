import * as React from 'react';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, OptionContext } from './options';
export interface Props {
    avatarStyle: string;
    style?: React.CSSProperties;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
export declare const AvatarComponent: (props: Props) => JSX.Element;
export default AvatarComponent;
export declare const Piece: (props: Props) => JSX.Element;
