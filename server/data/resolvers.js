const db = require('./dbconnectors');

const resolvers = {
  Query: {
    getContacts: () => {
      return db.Contacts.find();
    },
    getOneContact: (root, { id }) => {
      return new Promise((resolve, object) => {
        db.Contacts.findById(id, (err, Contact) => {
          if (err) reject(err)
          else resolve(Contact)
        })
      })
    }

  },
  Mutation: {
    createContact: (root, { input }) => {
      const newContact = new db.Contacts({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        company: input.company,
      });

      newContact.id = newContact._id;

      return new Promise((resolve, object) => {
        newContact.save((err) => {
          if (err) reject(err)
          else resolve(newContact)
        })
      })
    },
    updateContact: (root, { input }) => {
      return new Promise((resolve, object) => {
        db.Contacts.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, contact) => {
          if (err) reject(err)
          else resolve(contact)
        })
      })
    },
    deleteContact: (root, { id }) => {
      return new Promise((resolve, object) => {
        db.Contacts.remove({ _id: id }, (err) => {
          if (err) reject(err)
          else resolve('Successfully deleted contact!')
        })
      })
    }

  }
}
module.exports = resolvers;