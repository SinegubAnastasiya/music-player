class MusicPlayer {
    music = [
        {path: "./music/song1.mp3", artist: 'Artist1', song: 'Song1'},
        {path: "./music/song2.mp3", artist: 'Artist2', song: 'Song2'},
        {path: "./music/song3.mp3", artist: 'Artist3', song: 'Song3'} 
    ];
    audio = document.querySelector('audio');
    play = document.querySelector('.play');
    song_index = 0;
    artist = document.querySelector('h1');
    song = document.querySelector('h2');
    flag = true;


    playMusic() {
        this.play.addEventListener('click', () => {
            if (this.flag) {
                this.audio.play();
                this.flag = false;
                this.play.style = `background-image: url(./assets/pause.svg)`;
            } else {
                this.audio.pause();
                this.flag = true;
                this.play.style = `background-image: url(./assets/playBtn.svg)`;
            }
            this.artist.textContent = this.music[this.song_index].artist;
            this.song.textContent = this.music[this.song_index].song;
        })
    }

    nextMusic() {
        const next = document.querySelector('.next');

        next.addEventListener('click', () => {
            if (this.song_index == this.music.length - 1) return;
            this.song_index++;
            this.audio.src = this.music[this.song_index].path;
            this.artist.textContent = this.music[this.song_index].artist;
            this.song.textContent = this.music[this.song_index].song;
            this.audio.play();
            this.flag = false;
            this.play.style = `background-image: url(./assets/pause.svg)`;
        })
        
    }

    prevMusic() {
        const prev = document.querySelector('.previous');

        prev.addEventListener('click', () => {
            if (this.song_index == 0) return;
            this.song_index--;
            this.audio.src = this.music[this.song_index].path;
            this.artist.textContent = this.music[this.song_index].artist;
            this.song.textContent = this.music[this.song_index].song;
            this.audio.play();
            this.flag = false;
            this.play.style = `background-image: url(./assets/pause.svg)`;
        })
        
    }
    //     const repeat = document.querySelector('.repeat');
    //     const like = document.querySelector('.like');

}

const musicplayer = new MusicPlayer();
musicplayer.playMusic();
musicplayer.nextMusic();
musicplayer.prevMusic();

