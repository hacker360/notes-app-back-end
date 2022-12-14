const {addNoteHandler, getAllNotesHandler} = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: () => {},
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    {
        method: 'GET',
        path: '/notes/{id}',
        handler: () => {},
    },
  ];

  const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((n) => n.id === id)[0];
  };
  
module.exports = routes;
