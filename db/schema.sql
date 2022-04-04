CREATE DATABASE clinic;

USE clinic;

CREATE TABLE doctor (
name VARCHAR(20),
degree VARCHAR(20),
telephone VARCHAR(20),
);

CREATE TABLE patient (
    patient_ID INT NOT NULL,
    fname VARCHAR(20),
    lname VARCHAR(20),
    address TEXT,
    telephone VARCHAR(15),
    Gender VARCHAR(1),
    AGE INT,
    Blood_TYPE VARCHAR(5),
    Allergies VARCHAR(20),
);

CREATE TABLE prescription(
    Prescription_Name VARCHAR(20),
    Doses INT,
    Expiration_DATE DATE,
);

CREATE TABLE DIGNOSIS(
    Illness VARCHAR(20) NOT NULL,
    doctor_name VARCHAR(20),
    patient_ID INT NOT NULL,
);

CREATE TABLE TEST(
    TEST_ID INT NOT NULL, 
    RESULT VARCHAR(20) NOT NULL,
    Illness VARCHAR(20),
    doctor_name VARCHAR(20),
    patient_ID INT NOT NULL,
);

CREATE TABLE doctor_patient(
    doctor_name VARCHAR(20),
    patient_ID VARCHAr(20),
    time DATE,
);

INSERT INTO Doctor VALUES ('Dr. Foo ', ' Family Physician', '(416) 932-3784');
INSERT INTO Doctor VALUES ('Dr. Daniela Curry', ' Cardiology ',  '(416) 381-3887');
INSERT INTO Doctor VALUES ('Dr. Isai Roberts', ' Pediatric ', '(416) 779-3099');
INSERT INTO Doctor VALUES ('Dr. Angelo Cook', ' Physiotherapist ', '(416) 723-6710');
INSERT INTO Doctor VALUES ('Dr. Patrick Frost', ' Dermatologist ', '(416) 980-2382');
INSERT INTO Doctor VALUES ('Dr. Oswaldo Salas', ' Nephrologist ', '(416) 779-5475');

INSERT INTO Patient VALUES ('833663', 'Alisha', 'Rivera', '1717 Churchill Plaza', '(135)753-2346', 'F', '50', 'A+', 'Tree pollen');
INSERT INTO Patient VALUES ('922884', 'Malakai', 'Villa', '409 Holdom Avenue', '(643)764-1256', 'M', '31', 'O-', ' Peanut');
INSERT INTO Patient VALUES ('383978', 'Clare', 'Davis', '1513 Hastings Street', '(642)176-7421', 'F', '23', 'AB+', 'Sesame');
INSERT INTO Patient VALUES ('696405', 'Harley', 'Rojas', '3292 St Jean Baptiste St', '(432)753-1274', 'M', '82', 'B-', 'Lactose intolerant');

INSERT INTO Prescription VALUES ('Atorvastatin', '20', '2022-10-30');
INSERT INTO Prescription VALUES ('Lisinopril', '30', '2022-07-12');
INSERT INTO Prescription VALUES ('Albuterol', '70', '2012-09-03');
INSERT INTO Prescription VALUES ('Losartan', '50', '2022-12-07');

INSERT INTO Diagnosis VALUES ('Mononucleosis', 'Dr. Ayaan Summers', '833663');
INSERT INTO Diagnosis VALUES ('Frostbite', 'Dr. Ayaan Summers', '696405');
INSERT INTO Diagnosis VALUES ('Diabetes', 'Dr. Oswaldo Salas', '383978');
INSERT INTO Diagnosis VALUES ('Heart Attack', 'Dr. Daniela Curry', '922884');

INSERT INTO Tests VALUES ('4512', 'Successful', 'Mononucleosis', 'Dr. Ayaan Summers', '833663');
INSERT INTO Tests VALUES ('5123', 'Successful', 'Frostbite', 'Dr. Ayaan Summers', '696405');
INSERT INTO Tests VALUES ('7231', 'Successful', 'Diabetes', 'Dr. Oswaldo Salas', '383978');
INSERT INTO Tests VALUES ('1631', 'Successful', 'Heart Attack', 'Dr. Daniela Curry', '922884');

INSERT INTO Doctor_Patient VALUES ('Dr. Ayaan Summers', '833663', '2022-01-04');
INSERT INTO Doctor_Patient VALUES ('Dr. Ayaan Summers', '696405', '2021-12-13');
INSERT INTO Doctor_Patient VALUES ('Dr. Oswaldo Salas', '383978', '2021-12-16');
INSERT INTO Doctor_Patient VALUES ('Dr. Daniela Curry', '922884', '2021-11-19');

INSERT INTO user VALUES ('rekhabalaji', 'rekha', NULL);
