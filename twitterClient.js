const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "um62uDs2VFEG4WTnlIit0eLQJ",
    appSecret: "DpoNXL7GxZkWfEYtJhd6jONOJEljyJQbxbY81l2qulhafev3FV",
    accessToken: "1480648977884323848-djHRTAgDU4icPyw0XN9lcEX1rK9Kur",
    accessSecret: "hWNJIhPEn6kjuyOFgLZDHEpumRrTENDsGKIfUqMajnJwA"
})

const RWClient = client.readWrite

module.exports = RWClient