function formValidation() {
    var studentID = document.Student_Attandance.student_ID;
    var courseName = document.Student_Attandance.course_name;
    var attendanceDate = document.Student_Attandance.attendance_date;
    var presentDays = document.Student_Attandance.present_days;
    var absentDays = document.Student_Attandance.absent_days;
    var offDays = document.Student_Attandance.off_days;
    var leaveDays = document.Student_Attandance.leave_days;
    if (allNumber(studentID, 'Invalid Student ID!')) {
        if (checkSelectList(courseName, 'Invalid Course Name!')) {
            if (allNumber(presentDays, 'Invalid Present Days Insertion!')) {
                if (checkRange(presentDays, 'Present Days Should Be in Range Of (1 - 31)!')) {
                    if (allNumber(absentDays, 'Invalid Absent Days Insertion!')) {
                        if (checkRange(absentDays, 'Absent Days Should Be in Range Of (1 - 31)!')) {
                            if (allNumber(offDays, 'Invalid off Days Insertion!')) {
                                if (checkRange(offDays, 'Off Days Should Be in Range Of (1 - 31)!')) {
                                    if (allNumber(leaveDays, 'Invalid Leave Days Insertion!')) {
                                        if (checkRange(leaveDays, 'Leave Days Should Be in Range Of (1 - 31)!')) {
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

// check range
function checkRange(mark, message) {
    if (mark.value > 31) {
        alert(message);
        mark.focus();
        return false;
    }
    else {
        return true;
    }
}