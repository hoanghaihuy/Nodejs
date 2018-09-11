console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const titleOptions = { describe: "Title of note", demand: true, alias: "t" };
const bodyOptions = { describe: "body of note", demand: true, alias: "b" };

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions,
  })
  .command("remove", "Remove a note", {
    title: titleOptions,
  })
  .help().argv;
var command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note created\n--\n${note.title}\n${note.body}`);
  } else {
    console.log("Note is already taken");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    console.log(`--\n${note.title}\n${note.body}`);
  });
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log(`Note found\n--\n${note.title}\n${note.body}`);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var newNotes = notes.removeNote(argv.title);
  var message = newNotes ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command is not recognized");
}
