class RickAndMortyService {
    constructor() {
        this.baseUrl = "https://rickandmortyapi.com/api/character";
    }

    async getAllCharacters() {
        try {
            const response = await fetch(this.baseUrl);
            const data = await response.json();
    
            if (data.results && Array.isArray(data.results)) {
                const specificIndices = [10, 11, 17, 15, 7, 16];
                const characters = specificIndices.map(index => data.results[index]);
                return characters;
            } else {
                console.error("Invalid API response:", data);
                return [];
            }
        } catch (error) {
            console.error("Error fetching characters:", error);
            return [];
        }
    }
    
}

export default RickAndMortyService;
