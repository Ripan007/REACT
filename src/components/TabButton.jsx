export default function TabButton({ children, onSelect }) {
    function handleClick() {
        console.log('button got clicked')
    }
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}
