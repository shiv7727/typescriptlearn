import React from "react";

interface ChildProps {
    color: String;
    onClick?: () => void;
    children?: React.ReactNode;

}

export const Child = ({ color }: ChildProps) => (
    <div>
        <h1>hi there from child !</h1>
        <h2>{color}</h2>
    </div>
);

export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            <h1> ChildFc {color}</h1>
            {children}
            <button onClick={onClick}>click me </button>
        </div>
    );
}