//ADD EVENT HANDLER FOR GET THE SONG AND ARTIST NAME 
document.getElementById("search-btn").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    if (searchItem == "") {
        alert("Please enter a song name");
    } else {
        fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
            .then(response => response.json())
            .then(data => {
                // FIRST RESULT 
                const firstSongTitle = data["data"]["0"]["title"];
                const firstArtistName = data["data"]["0"]["artist"].name;
                document.getElementById("title-1").innerText = firstSongTitle;
                document.getElementById("artist-1").innerText = firstArtistName;
                //SECUND RESULT
                const secundSongTitle = data["data"]["1"]["title"];
                const secundArtistName = data["data"]["1"]["artist"].name;
                document.getElementById("title-2").innerText = secundSongTitle;
                document.getElementById("artist-2").innerText = secundArtistName;
                // THIRD RESULT 
                const thirdSongTitle = data["data"]["2"]["title"];
                const thirdArtistName = data["data"]["2"]["artist"].name;
                document.getElementById("title-3").innerText = thirdSongTitle;
                document.getElementById("artist-3").innerText = thirdArtistName;
                //FOURTH RESULT
                const fourthSongTitle = data["data"]["3"]["title"];
                const fourthArtistName = data["data"]["3"]["artist"].name;
                document.getElementById("title-4").innerText = fourthSongTitle;
                document.getElementById("artist-4").innerText = fourthArtistName;
                //fifth RESULT
                const fifthSongTitle = data["data"]["4"]["title"];
                const fifthArtistName = data["data"]["4"]["artist"].name;
                document.getElementById("title-5").innerText = fifthSongTitle;
                document.getElementById("artist-5").innerText = fifthArtistName;
                // SIXTH RESULT 
                const sixthSongTitle = data["data"]["5"]["title"];
                const sixthArtistName = data["data"]["5"]["artist"].name;
                document.getElementById("title-6").innerText = sixthSongTitle;
                document.getElementById("artist-6").innerText = sixthArtistName;
                //SEVENTH RESULT
                const seventhSongTitle = data["data"]["6"]["title"];
                const seventhArtistName = data["data"]["6"]["artist"].name;
                document.getElementById("title-7").innerText = seventhSongTitle;
                document.getElementById("artist-7").innerText = seventhArtistName;
                // EIGHTH RESULT 
                const eighthSongTitle = data["data"]["7"]["title"];
                const eighthArtistName = data["data"]["7"]["artist"].name;
                document.getElementById("title-8").innerText = eighthSongTitle;
                document.getElementById("artist-8").innerText = eighthArtistName;
                //NINTH RESULT
                const ninthSongTitle = data["data"]["8"]["title"];
                const ninthArtistName = data["data"]["8"]["artist"].name;
                document.getElementById("title-9").innerText = ninthSongTitle;
                document.getElementById("artist-9").innerText = ninthArtistName;
                //TENTH RESULT
                const tenthSongTitle = data["data"]["9"]["title"];
                const tenthArtistName = data["data"]["9"]["artist"].name;
                document.getElementById("title-10").innerText = tenthSongTitle;
                document.getElementById("artist-10").innerText = tenthArtistName;
            })
        document.getElementById("fancy-section").style.display = "block";
        document.getElementById("notyfy").style.display = "block";
    }

})

//ADD EVENT HANDLER FOR GET THE SONG LYRICS
//FIRST HANDLER
document.getElementById("lyrics-btn-1").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const firstSongTitle = data["data"]["0"]["title"];
            const firstArtistName = data["data"]["0"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${firstSongTitle} - ${firstArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${firstArtistName}/${firstSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//SECUND HANDLER
document.getElementById("lyrics-btn-2").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const secundSongTitle = data["data"]["1"]["title"];
            const secundArtistName = data["data"]["1"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${secundSongTitle} - ${secundArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${secundArtistName}/${secundSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//THIRD HANDLER
document.getElementById("lyrics-btn-3").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const thirdSongTitle = data["data"]["2"]["title"];
            const thirdArtistName = data["data"]["2"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${thirdSongTitle} - ${thirdArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${thirdArtistName}/${thirdSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//FOURTH HANDLER
document.getElementById("lyrics-btn-4").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const fourthSongTitle = data["data"]["3"]["title"];
            const fourthArtistName = data["data"]["3"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${fourthSongTitle} - ${fourthArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${fourthArtistName}/${fourthSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//FIFTH HANDLER
document.getElementById("lyrics-btn-5").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const fifthSongTitle = data["data"]["4"]["title"];
            const fifthArtistName = data["data"]["4"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${fifthSongTitle} - ${fifthArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${fifthArtistName}/${fifthSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//SIXTH HANDLER
document.getElementById("lyrics-btn-6").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const sixthSongTitle = data["data"]["5"]["title"];
            const sixthArtistName = data["data"]["5"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${sixthSongTitle} - ${sixthArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${sixthArtistName}/${sixthSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//SEVENTH HANDLER
document.getElementById("lyrics-btn-7").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const seventhSongTitle = data["data"]["6"]["title"];
            const seventhArtistName = data["data"]["6"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${seventhSongTitle} - ${seventhArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${seventhArtistName}/${seventhSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//EIGHTH HANDLER
document.getElementById("lyrics-btn-8").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const eighthSongTitle = data["data"]["7"]["title"];
            const eighthArtistName = data["data"]["7"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${eighthSongTitle} - ${eighthArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${eighthArtistName}/${eighthSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//NINTH HANDLER
document.getElementById("lyrics-btn-9").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const ninthSongTitle = data["data"]["8"]["title"];
            const ninthArtistName = data["data"]["8"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${ninthSongTitle} - ${ninthArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${ninthArtistName}/${ninthSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})
//TENTH HANDLER
document.getElementById("lyrics-btn-10").addEventListener("click", function () {
    const searchItem = document.getElementById("search-item").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchItem}`)
        .then(response => response.json())
        .then(data => {
            const tenthSongTitle = data["data"]["9"]["title"];
            const tenthArtistName = data["data"]["9"]["artist"].name;
            document.getElementById("lyrics-header").innerText = `${tenthSongTitle} - ${tenthArtistName}`;
            fetch(`https://api.lyrics.ovh/v1/${tenthArtistName}/${tenthSongTitle}`)
                .then(response => response.json())
                .then(data => {
                    if (data.lyrics === undefined) {
                        document.getElementById("display-lyrics").innerText = "This songs lyrics don't found, Please try another songs.";
                    } else {
                        document.getElementById("display-lyrics").innerText = data.lyrics;
                    }
                })
        })
    document.getElementById("lyrics-section").style.display = "block";
    document.getElementById("notyfy").style.display = "none";
})