function Input({ label, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={label}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        />
    )
}

export default Input