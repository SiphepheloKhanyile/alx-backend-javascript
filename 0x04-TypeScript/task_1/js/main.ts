interface Teacher {
    readonly fullName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    reqlocation: string,
    contract: boolean
}

interface Directors extends Teacher {
    numberofReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string  {
    return firstName[0] + ". " + lastName;
}

class StudentClass {
    firstName;
    lastName;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(){
        return "Currently working";
    }
}
