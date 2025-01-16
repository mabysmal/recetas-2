'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface NavBarProps {
  logoText: string;
}

const NavBar = ({ logoText }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Inicio', href: '/' },
    { title: 'Categorías', href: '/categorias' },
    { title: 'Nosotros', href: '/aboutus' },
  ];

  return (
    <nav className="bg-terracota shadow-lg">
      <div className="max-w-6xl mx-auto px-4 border-b-2 border-b-red">
        {/* Mobile Layout */}
        <div className="flex flex-start items-center h-16 md:hidden">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-crema text-2xl text-bold focus:text-red"
          >
            {isMenuOpen ? (
              <span>✕</span>
            ) : (
              <span>☰</span>
            )}
            <span className="sr-only">Menu</span>
          </button>

          {/* Centered Logo Text */}
          <Link href="/" className="flex items-center ml-20">
            <h1 className="text-3xl text-crema font-spicy">{logoText}</h1>
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-20">
          {/* Logo Text */}
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-red hover:text-crema">{logoText}</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-red text-xl hover:text-crema focus:text-dark-red"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 text-crema text-bold text-lg focus:text-red"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;