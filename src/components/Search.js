function Search({ formSubmit }) {
    
    return (
        <form onSubmit={formSubmit} >Search for a city or zipcode: 
            <input />
            <button>🔎</button>
        </form>
    )
}

export default Search;