window.onload = () => {
    const heroImage = document.getElementById("hero-image");
    const home = document.getElementById("home");
    const movieText = document.getElementById("movie-text");
    const brandName = document.querySelector("header h1");

    let counter = 0;
    let movieList = [];
    for (let i = 0; i < 4; i++) {
        movieList[i] = "img/Hero-" + (i + 1) + ".jpg";
    }

    //Changing Hero Image every 5~ second
    setInterval(() => {
        if (counter > 3) {
            counter = 0;
        }
        heroImage.style.backgroundImage = "url('" + movieList[counter] + "')";
        heroImage.style.transition = "1s ease-in-out";
        heroImage.style.transitionDelay = "2s";
        counter++;
    }, 5000);

    //Header
    const header = document.getElementsByClassName("header")[0];
    window.addEventListener("scroll", () => {
        if (this.scrollY > 70) {
            header.style.backgroundColor = "rgb(1, 1, 1)";
            header.style.boxShadow = "2px 0px 8px 1px rgb(26, 26, 26)";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
        }
        console.log(this.scrollY);
    });

    //navigating from navbar

    home.onclick = () => {
        this.scroll({ top: 0, behavior: "smooth" });
    };

    movieText.onclick = () => {
        this.scroll({ top: 540, behavior: "smooth" });
    };

    brandName.onclick = () => {
        this.scroll({ top: 0, behavior: "smooth" });
    };
};

// DATA
const listMovie = [
    {
        name: "Brave",
        rating: "7/10",
        description:
            "Determined to make her own path in life, " +
            "Princess Merida (Kelly Macdonald) defies a custom that brings chaos to her kingdom." +
            "Granted one wish, Merida must rely on her bravery and her archery skills to undo a " +
            "beastly curse",
        img: "img/Full/Brave.jpg",
    },
    {
        name: "Wall-E",
        rating: "8.5/10",
        description:
            "WALL-E, short for Waste Allocation" +
            " Load Lifter Earth-class, is the last robot left on Earth. He spends his days" +
            " tidying up the planet, one piece of garbage at a time. But during 700 years," +
            " WALL-E has developed a personality, and he's more than a little lonely. Then" +
            " he spots EVE, a sleek and shapely probe sent back to Earth on a scanning " +
            "mission. Smitten WALL-E embarks on his greatest adventure yet when he follows" +
            "EVE across the galaxy.",
        img: "img/Full/Wall-E.jpg",
    },
    {
        name: "Interstellar",
        rating: "9/10",
        description:
            "A team of explorers must find the human race a new home after Earth is " +
            "struck with worldwide food shortages and corn is the most valuable food. " +
            "Utilizing a mysterious wormhole, they explore strange new worlds and " +
            "could find a home to save the human race.",
        img: "img/Full/Interstellar.jpg",
    },
    {
        name: "Fate/Zero",
        rating: "9/10",
        description:
            "Fate/Zero takes place 10 years prior to the events of Fate/stay night," +
            "detailing the events of the 4th Holy Grail War in Fuyuki City. " +
            "The War of the Holy Grail is a contest in which seven magi summon seven " +
            "Heroic Spirits to compete to obtain the power of the 'Holy Grail', which " +
            "grants a miracle. After three inconclusive wars for the elusive Holy Grail, " +
            "the Fourth War commences.",
        img: "img/Full/fate.png",
    },
    {
        name: "Garden Of Sinner",
        rating: "8/10",
        description:
            "Knife-wielding Shiki has a unique talent; she has 'mystic eyes' that can " +
            "perceive the very bonds of mortality. She has a special connection with " +
            "Mikiya, a mild-mannered young man who works as an investigator for Toko, " +
            "a powerful magic user who masquerades as a sculpture artist. When a series " +
            "of brutal murders strikes, Shiki herself is the prime suspect - and even " +
            "she believes she's the killer. Mikiya's not so convinced.",
        img: "img/Full/sinner.jpg",
    },
    {
        name: "Howl Moving Castle",
        rating: "8.5/10",
        description:
            "When an unconfident young woman is cursed with an old body by a spiteful " +
            "witch, her only chance of breaking the spell lies with a self-indulgent " +
            "yet insecure young wizard and his companions in his legged, walking castle.",
        img: "img/Full/Howl.jpg",
    },
    {
        name: "Jaws",
        rating: "8/10",
        description:
            "A Great White Shark decides to make the small beach resort town of Amity " +
            "his private feeding grounds. This greatly frustrates the town police chief " +
            "who wants to close the beaches to chase the shark away. He is thwarted in " +
            "his efforts by the town's mayor who finally relents when nothing else seems " +
            "to work and the chief, a scientist, and an old fisherman with revenge on " +
            "his mind take to the sea to kill the beast.",
        img: "img/Full/jaws.jpg",
    },
    {
        name: "Joker",
        rating: "7.5/10",
        description:
            "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and " +
            "mistreated by society. He then embarks on a downward spiral of revolution and " +
            "bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        img: "img/Full/joker.jpg",
    },
    {
        name: "Oz The Great And Powerful (2013)",
        rating: "7/10",
        description:
            "A small-time magician is swept away to an enchanted land and is forced into a " +
            "power struggle between three witches.",
        img: "img/Full/oz.jpg",
    },
    {
        name: "Princess Mononoke",
        rating: "9/10",
        description:
            "Smitten by a fiery and destructive curse after a deadly encounter with a " +
            "boar-demon, the young prince, Ashitaka, sets off on a long and perilous " +
            "voyage to the Western lands to discover why Mother Nature is in disarray. " +
            "Eventually, Ashitaka will reach the Iron Town, where the ambitious Lady " +
            "Eboshi who rules the land with an iron fist does battle with the fearless " +
            "Princess Mononoke: a mysterious young woman who was raised by the wolf-god, " +
            "Moro. Will Ashitaka manage to rescue the once-lush forests of the West, and " +
            "lift the curse on his arm?",
        img: "img/Full/mononoke.jpg",
    },
    {
        name: "Promare",
        rating: "7.5/10",
        description:
            "Thirty years has passed since the appearance of Burnish, a race of flame-wielding " +
            "mutant beings, who destroyed half of the world with fire. When a new group of " +
            "aggressive mutants calling themselves 'Mad Burnish' appears, the epic battle " +
            "between Galo Thymos, a new member of the anti-Burnish rescue team 'Burning Rescue,' " +
            "and Lio Fotia, the leader of 'Mad Burnish' begins",
        img: "img/Full/promare.jpg",
    },
    {
        name: "Sharknado",
        rating: "6/10",
        description:
            "When a freak hurricane swamps Los Angeles, nature's deadliest killer rules " +
            "sea, land, and air as thousands of sharks terrorize the waterlogged populace.",
        img: "img/Full/sharknado.jpg",
    },
    {
        name: "The Godfather",
        rating: "10/10",
        description:
            "The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in " +
            "New York. He is at the event of his daughter's wedding. Michael, Vito's " +
            "youngest son and a decorated WW II Marine is also present at the wedding. " +
            "Michael seems to be uninterested in being a part of the family business. " +
            "Vito is a powerful man, and is kind to all those who give him respect but is " +
            "ruthless against those who do not. But when a powerful and treacherous rival " +
            "wants to sell drugs and needs the Don's influence for the same, " +
            "Vito refuses to do it. What follows is a clash between Vito's fading old " +
            "values and the new ways which may cause Michael to do the thing he was most " +
            "reluctant in doing and wage a mob war against all the other mafia families " +
            "which could tear the Corleone family apart.",
        img: "img/Full/godfather.jpg",
    },
];

// Modal Box

const template = document.getElementById("modal-template");
const overlay = document.getElementById("overlay");

function OpenModalBox(e) {
    // tampilin overlay
    overlay.classList.remove("closeModalBox");
    overlay.classList.add("openModalBox");
    // tampilin modal box
    template.classList.remove("closeModalBox");
    template.classList.add("openModalBox");

    // ambil tag html template modal box
    let name = document.querySelector(".modal-top-half .modal-movie-name");
    let rating = document.querySelector(".modal-top-half .modal-movie-rating");
    let description = document.querySelector(".modal-low-half p");
    let img = document.getElementById("modal-top-half");

    // pengecekan
    const movieName = e.querySelector("h3").innerHTML;
    for (let i = 0; i < listMovie.length; i++) {
        if (movieName == listMovie[i].name) {
            name.innerHTML = listMovie[i].name;
            rating.innerHTML = listMovie[i].rating;
            description.innerHTML = listMovie[i].description;
            img.style.backgroundImage = "url('" + listMovie[i].img + "')";
        }
    }
}

function CloseModalBox() {
    template.classList.remove("openModalBox");
    overlay.classList.remove("openModalBox");
    template.classList.add("closeModalBox");
    overlay.classList.add("closeModalBox");
}

// Footer Decoration
