export default class HolbertonCourse {
  /**
   * Constructor for HolbertonCourse
   * @param {string} name - Name of the course
   * @param {number} length - Length of the course
   * @param {string[]} students - Array of student names
   */
  constructor(name, length, students = []) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (!students.every((students) => typeof students === 'string')) {
      throw new TypeError('All students must be strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (!students.every((students) => typeof students === 'string')) {
      throw new TypeError('All students must be strings');
    }
    this._students = students;
  }
}
