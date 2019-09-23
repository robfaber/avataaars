import * as React from 'react';
import Option from './Option';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
    children?: React.ReactNode;
}
declare const Selector: (props: Props) => null;
export default Selector;
