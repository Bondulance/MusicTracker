const APIController = (function() {

    const clientId = "48eac9498c214ec0a66c04f9542d0d46";      // <-- fill in
    const clientSecret = "1ab2690a75f24f22a4cf57b534fea862";  // <-- fill in

    const _getTokens = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    // 🔹 Step 1: search for an artist by name
    const _searchArtist = async (token, artistName) => {
        const result = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`,
            {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            }
        );
        const data = await result.json();
        return data.artists.items[0]; // return the first matching artist
    }

    // 🔹 Step 2: get artist details by ID (optional if you want more info)
    const _getArtist = async (token, artistID) => {
        const result = await fetch(`https://api.spotify.com/v1/artists/${artistID}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data;
    }

    return {
        getTokens() {
            return _getTokens();
        },
        searchArtist(token, artistName) {
            return _searchArtist(token, artistName);
        },
        getArtist(token, artistID) {
            return _getArtist(token, artistID);
        }
    }

})();

// 🔹 Hook into your form
document.getElementById("artist_form").addEventListener("submit", async (e) => {
    console.log("event listener activated");
    e.preventDefault(); // prevent reload
    const artistName = document.getElementById("artistName").value;

    const token = await APIController.getTokens();
    const artist = await APIController.searchArtist(token, artistName); // search instead of getArtist

    if (!artist) {
        document.getElementById("result").innerHTML = `<p>No artist found.</p>`;
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>${artist.name}</h3>
        <p>Genres: ${artist.genres.join(", ") || "N/A"}</p>
        <p>Followers: ${artist.followers.total.toLocaleString()}</p>
        <img src="${artist.images[0]?.url || ""}" width="200"/>
    `;
});
