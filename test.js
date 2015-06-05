suite("dockerode-promise", function() {
  var Docker = require('./');

  test("docker.info", function() {
    var docker = new Docker({
      socketPath: '/var/run/docker.sock'
    });
    return docker.info();
  });
});