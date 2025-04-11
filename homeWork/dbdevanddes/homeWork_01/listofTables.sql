-- 1. Табела: Student
CREATE TABLE Student (
    ID SERIAL PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    DateOfBirth DATE NOT NULL,
    EnrolledDate DATE NOT NULL,
    Gender VARCHAR(10) NOT NULL,
    NationalIDNumber VARCHAR(20) NOT NULL,
    StudentCardNumber VARCHAR(20) NOT NULL
);

-- 2. Табела: Course
CREATE TABLE Course (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Credit INTEGER NOT NULL,
    AcademicYear VARCHAR(9) NOT NULL,  -- пример: "2024/2025"
    Semester INTEGER NOT NULL          -- 1 или 2
);

-- 3. Табела: Teacher
CREATE TABLE Teacher (
    ID SERIAL PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    DateOfBirth DATE NOT NULL,
    AcademicRank VARCHAR(20) NOT NULL,
    HireDate DATE NOT NULL
);

-- 4. Табела: Grade
CREATE TABLE Grade (
    ID SERIAL PRIMARY KEY,
    StudentID INTEGER NOT NULL,
    CourseID INTEGER NOT NULL,
    TeacherID INTEGER NOT NULL,
    Grade SMALLINT NOT NULL CHECK (Grade BETWEEN 1 AND 10),
    Comment VARCHAR(100),
    CreatedDate DATE NOT NULL,
    FOREIGN KEY (StudentID) REFERENCES Student(ID),
    FOREIGN KEY (CourseID) REFERENCES Course(ID),
    FOREIGN KEY (TeacherID) REFERENCES Teacher(ID)
);

-- 5. Табела: AchievementType
CREATE TABLE AchievementType (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Description TEXT,
    ParticipationRate NUMERIC(5,2) -- Пример: 50.00 (%)
);

-- 6. Табела: GradeDetails
CREATE TABLE GradeDetails (
    ID SERIAL PRIMARY KEY,
    GradeID INTEGER NOT NULL,
    AchievementTypeID INTEGER NOT NULL,
    AchievementPoints NUMERIC(5,2) NOT NULL,
    AchievementMaxPoints NUMERIC(5,2) NOT NULL,
    AchievementDate DATE NOT NULL,
    FOREIGN KEY (GradeID) REFERENCES Grade(ID),
    FOREIGN KEY (AchievementTypeID) REFERENCES AchievementType(ID)
);
