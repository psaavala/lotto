


document.querySelector('#get').addEventListener('click', () => {

    const lottoNumbers = []
    const firstSeven = document.getElementById('ykkonen')
    const lastTwo = document.getElementById('kakkonen')
    const uniqueplus = document.getElementById('plus')

    while(lottoNumbers.length <= 10) {
        let newNumber = Math.floor(Math.random() * 40) +1
        if(!lottoNumbers.includes(newNumber)) {
            lottoNumbers.push(newNumber)
        }
    }


    
    const sortedFirstSeven = lottoNumbers.slice(0,7).sort((a, b) => a - b)
    const sortedLastTwo = lottoNumbers.slice(7,9).sort((a, b) => a - b)


    const addFirstSeven = () => {
        const row = firstSeven.insertRow()
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

    const addUniquePlus = () => {
        const row2 = uniqueplus.insertRow()
        lottoNumbers.slice(-1).forEach(number => {
            const col2 = row2.insertCell()
            col2.textContent = number
        })
    }
addFirstSeven()
addLastTwo()
addUniquePlus()

})
