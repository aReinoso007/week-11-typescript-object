
interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children || 'Sample button'}</button>
    )
}