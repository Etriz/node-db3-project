const db = require("../data/db-config.js");

function find() {
  return db("schemes");
}

const findById = (id) => {
  return db("schemes").where({ id }).first();
};

const findSteps = (id) => {
  return db("schemes as sc")
    .join("steps as st", "sc.id", "st.scheme_id")
    .select("sc.scheme_name as scheme name", "st.step_number as step number", "st.instructions")
    .where({ "sc.id": id })
    .orderBy("st.step_number");
};

function add(data) {
  return new Promise((resolve, reject) => {
    db("schemes")
      .insert(data)
      .then((result) => {
        if (result) {
          resolve({ ...data, id: result[0] });
        } else {
          reject(null);
        }
      });
  });
}

// async function addAlt(data) {
//   return new Promise((resolve, reject) => {
//       const result = await db('schemes').insert(data);
//       if (result) {
//           resolve({ mySpecialAddedField: "added value...", ...result });
//       } else {
//           reject(null);
//       }
//   });
// }

//! in progress
const addStep = (data, id) => {
  return db("steps").where({ "steps.scheme_id": id }).insert(data);
};

function update(changes, id) {
  return new Promise((resolve, reject) => {
    db("schemes")
      .where({ id })
      .update(changes)
      .then((result) => {
        if (result) {
          resolve({ ...changes, id: id });
        } else {
          reject(null);
        }
      });
  });
}

function remove(id) {
  return findById(id).then((res) => {
    db("schemes").where({ id }).del();
    return res;
  });
}

module.exports = { find, findById, findSteps, add, addStep, update, remove };
