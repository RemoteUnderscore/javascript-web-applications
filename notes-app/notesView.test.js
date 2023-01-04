/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays a note', () => {
    const notes = new NotesModel();
    const view = new NotesView(notes);
    notes.addNote('First note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });

  it('displays 2 notes', () => {
    const notes = new NotesModel();
    const view = new NotesView(notes);
    notes.addNote('First note');
    notes.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
