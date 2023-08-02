//all return the first failed test case, or 0 if passed all

export const fibonnaciFunTimeHandler = (userFunc: Function) => {

    //testcase 1
    if (!userFunc) {
        return 1
    }

    //test case 2
    if (userFunc(0) !== 0) {
        return 2
    }

    //test case 3
    if (userFunc(4) !== 3) {
        return 3
    }

    //test case 4
    if (userFunc(10) !== 55) {
        return 4
    }

    //test case 5
    if (userFunc(15) !== 610) {
        return 5
    }

    //test case 6
    if (userFunc(20) !== 6765) {
        return 6
    }

    //test case 7
    if (userFunc(40) !== 102334155) {
        return 7
    }

    //test case 8
    if (userFunc(60) !== 1548008755920) {
        return 8
    }

    //test case 9
    if (userFunc(80) !== 23416728348467685) {
        return 9
    }

    //test case 10
    if (userFunc(100) !== 354224848179261915075) {
        return 10
    }


    return 0
}

export const friendFilterHandler = (userFunc: Function) => {




    //testcase 1
    if (!userFunc) {
        return 1
    }
    
    //test case 2
    const testArray2 =
    [
        {
            name: "damian",
            hobbies: ['flyfishing', 'lotr marathons'],
            Likes_LOTR: true
        },
        {
            name: "jess",
            hobbies: ['searching for divs', 'committing to main'],
            Likes_LOTR: true
        },
        {
            name: "saruman",
            hobbies: ['gazing into the palantir', 'fingerpainting'],
            Likes_LOTR: false
        },
        {
            name: "kc",
            hobbies: ['rugby', 'picnics'],
            Likes_LOTR: false
        },
        {
            name: "asad",
            hobbies: ['jam making', 'stargazing'],
            Likes_LOTR: true
        },
        {
            name: "joe",
            hobbies: ['folder structure', 'lotr cosplay'],
            Likes_LOTR: true
        },
        {
            name: "gandalf",
            hobbies: ['blowing smoke rings', 'fireworks'],
            Likes_LOTR: true
        }
    ]
    
      const result2 = userFunc(testArray2)
    if (!Array.isArray(result2) || result2.length !== 5 || !result2.every(obj => {
        return Object.keys(obj).includes("name") && Object.keys(obj).includes("hobbies") && Object.keys(obj).includes("Likes_LOTR")
    })) {
        return 2
    }

    //test case 3
    const testArray3 =
    [
        {
            name: "damian",
            hobbies: ['flyfishing', 'lotr marathons'],
            Likes_LOTR: false
        },
        {
            name: "jess",
            hobbies: ['searching for divs', 'committing to main'],
            Likes_LOTR: false
        },
        {
            name: "saruman",
            hobbies: ['gazing into the palantir', 'fingerpainting'],
            Likes_LOTR: false
        },
        {
            name: "kc",
            hobbies: ['rugby', 'picnics'],
            Likes_LOTR: false
        },
        {
            name: "asad",
            hobbies: ['jam making', 'stargazing'],
            Likes_LOTR: false
        },
        {
            name: "joe",
            hobbies: ['folder structure', 'lotr cosplay'],
            Likes_LOTR: false
        },
        {
            name: "gandalf",
            hobbies: ['blowing smoke rings', 'fireworks'],
            Likes_LOTR: false
        }
    ]
    
      const result3 = userFunc(testArray3)
    if (!Array.isArray(result3) || result3.length !== 0 ) {
        return 3
    }

    //test case 4
    const testArray4 =
    [
        {
            name: "damian",
            hobbies: ['flyfishing', 'lotr marathons'],
            Likes_LOTR: true
        },
        {
            name: "jess",
            hobbies: ['searching for divs', 'committing to main'],
            Likes_LOTR: true
        },
        {
            name: "saruman",
            hobbies: ['gazing into the palantir', 'fingerpainting'],
            Likes_LOTR: true
        },
        {
            name: "kc",
            hobbies: ['rugby', 'picnics'],
            Likes_LOTR: true
        },
        {
            name: "asad",
            hobbies: ['jam making', 'stargazing'],
            Likes_LOTR: true
        },
        {
            name: "joe",
            hobbies: ['folder structure', 'lotr cosplay'],
            Likes_LOTR: true
        },
        {
            name: "gandalf",
            hobbies: ['blowing smoke rings', 'fireworks'],
            Likes_LOTR: true
        }
    ]
    
      const result4 = userFunc(testArray4)
    if (!Array.isArray(result4) || result4.length !== 7 || !result4.every(obj => {
        return Object.keys(obj).includes("name") && Object.keys(obj).includes("hobbies") && Object.keys(obj).includes("Likes_LOTR")
    })) {
        return 4
    }

    return 0
}

export const tiedInKnotsHandler = (userFunc: Function) => {
    
}