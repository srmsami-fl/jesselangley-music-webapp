/* =====================================================================
   JESSE LANGLEY WEBSITE — SITE CONFIG   (developed by SRM卝SAMIヅ)
   Everything you may want to change lives in this one file.

   PICTURES
   - Your pictures go in  assets/images/  (exact names you already use).
   - Every slot below can be ONE file name or a LIST of file names.
     With a list, the site automatically uses the first file that exists
     (so you can drop in new pictures any time, nothing else to change).
   - Background art (generated, copyright-free) is in assets/images/stock/.
   ===================================================================== */
window.SITE = {
  imgBase: "assets/images/",

  img: {
    /* logos + cut-outs */
    favicon:    "Jesse Langley-JL Abstract Favicon Logo.png",
    logoHeader: "Jesse Langley Musician Logo.png",
    logoFooter: "Jesse Langley JL Abstract Logo.png",
    portrait:   "20 Transparent background.png",
    award:      "My Prestige Award.png",

    /* BACKGROUND ART (put your own file first to override, e.g. ["3.jpg","stock/bg-stage-lights.jpg"]) */
    heroHome:    ["stock/bg-stage-lights.jpg"],
    heroAbout:   ["stock/bg-warm-haze.jpg"],
    heroJourney: ["stock/bg-city-night.jpg"],
    heroVideos:  ["stock/bg-equalizer.jpg"],
    heroLyrics:  ["stock/bg-binder.jpg"],
    heroGallery: ["stock/bg-stage-lights.jpg"],
    heroContact: ["stock/bg-waveform.jpg"],
    bandVinyl:   ["stock/bg-vinyl.jpg"],
    bandWave:    ["stock/bg-waveform.jpg"],
    bandCity:    ["stock/bg-city-night.jpg"],
    bandHaze:    ["stock/bg-warm-haze.jpg"],
    bandEq:      ["stock/bg-equalizer.jpg"],
    bandBinder:  ["stock/bg-binder.jpg"],

    /* JESSE'S PHOTOS (change the number to swap a picture) */
    storyMain:  "10.jpg",  aboutMain: "11.jpg",
    hometown:   "12.jpg",  family: "13.jpg",   values: "14.jpg",
    country1:   "15.jpg",  country2: "16.jpg",
    school:     "17.jpg",  poetry: "18.jpg",   writing: "19.jpg",
    military:   "21.jpg",  basic: "22.jpg",
    fastfood:   "23.jpg",  hvac: "24.jpg",     hvac2: "25.jpg",
    today:      "1.jpg",   binder: "2.jpg",    influences: "3.jpg"
  },
  pos: { portrait: "center bottom" },           /* crop tuning, e.g. storyMain: "center 20%" */

  childhood: [
    { file: "Childhood photo with a cat in hand.jpg",   cap: "A young Jesse with a cat in his arms" },
    { file: "Childhood photo wearing formal dress.jpg", cap: "Dressed up as a boy" },
    { file: "Photo of two brothers with parents.jpg",   cap: "With his brother and parents" },
    { file: "Another photo with parents.jpg",           cap: "With his parents" },
    { file: "Photo wearing clothes from that time when he was in defense.jpg", cap: "In clothes from his service years" }
  ],

  gallery: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg",
            "14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"],

  shorts: [
    { url: "https://youtube.com/shorts/j7QWxxSAJ-w", title: "Featured Short 1" },
    { url: "https://youtube.com/shorts/Jd7sHzMCiZM", title: "Featured Short 2" },
    { url: "https://youtube.com/shorts/r_zUZVVeYyo", title: "Featured Short 3" },
    { url: "https://youtube.com/shorts/_VJ1WMo712k", title: "Featured Short 4" },
    { url: "https://youtube.com/shorts/YYW1CkeQ3AU", title: "Featured Short 5" },
    { url: "https://youtube.com/shorts/cxwubRWmIu4", title: "Featured Short 6" },
    { url: "https://youtube.com/shorts/FtL_gss1b0A", title: "Featured Short 7" },
    { url: "https://youtube.com/shorts/pBfKmeFpiJ8", title: "Featured Short 8" }
  ],

  /* SOCIAL + STREAMING LINKS (Jesse's real profiles) */
  platforms: {
    youtube:    { name: "YouTube",    url: "https://www.youtube.com/@LANGLEY313RD" },
    spotify:    { name: "Spotify",    url: "https://open.spotify.com/artist/2uEYRimjVZQnL5n4DVqWCo" },
    soundcloud: { name: "SoundCloud", url: "https://soundcloud.com/jesse-langley-177547313" },
    tiktok:     { name: "TikTok",     url: "https://www.tiktok.com/@jesselangley0" },
    instagram:  { name: "Instagram",  url: "https://www.instagram.com/jesselangley313rd" },
    threads:    { name: "Threads",    url: "https://www.threads.com/@jesselangley313rd" },
    facebook:   { name: "Facebook",   url: "https://www.facebook.com/jesse.langley.9085" }
  },

  formspree: "https://formspree.io/f/mdeejynv",

  /* ---------------------------------------------------------------
     LYRICS & WRITINGS — these are SAMPLE pieces to show the layout.
     Replace with Jesse's own words: edit title, theme and lines.
     Add a piece by copying one block. Keep each line in quotes.
     --------------------------------------------------------------- */
  lyrics: [
    { title: "Red Binder", theme: "Writing", sections: [
      { label: "Verse 1", lines: ["Three rings and a cover the color of a stoplight,", "Pages full of choruses I wrote by hallway light,", "Every line a secret I couldn't say out loud,", "So I kept it in the binder, kept it safe from the crowd."] },
      { label: "Chorus", lines: ["Red binder, carry me, carry me home,", "Every word I wrote down was a way not to be alone,", "Ink in the margins, ghosts in the rhyme,", "I was only a kid, but I was writing for time."] },
      { label: "Verse 2", lines: ["Notebook paper wrinkled at the bottom of my bag,", "Coffee rings and heartbreak on a page I couldn't drag", "Back into the daylight, so I let it stay a while,", "Now the whole thing's a map, and every page is a mile."] } ] },
    { title: "Small Town Gold", theme: "Hometown", sections: [
      { label: "Verse 1", lines: ["Gravel on the driveway, sun going down slow,", "Porch light buzzing, and everybody knows", "Whose truck is coming home and whose hound got loose,", "Nobody here has anything to prove."] },
      { label: "Chorus", lines: ["Small town gold, you can't buy it in the city,", "Honest handshake, simple and pretty,", "Hard work, good name, that's the creed,", "Small town gold is all I need."] },
      { label: "Verse 2", lines: ["Rivers running wide and the Sunday bells ring,", "Fishing line and quiet, that's a good kind of thing,", "I carried every mile of it wherever I roamed,", "And it still sounds like home."] } ] },
    { title: "Hurricane Summer", theme: "Hard work", sections: [
      { label: "Verse 1", lines: ["Mower on the trailer before the morning's hot,", "Five lawns by lunchtime, that's the money I got,", "Then the wind came calling and the sky turned gray,", "Hauling down the branches in the aftermath of day."] },
      { label: "Chorus", lines: ["Hurricane summer, that's where I learned,", "Nothing's ever handed, everything's earned,", "When the storm blows over, you pick up what's left,", "And you start again with whatever you've got."] } ] },
    { title: "Fort Benning Mornings", theme: "Service", sections: [
      { label: "Verse 1", lines: ["Wake-up before the sun, boots lined by the door,", "A hundred other strangers learning what it's for,", "Georgia clay and discipline, a rhythm in the line,", "We found out who we were by the end of the time."] },
      { label: "Chorus", lines: ["Left, right, left, we're finding our way,", "Every early morning builds a stronger day,", "I came back home a little taller than before,", "Carrying the lessons through the door."] } ] },
    { title: "Cold Air, Warm Heart", theme: "Work family", sections: [
      { label: "Verse 1", lines: ["Rooftop in July, the heat is on the tin,", "Crew on the ladder, a laugh before we begin,", "Started at the bottom with a toolbag and a plan,", "Learned it all from good folks who gave me a hand."] },
      { label: "Chorus", lines: ["Cold air, warm heart, that's the job we do,", "Making houses comfortable, seeing the day through,", "It was never only work, it was family on the crew,", "Cold air, warm heart, I owe it all to you."] } ] },
    { title: "Second Verse", theme: "Hope", sections: [
      { label: "Verse 1", lines: ["Life changed the tune without asking me first,", "I stood in the silence and I felt the hurt,", "But a songwriter knows when the music goes slow,", "There's a second verse coming, and I'm ready to go."] },
      { label: "Chorus", lines: ["Write it down, write it down, let it be heard,", "Every hard chapter deserves a word,", "I'm still here, still writing, still finding my way,", "The best part of the song is the part I'll play."] } ] }
  ],

  poems: [
    { title: "Mowing Season", theme: "Poem", sections: [{ label: "", lines: ["Summer sets the alarm before I do,", "gas can, gloves, a tank of morning dew.", "One yard, then two, then every street in sight,", "the green rows teach me how to do things right.", "Nobody sees the lines I leave behind,", "but I do, and that is the kind", "of pride a young man learns to keep:", "do it well, even if nobody's watching."] }] },
    { title: "What the Binder Knows", theme: "Poem", sections: [{ label: "", lines: ["It knows the night I couldn't sleep,", "the verse I wrote and chose to keep,", "the line I crossed out twice,", "the chorus that arrived like ice", "and melted into something true.", "A binder never judges you.", "It holds the shape of who you were", "and waits for what you will become."] }] },
    { title: "Roll Call", theme: "Poem", sections: [{ label: "", lines: ["Four years of mornings pressed and straight,", "of learning that on time is late,", "that how you stand says who you are,", "that small things carry very far.", "I did not know the words back then,", "but discipline taught me to begin."] }] }
  ]
};
