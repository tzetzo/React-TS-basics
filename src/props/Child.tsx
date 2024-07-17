interface ChildProps {
  color: string;
  onClick: () => void; // OR  onClick(): void;
  children?: React.ReactNode; // required as of React 18
}

// doesnt tell TS that this is React Component and we cannot use .propTypes etc
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};

// tells TS this is React Function Component (with .propTypes etc) & will receive props of type ChildProps;
// === React.FunctionComponent<ChildProps>
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};
