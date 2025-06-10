export default function Friend({ friend }) {
    return (
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px', borderRadius: '8px' }}>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
        </div>
    )
}
