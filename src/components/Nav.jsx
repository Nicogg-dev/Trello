import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <Link 
                                    to="/"
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                                    BackLog
                                </Link>
                                <Link
                                    to="/add"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Add
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 ">
                        <Link to='/' className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                            BackLog
                        </Link>
                        <Link to="/add" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                            Add
                        </Link>
                    </div>

                </div>
            </nav>

        </div>
    );
};
