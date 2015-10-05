// Data for each User is stored in memory instead of in
// a database. This store (and internal code within the User model)
// could in principle be replaced by a database without needing to
// modify any code in the controller.
var _store = { };

// Model code for a User object in the note-taking app.
// Each User object stores a username, password, and collection
// of notes. Each note has some textual content and is specified
// by the owner's username as well as an ID. Each ID is unique
// only within the space of each User, so a (username, noteID)
// uniquely specifies any note.
var User = (function User(_store) {

  var that = Object.create(User.prototype);

  var userExists = function(username) {
    return _store[username] !== undefined;
  }

  var getUser = function(username) {
    if (userExists(username)) {
      return _store[username];
    }
  }

  that.findByUsername = function (username, callback) {
    if (userExists(username)) {
      callback(null, getUser(username));
    } else {
      callback({ msg : 'No such user!' });
    }
  }

  that.verifyPassword = function(username, candidatepw, callback) {
    if (userExists(username)) {
      var user = getUser(username);
      if (candidatepw === user.password) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    } else {
      callback(null, false);
    }
  }

  that.createNewUser = function (username, password, callback) {
    if (userExists(username)) {
      callback({ taken: true });
    } else {
      _store[username] = { 'username' : username,
                 'password' : password,
                 'notes' : [] };
      callback(null);
    }
  };

  that.getNote = function(username, noteId, callback) {
    if (userExists(username)) {
      var user = getUser(username);
      if (user.notes[noteId]) {
        var note = user.notes[noteId];
        callback(null, note);
      } else {
        callback({ msg : 'Invalid note. '});
      }
    } else {
      callback({ msg : 'Invalid user. '});
    }
  };

  that.getNotes = function(username, callback) {
    if (userExists(username)) {
      var user = getUser(username);
      callback(null, user.notes);
    } else {
      callback({ msg : 'Invalid user.' });
    }
  }

  that.addNote = function(username, note, callback) {
    if (userExists(username)) {
      var user = getUser(username);
      note._id = user.notes.length;
      user.notes.push(note);
      callback(null);
    } else {
      callback({ msg : 'Invalid user.' });
    }
  };

  that.updateNote = function(username, noteId, newContent, callback) {
    if (userExists(username)) {
      var notes = getUser(username).notes;
      if (notes[noteId]) {
        notes[noteId].content = newContent;
        callback(null);
      } else {
        callback({ msg : 'Invalid note.' });
      }
    } else {
      callback({ msg : ' Invalid user.' });
    }
  };

  that.removeNote = function(username, noteId, callback) {
    if (userExists(username)) {
      var notes = getUser(username).notes;
      if (notes[noteId]) {
        delete notes[noteId];
        callback(null);
      } else {
        callback({ msg : 'Invalid note.' });
      }
    } else {
      callback({ msg : 'Invalid user.' });
    }
  };

  Object.freeze(that);
  return that;

})(_store);

module.exports = User;
