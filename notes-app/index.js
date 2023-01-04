const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
model.addNote('This is an example note');
model.addNote('This is a second example note');

const view = new NotesView(model);

view.displayNotes();

console.log(model.getNotes());
