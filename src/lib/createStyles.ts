import * as R from 'ramda';
import { StyleMapType, CreateStyleMapType, StylePairType } from '@/types';


export const createStyles = R.pipe<CreateStyleMapType, StylePairType[], StyleMapType>(
    R.toPairs,
    R.reduce<StylePairType, StyleMapType>((acc, [key, createStyle]) => {
        return R.assoc(key, createStyle(acc), acc);
    }, {}),
);
