// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }

// {
//     "id": number,
//     "avg": number,
//     <assignment_id>: number,
// }

const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};
const AssignmentInfo = [
  {
    id: 1,
    name: "Declare a Variable",
    due_at: "2023-01-25",
    points_possible: 50,
  },
  {
    id: 2,
    name: "Write a Function",
    due_at: "2023-02-27",
    points_possible: 150,
  },
  {
    id: 3,
    name: "Code the World",
    due_at: "3156-11-15",
    points_possible: 500,
  },
];
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: AssignmentInfo,
};
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error,
//  letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.

function findMismatchCourseId(CourseInfo, AssignmentGroup) {
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error("the input is invalid");
  }
}

findMismatchCourseId(CourseInfo, AssignmentGroup);

// You should also account for potential errors in the data that your program receives.What if points_possible is 0? You cannot divide by zero.
//  What if a value that you are expecting to be a number is instead a string?
// Use try/catch and other logic to handle these types of errors gracefully.

function findErrors(CourseInfo, AssignmentInfo, AssignmentGroup) {
  try {
    AssignmentInfo.forEach((assignment) => {
      if (assignment.points_possible === 0) {
        throw new Error("point should not be zero!!");
      }
      if (
        //used parseInt instade of Number to check even the strings like "1"
        isNaN(parseInt(assignment.points_possible)) ||
        isNaN(parseInt(assignment.id))
      ) {
        throw new Error("data should be number!!");
      }
    });

    if (
      isNaN(parseInt(AssignmentGroup.group_weight)) ||
      isNaN(parseInt(AssignmentGroup.course_id)) ||
      isNaN(parseInt(CourseInfo.id))
    ) {
      throw new Error("the data should be a number!");
    }
  } catch (Error) {
    console.log(e);
  }
}
findErrors(CourseInfo, AssignmentInfo, AssignmentGroup);

// If an assignment is not yet due, do not include it in the results or the average. Additionally,
//  if the learner’s submission is late (submitted_at is past due_at),
// deduct 10 percent of the total points possible from their score for that assignment.
function assignmentData(assignment, submissions) {
  const currentTime = new Date();

  assignment.forEach((assignment) => {
    const dueTime = new Date(assignment.due_at);
    console.log("Assignment due at:", dueTime);

    const submission = submissions.find(
      (sub) => sub.assignment_id === assignment.id
    );
    if (!submission) {
      console.log(`No submission found for assignment ID ${assignment.id}`);
      return;
    }

    const submissionDate = new Date(submission.submission.submitted_at);

    console.log("currentTime:", currentTime);
    console.log("dueTime:", dueTime);
    console.log("submissionDate:", submissionDate);

    // assignment is not yet due
    if (dueTime > currentTime) {
      console.log(`Assignment ${assignment.id} is not yet due.`);
      return null;
    }
    if (submissionDate > currentTime) {
      submission.submission.score -= assignment.points_possible * 0.1;
    }
    const result = {
      assignment_id: assignment.id,
      percentage: (submission.submission.score / assignment.points_possible) * 100,
    };
    console.log(result);
  });
}
assignmentData(AssignmentInfo, LearnerSubmissions);

// function getLearnerData() {}
