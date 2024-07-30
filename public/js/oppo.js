console.log("Linked!!!")

app.get('/audit', (req, res) => {
    const audit = '/audit'; // Or construct this URL based on your logic

    res.render('hbs', { audit });
});