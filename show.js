class Show{
    constructor(name, year, genre, description, image){
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.description = description;
        this.image = image;
        this.newRelease = year == new Date()
    }

    addToPage(){
        if(document.getElementById(this.genre)){
            document.getElementById(this.genre).append(this.buildShow());
        }
        else{
            this.createGenre();
        }
    }

    buildShow(){
        let showEl = document.createElement('div');
        showEl.classList.add('show');
        showEl.style.backgroundImage = 'url('+this.image + ')';
        return showEl;
    }

    createGenre(){
        let genre = document.createElement('div');
        genre.classList.add('genre');
        let title = document.createElement('h2');
        title.innerHTML = this.genre;
        genre.id = this.genre;
        document.getElementById('library').append(title);
        document.getElementById('library').append(genre);

        this.addToPage();
    }
}

export{Show}