import React from 'react';


export function createHocWithProps<ThroughProps, AdditionalProps>(Hoc: React.ComponentType) {
    return function catchAdditionalProps(additionalProps: AdditionalProps) {
        return function createHocWrapper(Descendant: React.ComponentType) {
            class Wrapper extends React.PureComponent<ThroughProps> {
                render() {
                    return <Hoc Descendant={Descendant} {...this.props} {...additionalProps} />;
                }
            }
            return Wrapper;
        }
    }
}
