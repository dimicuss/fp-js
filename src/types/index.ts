import React from 'react';
import { NestedCSSProperties } from 'typestyle/lib/types'


export type CreateStyleType = (styles: StyleMapType) => NestedCSSProperties


export type StylePairType = [
    string,
    CreateStyleType,
];


export interface StyleMapType {
    [key: string]: NestedCSSProperties
}


export interface ClassNameMapType {
    [key: string]: string,
}

export interface CreateStyleMapType {
    [key: string]: CreateStyleType
}


export interface RouteType {
    path: string
    title: string
    component: React.ComponentType
}
