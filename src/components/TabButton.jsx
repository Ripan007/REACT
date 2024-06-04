export default function TabButton({ children }) {
    function handleClick() {
        console.log('button got clicked')
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}
