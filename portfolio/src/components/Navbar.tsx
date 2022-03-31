function NavBar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        
                        <h1 className="ml-4 text-2xl font-bold text-gray-800">
                            Lokesh
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <a href="home">home</a>
                        <a href="about">about</a>
                        <a href="contact">contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;