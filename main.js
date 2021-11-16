const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.header h2`, {delay: 600, origin: 'top'})
sr.reveal(`.headImage`, {delay: 850, origin: 'left'})
sr.reveal(`.header h1`, {delay: 750, origin: 'right'})
sr.reveal(`.textarea`, {delay: 950})