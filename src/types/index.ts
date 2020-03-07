import React from 'react';


export type CreateStyleType = (styles: StyleMapType) => React.CSSProperties


export type StylePairType = [
    string,
    CreateStyleType,
];


export interface StyleMapType {
    [key: string]: React.CSSProperties
}

export interface CreateStyleMapType {
    [key: string]: CreateStyleType
}


export interface RouteType {
    path: string
    title: string
    component: React.ComponentType
}
