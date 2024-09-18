function recommendPlaylist() {
    const mood = document.getElementById("mood-select").value;
    const playlistResult = document.getElementById("playlist-result");
    
    let playlist;

    switch (mood) {
        case "happy":
            playlist = "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1mWvp6?si=68e2565512c1490b"; // Happy Playlist
            playlistResult.innerHTML = `<p>You seem happy! Here's a <a href="${playlist}" target="_blank">Happy Playlist</a> for you! 😊</p>`;
            break;
        case "sad":
            playlist = "https://open.spotify.com/playlist/1NrAiz9eLJr1wFqASwB1kg?si=6fbe4874bc3e4e31"; // Sad Playlist
            playlistResult.innerHTML = `<p>Feeling down? Listen to this <a href="${playlist}" target="_blank">Sad Playlist</a> 😢</p>`;
            break;
        case "energetic":
            playlist = "https://open.spotify.com/playlist/1RKu4vF5wXaIAHvHFq3llH?si=8e0d95040ec14c46"; // Energetic Playlist
            playlistResult.innerHTML = `<p>Pumped up? Get more energy with this <a href="${playlist}" target="_blank">Energetic Playlist</a> 💪</p>`;
            break;
        case "chill":
            playlist = "https://open.spotify.com/playlist/36G33rFXvEANJMS2SjP56j?si=cb59b6a01f6447de"; // Chill Playlist
            playlistResult.innerHTML = `<p>In Party Mode 🎉? Here's a <a href="${playlist}" target="_blank">Part Playlist</a> for you 😌</p>`;
            break;
        case "feeling-potato":
            playlist = "https://open.spotify.com/playlist/118LDTdoq4Ii7w9gSuTgik?si=09bb35ed906c4a67"; // Potato Feeling Playlist
            playlistResult.innerHTML = `<p>Feeling like a potato? Here's a <a href="${playlist}" target="_blank">Potato Mood Playlist</a> 🥔</p>`;
            break;
        default:
            playlistResult.innerHTML = `<p>Please select a mood to get a playlist!</p>`;
            break;
    }
}
