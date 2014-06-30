var School = (function () {
    function School(name, town) {
        var self = this;
        self.name = name;
        self.town = town;
        self._classes = [];
    }

    School.prototype = {
        addClass: function addClass(schoolClass) {
            // Some validation here...
            this._classes.push(schoolClass);
        },
        getClasses: function getClasses() {
            return this._classes.slice(0);
        },
        removeClass: function removeClass(schoolClass) {
            var classIndex = this._classes.indexOf(schoolClass);
            if (classIndex > -1) {
                this._classes.splice(classIndex, 1);
            }
        }
    }

    return School;
}());

var SchoolClass = (function () {
    function SchoolClass(name, capacity, formTeacher) {
        var self = this;
        self.name = name;
        self.capacity = capacity;
        self._students = [];
        self._formTeacher = formTeacher;
    }

    SchoolClass.prototype = {
        addStudent: function addStudent(student) {
            if (this._students.length < this.capacity) {
                this._students.push(student);
            } else {
                throw new Error("Class Limit Reached")
            }
        },
        getStudents: function getStudents() {
            return this._students.slice(0);
        },
        removeStudent: function removeStudent(student) {
            var studentIndex = this._students.indexOf(student);
            if (studentIndex > -1) {
                this._students.splice(studentIndex, 1);
            }
        }
    }

    return SchoolClass;
}());

var Person = (function () {
    function Person(firstName, lastName, age) {
        var self = this;
        self.firstName = firstName;
        self.lastName = lastName;
        self.age = age;
    }

    Person.prototype = {
        introduce: function introduce() {
            var message = "Name: " + this.firstName + " "+ this.lastName + ", Age: " + this.age;
            return message;
        }
    }

    return Person;
}());

var Teacher = (function () {
    function Teacher(firstName, lastName, age, specialty) {
        var self = this;
        Person.call(self, firstName, lastName, age);
        self.specialty = specialty;
    }

    Teacher.prototype = new Person();

    Teacher.prototype.introduce = function introduce() {
        var message = Person.prototype.introduce.call(this);        message += ", Teaches: " + this.specialty;

        return message;
    }

    return Teacher;
}());

var Student = (function () {
    function Student(firstName, lastName, age, grade) {
        var self = this;
        Person.call(self, firstName, lastName, age);
        self.grade = grade;
    }

    Student.prototype = new Person();

    Student.prototype.introduce = function introduce() {
        var message = Person.prototype.introduce.call(this);        message += ", Grade: " + this.grade;

        return message;
    }

    return Student;
}());