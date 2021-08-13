## About this app
This is a personal side project of mine (made with React and Redux), which is based on a anime community app (namely, AniList) I'm very fond of. It is designed to showcase the most recent and core React skills (as of 2020).

## Live demo at https://anifinder.netlify.app/

Home Page            |  Home Page
:-------------------------:|:-------------------------:
![](https://i.ibb.co/xCj66zS/Homepage1.jpg)  |  ![](https://i.ibb.co/6Zk3S2n/Homepage2.jpg)

Search Anime        |  Anime Single Page
:-------------------------:|:-------------------------:
![](https://i.ibb.co/D75GsYL/search-Animes.jpg)  |  ![](https://i.ibb.co/gdhk0pJ/single-Anime.jpg)

## How to run it

Simply type consecutively:

### `npm i`
### `npm start`

## Technical comments

This project has lots of modern and advanced features, such as the hook system, a great deal of content managed with Redux, Higher Order Components to make it easy to reuse logic throughout the app and much more. It also contains quite a good deal of complex design system, handled mostly by the new grid and flex system, even complex structures such as the the hovering effect is handled by these two powerful tools.

## Issues

Now, I must say if there's one thing that I think I could have done better is the overall design pattern. Needless to say, I've done it from the absolute ground up, so there was always the possbility of committing some crimes in this regard. Also, I should point that the requests are not 100% optimal, it could've been way better perfomance wise (for example, I did a bit more requests when you load the Home Page than you'd actually need and already stored it in the Redux for later use, but this is not a very scalable code practice).
