// Music data from different countries
const musicData = [
    {
        country: "Brazil",
        flag: "🇧🇷",
        region: "americas",
        genre: "Samba & Bossa Nova",
        description: "Brazilian music is known for its infectious rhythms and passionate melodies. Samba, with its African roots, brings energy and celebration, while Bossa Nova offers a smooth, sophisticated sound.",
        artists: "Antônio Carlos Jobim, João Gilberto, Caetano Veloso"
    },
    {
        country: "India",
        flag: "🇮🇳",
        region: "asia",
        genre: "Classical & Bollywood",
        description: "Indian music features complex ragas and rhythmic patterns. From classical traditions of Hindustani and Carnatic music to the vibrant sounds of Bollywood, it's rich and diverse.",
        artists: "Ravi Shankar, A.R. Rahman, Lata Mangeshkar"
    },
    {
        country: "Jamaica",
        flag: "🇯🇲",
        region: "americas",
        genre: "Reggae & Ska",
        description: "Jamaica gave the world reggae, a genre characterized by offbeat rhythms and socially conscious lyrics. Ska and dancehall are other influential Jamaican music styles.",
        artists: "Bob Marley, Jimmy Cliff, Peter Tosh"
    },
    {
        country: "Spain",
        flag: "🇪🇸",
        region: "europe",
        genre: "Flamenco",
        description: "Flamenco is a passionate art form combining guitar, vocals, dance, and handclaps. It expresses deep emotions through intricate rhythms and soulful melodies.",
        artists: "Paco de Lucía, Camarón de la Isla, Rosalía"
    },
    {
        country: "Mali",
        flag: "🇲🇱",
        region: "africa",
        genre: "Afro-pop & Blues",
        description: "Malian music blends traditional African rhythms with modern influences. The kora, a 21-string instrument, creates mesmerizing melodies that tell ancient stories.",
        artists: "Salif Keita, Ali Farka Touré, Toumani Diabaté"
    },
    {
        country: "Ireland",
        flag: "🇮🇪",
        region: "europe",
        genre: "Celtic & Folk",
        description: "Irish traditional music features fiddles, tin whistles, and bodhráns. The lively jigs and reels, along with haunting ballads, capture the spirit of the Emerald Isle.",
        artists: "The Chieftains, Enya, The Dubliners"
    },
    {
        country: "Argentina",
        flag: "🇦🇷",
        region: "americas",
        genre: "Tango",
        description: "Tango originated in Buenos Aires and is characterized by dramatic, passionate performances. The bandoneón accordion creates its distinctive melancholic sound.",
        artists: "Astor Piazzolla, Carlos Gardel, Aníbal Troilo"
    },
    {
        country: "Japan",
        flag: "🇯🇵",
        region: "asia",
        genre: "J-Pop & Traditional",
        description: "Japanese music ranges from ancient court music and traditional folk songs to modern J-Pop and rock. The shamisen and koto are iconic traditional instruments.",
        artists: "Hikaru Utada, Ryuichi Sakamoto, Yoshida Brothers"
    },
    {
        country: "Cuba",
        flag: "🇨🇺",
        region: "americas",
        genre: "Son & Salsa",
        description: "Cuban music blends Spanish and African influences, creating rhythmic and melodic masterpieces. Son Cubano laid the foundation for salsa and other Latin genres.",
        artists: "Buena Vista Social Club, Celia Cruz, Compay Segundo"
    },
    {
        country: "South Africa",
        flag: "🇿🇦",
        region: "africa",
        genre: "Afro-jazz & Kwaito",
        description: "South African music reflects the nation's diversity, from township jazz to mbaqanga and the electronic beats of kwaito. It's vibrant and socially significant.",
        artists: "Miriam Makeba, Hugh Masekela, Ladysmith Black Mambazo"
    },
    {
        country: "Greece",
        flag: "🇬🇷",
        region: "europe",
        genre: "Rebetiko & Laïkó",
        description: "Greek music has ancient roots, from rebetiko's soulful tales to modern laïkó. The bouzouki creates distinctive melodic sounds that evoke Mediterranean beauty.",
        artists: "Mikis Theodorakis, Nana Mouskouri, Haris Alexiou"
    },
    {
        country: "Australia",
        flag: "🇦🇺",
        region: "oceania",
        genre: "Aboriginal & Rock",
        description: "Australian music includes ancient Aboriginal traditions with the didgeridoo and modern rock influences. It blends indigenous culture with contemporary sounds.",
        artists: "Yothu Yindi, AC/DC, Tame Impala"
    },
    {
        country: "Egypt",
        flag: "🇪🇬",
        region: "africa",
        genre: "Classical Arabic",
        description: "Egyptian music is known for its quarter tones and emotional depth. Classical Arabic music features the oud and qanun, creating enchanting Middle Eastern melodies.",
        artists: "Umm Kulthum, Abdel Halim Hafez, Mohamed Mounir"
    },
    {
        country: "France",
        flag: "🇫🇷",
        region: "europe",
        genre: "Chanson",
        description: "French chanson is known for its poetic lyrics and romantic melodies. The accordion often accompanies these heartfelt songs that capture French culture and emotion.",
        artists: "Édith Piaf, Charles Aznavour, Serge Gainsbourg"
    },
    {
        country: "Mexico",
        flag: "🇲🇽",
        region: "americas",
        genre: "Mariachi & Ranchera",
        description: "Mexican music is vibrant and celebratory, featuring mariachi bands with trumpets, violins, and guitars. Ranchera songs tell stories of love, patriotism, and rural life.",
        artists: "Vicente Fernández, Lola Beltrán, Luis Miguel"
    },
    {
        country: "South Korea",
        flag: "🇰🇷",
        region: "asia",
        genre: "K-Pop & Traditional",
        description: "Korean music combines traditional instruments like the gayageum with modern K-Pop's high-energy performances. K-Pop has become a global phenomenon.",
        artists: "BTS, BLACKPINK, Kim Duk Soo"
    }
];

// DOM elements
const musicGrid = document.getElementById('musicGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to create a music card
function createMusicCard(music) {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.setAttribute('data-region', music.region);

    card.innerHTML = `
        <div class="card-header">
            <div class="country-flag">${music.flag}</div>
            <h3 class="country-name">${music.country}</h3>
        </div>
        <div class="card-body">
            <span class="genre-label">${music.genre}</span>
            <p class="music-description">${music.description}</p>
            <div class="famous-artists">
                <h4>Famous Artists:</h4>
                <p>${music.artists}</p>
            </div>
        </div>
    `;

    return card;
}

// Function to render all music cards
function renderMusicCards(filterRegion = 'all') {
    musicGrid.innerHTML = '';

    musicData.forEach(music => {
        const card = createMusicCard(music);

        if (filterRegion === 'all' || music.region === filterRegion) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }

        musicGrid.appendChild(card);
    });
}

// Filter button event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get the region to filter
        const region = button.getAttribute('data-region');

        // Render cards with filter
        renderMusicCards(region);
    });
});

// Initial render
renderMusicCards();
