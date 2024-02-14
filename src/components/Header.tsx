type HeaderProp = {
    children: string;
}

const Header = ({ children }: HeaderProp) => {
    return (
        <h1>{children}</h1>
    )
}

export default Header;