


document.querySelector('#get').addEventListener('click', () => {         /* Adds event listener and a function base to a button GET located after HTML heading*/

    const lottoNumbers = []                                              /*section creates empty array for numbers to be generated, and defines variables to be used*/
    const firstSeven = document.getElementById('ykkonen')                /*later. Variables are pointed to 3 different tables made in HTML document*/
    const lastTwo = document.getElementById('kakkonen')
    const uniqueplus = document.getElementById('plus')

    while(lottoNumbers.length <= 10) {                                    /*Creates 10 new random numbers and checks if there are any duplicates already in array.*/
        let newNumber = Math.floor(Math.random() * 40) +1
        if(!lottoNumbers.includes(newNumber)) {
            lottoNumbers.push(newNumber)
        }
    }


    
    const sortedFirstSeven = lottoNumbers.slice(0,7).sort((a, b) => a - b)  /*Finnish lotto system uses 7 main numbers, 2 additional numbers and 1 "plus" number.*/
    const sortedLastTwo = lottoNumbers.slice(7,9).sort((a, b) => a - b)     /*This section creates two new variables for main numbers and additional numbers.*/ 
                                                                            /* It picks first 7 digits from the still unsorted 'lottoNumbers' array and also the 8th and 9nth digit.*/
                                                                            /* for additional numbers.*/
                                                                                /*It also sorts the numbers in new variables made.*/

    const addFirstSeven = () => {                                            /* Here we create 3 new functions which use the variables from previous section*/
        const row = firstSeven.insertRow()                                    /*and it inserts the sorted (sliced) parts of array to their own dedicated elements in HTML document*/
        sortedFirstSeven.forEach(number => {
            const col = row.insertCell()
            col.textContent = number
        })
    }

    const addLastTwo = () => {
        const row1 = lastTwo.insertRow()
        sortedLastTwo.forEach(number => {
            const col1 = row1.insertCell()
            col1.textContent = number
        })
    }

    const addUniquePlus = () => {                                               /*this part doesnt need sorting, since we only pick the last number from whole array with -1*/
        const row2 = uniqueplus.insertRow()
        lottoNumbers.slice(-1).forEach(number => {
            const col2 = row2.insertCell()
            col2.textContent = number
        })
    }
addFirstSeven()                                                                /*Here we call the made functions so they appear on the HTML page*/
addLastTwo()
addUniquePlus()

})
