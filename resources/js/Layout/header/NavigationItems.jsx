import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function NavigationItems() {
    const [open, setOpen] = useState(false);

    const {url} = usePage();

    return (
        <div>
            <header className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo or Brand */}
                        <div className="text-xl font-semibold text-gray-800">
                            <Link href="/">Van</Link>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                            <Link
                                href="/"
                                className={`text-lg px-3 py-2 transition duration-150 ${
                                    url === '/' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'hover:text-blue-600'
                                  }`}
                            >
                                Tasks
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-lg px-3 py-2 transition duration-150 ${
                                    url === '/' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'hover:text-blue-600'
                                  }`}
                            >
                                Contact
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setOpen(!open)}
                                className="text-gray-700"
                            >
                                {open ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 pt-2 pb-4 space-y-2 text-sm text-gray-700">
                            <Link
                                href="/"
                                className="block hover:text-blue-600"
                            >
                                Tasks
                            </Link>
                            <Link
                                href="/contact"
                                className="block hover:text-blue-600"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default NavigationItems;
