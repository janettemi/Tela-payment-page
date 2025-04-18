function Input({
    label,
    type = "text",
    placeholder = "",
    className = "",
    onClick,
  }: {
    label: string;
    type?: string;
    placeholder?: string;
    className?: string;
    onClick?: () => void;
  }) {
    return (
      <div>
        <label
          className="block font-[700] text-[16px] leading-[140%] tracking-[0%] mb-1"
          style={{ fontFamily: "Public Sans" }}
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          onClick={onClick}
          className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 ${className}`}
        />
      </div>
    );
  }
  
  export default Input;
  