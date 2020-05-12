function formValidation() {
    var studentID = document.Student_Score.student_ID;
    var marks = document.Student_Score.marks;
    var examType = document.Student_Score.type;
    var chance = document.Student_Score.chance;
    var courseName = document.Student_Score.course_name;
    var edicationalYear = document.Student_Score.year;
    var semester = document.Student_Score.semester;
    var examDate = document.Student_Score.exam_date;
    if (allNumber(studentID, 'Invalid Number ID!')) {
        if (allNumber(marks, 'Invalid Subject Marks!')) {
            if (checkRange(marks, 'Marks Should be in range of (0 - 100)!')) {
                if (checkSelectList(examType, 'Invalid Exam Type!')) {
                    if (checkSelectList(chance, 'Invalid Chance!')) {
                        if (checkSelectList(courseName, 'Invalid Course Name!')) {
                            if (checkSelectList(edicationalYear, 'Invalid Educational Year!')) {
                                if (checkSelectList(semester, 'Invalid Semester!')) {
                                    window.location.reload();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// checks inputs for only numbers
function allNumber(number, message) {
    var num = /^[0-9]+$/;
    if (number.value.match(num)) {
        return true;
    }
    else {
        alert(message);
        number.focus();
        return false;
    }
}

// check inputs for Select List value
function checkSelectList(input, message) {
    if (input.value == "") {
        alert(message);
        input.focus();
        return false;
    }
    else {
        return true;
    }
}

// check range
function checkRange(mark, message) {
    console.log("jo");

    if (mark.value > 100) {
        alert(message);
        input.focus();
        return false;
    }
    else {
        return true;
    }
}