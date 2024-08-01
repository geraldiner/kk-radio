# K.K. Radio

A simple music player built in React that plays K.K. Slider songs based on mood.

In Animal Crossing: New Horizons, the traveling guitarist K.K. Slider takes requests and if you give him a mood, he'll play a song to match it. For a full list of the moods and their associated songs, check out this [Nintendo Life article](https://www.nintendolife.com/guides/animal-crossing-new-horizons-k-k-slider-songs-concert-guide-and-complete-k-k-song-list).

### Project Links

**Live Site:** https://kk-radio.netlify.app

![K.K. Slider grooving](https://i.imgur.com/qlQJLKN.gif)

## How It's Made

**Tech used:** HTML, CSS, JavaScript, TailwindCSS, ReactJS, Apollo, GraphQL

### Front-End: ReactJS, HTMLAudioElement

After going through [Apollo's Lift Off series on their Odyssey learning platform](https://odyssey.apollographql.com/), I've been looking at opportunities to implement GraphQL wherever I can. I admit it might've been overkill here, but the [ACNH API](https://acnhapi.com/doc) does provide more information about the songs than I actually need. And that is one of the reasons why you'd want to implement GraphQL. I only needed the title, audio source, and song artwork.

The project is bootstrapped with `create-react-app` and after creating the [Interactive Piano](https://github.com/geraldiner/piano) recently, I was thinking about how to implement the `AudioPlayer`. I didn't think it was as complicated for this project since I only really needed an `audio` tag.

I stumbled on [this tutorial](https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks) by [Ryan Finni](https://github.com/rfinni) and it was exactly what I was trying to do. It uses the React Hooks I was already familiar with, namely `useState` and `useEffect`. For this project, there were many states to keep track of: what song is being played, is the song playing or paused, where in the song duration is it, and so forth. There was a new hook I haven't seen before: `useRef`, which is used to get information about other components or parts within a component.

For example, the `intervalRef` keeps track of the song's progress and it needs to know information from the `audioRef`, which is handling the audio controls, to know if a song has been paused, played, or scrubbed through, so it can update the progress indicator. It's also responsible for moving on to the next song once the current song is finished.

Rather than the controls on an `audio` tag, the audio controls for this project are also built from scratch with their own event listeners related to the audio player.

Instead of the color gradient backdrop, I opted to add images of K.K. Slider himself, which were found on the [Animal Crossing Wiki](https://animalcrossing.fandom.com/wiki/K.K._Slider).

### Back-End: NodeJS, Apollo, GraphQL

As previously mentioned, I was just finishing the first two parts of the Lift Off series from Apollo's Odyssey learning platform, and it was all fresh in my mind. So I decided to implement Apollo and GraphQL for this project as a test of understanding. I had also previously used Apollo and GraphQL to query GitHub's GraphQL API to build my portfolio, which was much, much more complicated. This was simple to set up with the ACNH API, which is built as a REST API and I was able to use the `RESTDataSource` class to make the requets and send the data back.

## Optimizations

I thought implementing GraphQL and Apollo would've optimized this project by making API requests and only returning the data needed. There is a lot of data tied to K.K. Slider songs in the ACNH API (mostly the title in different languages and other in-game info), which I didn't need. That was the original reason for implementing it.

However, I did notice that it does take a while to load up. I'm not sure how to address this yet. I think caching is probably a good idea, but I don't know how to do that. There is always `localStorage` or `sessionStorage`, which would keep it in the individual user's machine. But that would take more research on my part.

## Lessons Learned

I only had one false start this project (compared to the three in the React piano)! I made the mistake of coding up the front-end first before functionality. As someone with a design background and preference for front-end, I always want to work on that first. But as I'm starting to learn, it's better for the long run to get functionality working, because it's almost always easier to style everything afterwards (at least it is for me).
















## Other Projects

Check out other stuff I've worked on:

**Secret Santa App**: https://github.com/geraldiner/secret-santa-app

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

## Currently I'm:

- Working full-time at <a target="_blank" href="https://nomnomnow.com">Nom Nom</a>, migrating JavaScript to TypeScript
- Building my brand, <a target="_blank" href="https://happiandco.com">Happi & Co. Studio LLC</a>

But I'm always open to hearing about your next big thing!

## Let's get to know each other!

Connect with me:

**Twitter**: [@GeraldineDesu](https://twitter.com/geraldinedesu)

**LinkedIn**: [in/GeraldineR](https://linkedin.com/in/geraldiner)

**Email**: hello [at] geraldiner [dot] com
