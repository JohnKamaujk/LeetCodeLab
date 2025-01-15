-- Table: Scores

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | student_id  | int     |
-- | subject     | varchar |
-- | score       | int     |
-- | exam_date   | varchar |
-- +-------------+---------+
-- (student_id, subject, exam_date) is the primary key for this table.
-- Each row contains information about a student's score in a specific subject on a particular exam date. score is between 0 and 100 (inclusive).
-- Write a solution to find the students who have shown improvement. A student is considered to have shown improvement if they meet both of these conditions:

-- Have taken exams in the same subject on at least two different dates
-- Their latest score in that subject is higher than their first score
-- Return the result table ordered by student_id, subject in ascending order.

-- The result format is in the following example.

 

-- Example:

-- Input:

-- Scores table:

-- +------------+----------+-------+------------+
-- | student_id | subject  | score | exam_date  |
-- +------------+----------+-------+------------+
-- | 101        | Math     | 70    | 15-01-2023 |
-- | 101        | Math     | 85    | 15-02-2023 |
-- | 101        | Physics  | 65    | 15-01-2023 |
-- | 101        | Physics  | 60    | 15-02-2023 |
-- | 102        | Math     | 80    | 15-01-2023 |
-- | 102        | Math     | 85    | 15-02-2023 |
-- | 103        | Math     | 90    | 15-01-2023 |
-- | 104        | Physics  | 75    | 15-01-2023 |
-- | 104        | Physics  | 85    | 15-02-2023 |
-- +------------+----------+-------+------------+
-- Output:

-- +------------+----------+-------------+--------------+
-- | student_id | subject  | first_score | latest_score |
-- +------------+----------+-------------+--------------+
-- | 101        | Math     | 70          | 85           |
-- | 102        | Math     | 80          | 85           |
-- | 104        | Physics  | 75          | 85           |
-- +------------+----------+-------------+--------------+
-- Explanation:

-- Student 101 in Math: Improved from 70 to 85
-- Student 101 in Physics: No improvement (dropped from 65 to 60)
-- Student 102 in Math: Improved from 80 to 85
-- Student 103 in Math: Only one exam, not eligible
-- Student 104 in Physics: Improved from 75 to 85
-- Result table is ordered by student_id, subject.

WITH ExamDates AS
(
    SELECT 
        student_id, 
        subject, 
        MIN(exam_date) AS first_date, 
        MAX(exam_date) AS latest_date
    FROM Scores
    GROUP BY student_id, subject
),
ScoresWithDates AS
(
    SELECT 
        e.student_id, 
        e.subject, 
        s1.score AS first_score, 
        s2.score AS latest_score
    FROM ExamDates e
    JOIN Scores s1
        ON e.student_id = s1.student_id 
        AND e.subject = s1.subject 
        AND e.first_date = s1.exam_date
    JOIN Scores s2
        ON e.student_id = s2.student_id 
        AND e.subject = s2.subject 
        AND e.latest_date = s2.exam_date 
        AND e.first_date != e.latest_date
)
SELECT 
    student_id, 
    subject, 
    first_score, 
    latest_score
FROM ScoresWithDates
WHERE latest_score > first_score
ORDER BY student_id, subject;
