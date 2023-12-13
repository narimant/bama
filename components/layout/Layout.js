import Navbar from "../template/Navbar";


const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            {children}
        </>
    );
};

export default Layout;