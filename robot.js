class TrainerRobot {
    constructor(theColor, theSize) {
        this.color = theColor,
        this.size = theSize
        this.creator = "Jeff"

    }
train() {
    console.log("Train its customer, manage diets and supplements")
}

}

const robot1 = new TrainerRobot('blue','6ft')
const robot2 = new TrainerRobot('grey','5ft4')

class GirlfriendRobot {
    constructor(theHeight, theAge) {
        this.height = theHeight,
        this.age = theAge,
        this.creator = "Jeff"
    }

love() {
    console.log("Be the partner of the customer")
}

}

const girl1 = new GirlfriendRobot('5ft5', '20 years old')
const girl2 = new GirlfriendRobot('5ft6', '25 years old')

class TeacherRobot {
    constructor(theTime, theSubject) {
        this.time = theTime,
        this.subject = theSubject,
        this.creator = "Jeff"
    }

teach() {
    console.log("Be the teacher of the customer")
}

}

const teacher1 = new TeacherRobot('2 hours', 'Web development')
const teacher2 = new TeacherRobot('1 hour', 'AP environmental science')