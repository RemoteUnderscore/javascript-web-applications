const NotesModel = require('./notesModel');

describe('notesModel', () => {
  it('returns an empty list', () => {
    const notes = new NotesModel();

    expect(notes.getNotes()).toEqual([]);
  });

  it('adds a note', () => {
    const notes = new NotesModel();
    notes.addNote('Buy bread');

    expect(notes.getNotes()).toEqual(['Buy bread']);
  });

  it('resets the list', () => {
    const notes = new NotesModel();
    notes.addNote('Buy bread');
    notes.reset();

    expect(notes.getNotes()).toEqual([]);
});
});