export default function TabButton({ children, isSelected, ...props }) {
    function handleClick() {
        console.log('button got clicked')
    }
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    )
}
