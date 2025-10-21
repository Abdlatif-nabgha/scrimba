// Header.jsx
const Header = () => {
    return (
        <header className="flex items-center justify-center gap-3 py-7 bg-white shadow-sm border-b border-gray-200">
        <img
            src="/chef.png"
            alt="Chef Claude icon"
            className="w-[#43px] h-[#53px] object-contain"
        />
        <h1 className="text-3xl font-semibold text-gray-800">Chef Claude</h1>
        </header>
    );
};

export default Header;
