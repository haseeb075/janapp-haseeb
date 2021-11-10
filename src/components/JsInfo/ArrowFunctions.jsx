// Arrow Functions

// Program 1 print all student of group object using function
let group = {
    title : "group name",
    students: ["ali", "ahmed", "Haseeb"],

    show(){
        // for multiple students, I use forEach
        this.students.forEach(
            name => alert(this.title + ":" + name)
        )
    }
}
group.show()

// Note: Regular function gives error of title will be undefined because of this 
// Note: Another limitation Arrow functions cant have contructors so they cant be called with new
// Note: difference betweem arrrow func and regular func is bind. They also dont lookuo into this




