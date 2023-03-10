class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addbuttonEl = document.querySelector('#add-note-button');

    this.addbuttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });

    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);

      document.querySelector('#add-note-input').value = '';
    });
  }
}

module.exports = NotesView;