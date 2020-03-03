import React from 'react';



export function createHoc<ThroughProps>(Hoc: React.ComponentType) {
    return function createHocWrapper<DescendantProps>(Descendant: React.ComponentType) {
        class Wrapper extends React.PureComponent<ThroughProps> {
            render() {
                return <Hoc Descendant={Descendant} {...this.props} />;
            }
        }


        return Wrapper;
    }
}
