// DEPENDENCIES

// CONFIGURATION

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MP3'
    })
})
// Routes

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
