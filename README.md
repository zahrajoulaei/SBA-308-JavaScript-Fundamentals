# JavaScript Fundamentals

This assessment gauges understanding of fundamental JavaScript concepts and ability to apply these concepts in a practical manner.

## Overview

- Employ basic JavaScript syntax accurately.
- Implement control flow structures such as  conditionals and loops effectively.
- Use arrays and objects to organize and manage data.
- Develop functions to create reusable code.
- Utilize loops and iteration to navigate through data collections.
- Implement error handling to manage
- potential code failures gracefully.



## Features


A CourseInfo object, which looks like this:
```
{
  "id": number,
  "name": string,
}
```

An AssignmentGroup object, which looks like this:

```
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],
}
```

Each AssignmentInfo object within the assignments array looks like this:

```
{
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,
}
```

An array of LearnerSubmission objects, which each look like this:

```
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}
```

the goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
```
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}
```

## Technologies Used

- **Pure Javascript**

## Installation

To set up the project locally, follow these steps:

 **Clone the repository**:
    ```
    https://github.com/zahrajoulaei/SBA-308-JavaScript-Fundamentals
    ```




## Example output:
 ```
 [
  { '1': 84, '2': 100, id: 125, avg: 96 },
  { '1': 78, '2': 83.33333333333334, id: 132, avg: 82 }
]
 ```



## Contact

For any inquiries or feedback, please contact me at [zahrajoulaei@gmail.com](mailto:zahrajoulaei@gmail.com).Lovely pet is about all the pets make our lives more beautiful :)
