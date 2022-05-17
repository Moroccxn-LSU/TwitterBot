const RWClient = require("./twitterClient.js");

const newTweet = async () => {
    try {
        await RWClient.v1.tweet(status: "Hi my name is Interview Bot, Welcome!")
    } catch (e) {
        console.error(e)
    }

}

newTweet()