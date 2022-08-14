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

Student.prototype.addMarks = function(...Marks) {
  if(this.marks === undefined){ 
    this.marks = [...Marks];
  } else {
    this.marks.push(...Marks);
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
  
  if(reason === 'low grades') {
    delete this.subject;
    delete this.marks;
  }
}