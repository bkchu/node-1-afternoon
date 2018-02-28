let messages = [];
let id = 0;
//id, text, time
module.exports = {
  create: (req, res) => {
    let message = {
      id: id,
      text: req.body.text,
      time: req.body.time
    };
    messages.push(message);
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    const updateId = req.params.id;
    let index = messages.findIndex(message => message.id == updateId);
    let message = messages[index];
    messages[index] = {
      id: message.id,
      text: req.body.text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const deleteId = req.params.id;
    let index = messages.findIndex(message => message.id == deleteId);
    messages.splice(index, 1);
    res.status(200).send(messages);
  }
};
