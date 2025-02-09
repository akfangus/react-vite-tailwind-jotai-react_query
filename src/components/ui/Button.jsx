const Button = ({ label, onClick, className = '', ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${className}`}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
