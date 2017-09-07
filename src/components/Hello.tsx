import * as React from "react";

export interface HelloProps { name: string; age: number; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello: {this.props.name} you are: {this.props.age}!</h1>;
    }
}