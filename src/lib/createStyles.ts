import * as R from 'ramda';
import { style } from 'typestyle'
import { StyleMapType, CreateStyleMapType, StylePairType, ClassNameMapType } from '@/types';
import { NestedCSSProperties } from 'typestyle/lib/types';


function assocNestedCssProperties(acc: StyleMapType, [key, createStyle]: StylePairType) {
    return R.assoc(key, createStyle(acc), acc)
}


function styleNestedCssProperties(nestedCssProperties: NestedCSSProperties) {
    return style(nestedCssProperties)
}


export const createStyles = R.pipe<CreateStyleMapType, StylePairType[], StyleMapType, ClassNameMapType>(
    R.toPairs,
    R.reduce<StylePairType, StyleMapType>(assocNestedCssProperties, {}),
    R.mapObjIndexed<NestedCSSProperties, string>(styleNestedCssProperties),
);
