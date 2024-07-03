type employeeType = Director|Teacher;
type Subjects = 'Math'|'History';

interface baseInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
}

interface DirectorInterface extends baseInterface {
    workDirectorTasks(): string;
}

interface TeacherInterface extends baseInterface {
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

const createEmployee: Function = (salary: string|number): employeeType => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    }

    return new Director();
}

const isDirector: Function = (employee: employeeType): boolean => employee instanceof Director;

const executeWork: Function = (employee: employeeType): string => {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }

    return employee.workTeacherTasks();
}

const teachClass: Function = (todayClass: Subjects): string => `Teaching ${todayClass}`;