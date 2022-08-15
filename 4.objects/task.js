"Use strict"

function Student(name, gender, age) {
     this.name = name;
     this.gender = gender;
     this.age = age;
 }

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
   this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined){ 
    this.marks = [...marks];
  } else {
    this.marks.push(marks);
  }
}

Student.prototype.getAverage = function() {
  let avg = 0;

  for (let i = 0; i < this.marks.length; i++) {
    avg += this.marks[i];
  }

  return (avg / this.marks.length);
}

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}