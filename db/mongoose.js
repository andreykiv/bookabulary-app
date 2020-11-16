const mongooose = require("mongoose")

mongooose.connect(process.env.MON_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

