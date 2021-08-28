# K.K. Radio

A simple music player built in React that plays K.K. Slider songs based on mood.

In Animal Crossing: New Horizons, the traveling guitarist K.K. Slider takes requests and if you give him a mood, he'll play a song to match it. For a full list of the moods and their associated songs, check out this [Nintendo Life article](https://www.nintendolife.com/guides/animal-crossing-new-horizons-k-k-slider-songs-concert-guide-and-complete-k-k-song-list).

### Project Links

**Live Site:** https://geraldiner.github.io/kk-radio/

![K.K. Slider grooving](https://i.imgur.com/qlQJLKN.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, TailwindCSS, ReactJS, Apollo, GraphQL

### Front-End: ReactJS, HTMLAudioElement

After going through [Apollo's Lift Off series on their Odyssey learning platform](https://odyssey.apollographql.com/), I've been looking at opportunities to implement GraphQL wherever I can. I admit it might've been overkill here, but the [ACNH API](https://acnhapi.com/doc) does provide more information about the songs than I actually need. And that is one of the reasons why you'd want to implement GraphQL. I only needed the title, audio source, and song artwork.

The project is bootstrapped with `create-react-app` and after creating the [Interactive Piano](https://github.com/geraldiner/piano) recently, I was thinking about how to implement the `AudioPlayer`. I didn't think it was as complicated I stumbled on [this tutorial](https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks) by [Ryan Finni](https://github.com/rfinni) and it was exactly what I was trying to do.

### Back-End: NodeJS, Apollo, GraphQL

As previously mentioned, I was just finishing the first two parts of the Lift Off series from Apollo's Odyssey learning platform, and it was all fresh in my mind. So I decided to implement Apollo and GraphQL for this project as a test of understanding. I had also previously used Apollo and GraphQL to query GitHub's GraphQL API to build my portfolio, which was much, much more complicated. This was simple to set up with the ACNH API, which is built as a REST API and I was able to use the `RESTDataSource` class to make the requets and send the data back.

## Optimizations

You don't have to include this section but interviewers _love_ that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _fuck yeah I did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Other Projects

Check out other stuff I've worked on:

**Interactive Piano:** https://github.com/geraldiner/piano

**Pom Poko Pomodoro:** https://github.com/geraldiner/pom-poko-pomodoro
