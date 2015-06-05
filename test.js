suite("dockerode-promise", function() {
  var Docker = require('./');
  var assert = require('assert');

  var docker = new Docker({
    socketPath: '/var/run/docker.sock'
  });

  test("docker.info", function() {
    return docker.info();
  });

  test("docker.createContainer", function() {
    return docker.createContainer({
      Image: 'busybox',
      Command: ['true'],
      AttachStdin: false,
      AttachStdout: false,
      AttachStderr: false
    }).then(function(container) {
      assert(container.id);
      return container.start().then(function() {
        return container.wait();
      }).then(function() {
        return container.remove({force: true, v: true});
      });
    })
  });
});