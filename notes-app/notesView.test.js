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
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('First note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });

  it('displays 2 notes', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note', () => {
    
    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = 'Test note';

    const button = document.querySelector('#add-note-button');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Test note');
  });

  it('clears the previous notes', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('Test one');
    model.addNote('Test two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
});
