module.exports = (robot) ->
  robot.hear /YSW$/i, (msg) ->
    msg.send 'Rocks!'

  robot.respond ' make sound', (res) ->
    res.reply 'Cho cho'

  robot.send "End"
