# Write your MySQL query statement below
SELECT email from Person
group by email
Having count(email) > 1
