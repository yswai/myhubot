var exec = require('child_process').exec, child;

module.exports = function (robot) {

  robot.hear(/^YSW$/i, function (msg) {
    msg.send('Rocks!');
  });

  robot.respond(/make sound/i, function (r) {
    r.reply('Cho cho');
  });

  robot.respond(/anjungsari/i, function (r) {
    robot.http('https://www.kimonolabs.com/api/5rcqx6ba?apikey=0Q18ElsbMLoabCQPHSRnOMpqjaE6Y4qz')
      .get()(function (err, getResp, body) {
        if (err) {
          r.reply('Error occurred');
          console.log(err);
          return;
        }
        r.reply(JSON.stringify(body, null, '\t'));
      });
  });

  robot.respond(/paultan/i, function (r) {
    robot.http('https://www.kimonolabs.com/api/3e1v313e?apikey=0Q18ElsbMLoabCQPHSRnOMpqjaE6Y4qz')
      .get()(function (err, getResp, body) {
        if (err) {
          r.reply('Error occurred');
          console.log(err);
          return;
        }
        console.log(getResp);
        console.log(JSON.stringify(body, null, '\t'));
        r.reply(JSON.stringify(body, null, '\t'));
      });
  });

  robot.respond(/du/i, function (r) {
    child = exec('df -h', function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      r.reply('\n' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  });

};

