function growBeanstalk(years) {
    // Base case
    if (years <= 2) {
        return 1;
    }
    // Recursive case
    return growBeanstalk(years - 1) + growBeanstalk(years - 2);
}

// Set the height of the beanstalk using your function
var height = growBeanstalk(7);

console.log(height);

/*
// illustration of the control flow in a recursive function.
1. growBeanstalk(5) {
    return growBeanstalk(4) + growBeanstalk(3);
    2.   growBeanstalk(4) {
        return growBeanstalk(3) + growBeanstalk(2);
        3.     growBeanstalk(3) {
            return growBeanstalk(2) + growBeanstalk(1);
            4.       growBeanstalk(2) {
                return 1;
            };
            5.       growBeanstalk(1) {
                return 1;
            };
            return 2; // (1 + 1)
        };
        6.     growBeanstalk(2) {
            return 1;
        };
        return 3; // (2 + 1)
    };
    7.  growBeanstalk(3) {
        return growBeanstalk(2) + growBeanstalk(1);
        8.     growBeanstalk(2) {
            return 1;
        };
        9.     growBeanstalk(1) {
            return 1;
        };
        return 2; // (1 + 1)
    };
    return 5; // (3 + 2)
};
*/