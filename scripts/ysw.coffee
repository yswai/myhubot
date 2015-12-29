module.exports = (robot) ->
  robot.hear /^YSW$/i, (msg) ->
    msg.send 'Rocks!'

  robot.respond /make sound/i, (res) ->
    res.reply 'Cho cho'

