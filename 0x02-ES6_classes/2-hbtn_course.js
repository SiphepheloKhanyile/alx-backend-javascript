class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }

    if (students instanceof Array === false) {
      throw new Error('Students must be an array');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = newName;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = newLength;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(newStudents) {
    if (newStudents instanceof Array === false) {
      throw new Error('Students must be an array');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = newStudents;
  }
}

export default HolbertonCourse;
