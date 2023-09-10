const SearchBar = () => {
    return (
        <div style={{ width: '100%', padding: '10px', display: 'flex', alignItems: 'center', position : 'absolute',backgroundColor : 'white' }}>
            <input
                style={{ width: "inherit", borderRadius: '25px', height: '50px', paddingInline: '20px', border: '1px solid' }}
                placeholder="Search here.."
            />
        </div>
    )
}

export default SearchBar