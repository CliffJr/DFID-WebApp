import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random();
  const genderStatus = Math.random();
  var today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const yearDiabetes = today.getFullYear();

  return {
    identityNumber: namor.generate({words: 1, number: 2}),
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    gender: genderStatus > 0.66 ? 'Male': genderStatus > 0.33 ? 'Female': 'Other',
    dob: date,
    yearDD: yearDiabetes,
    status:
      statusChance > 0.66
        ? 'Normal'
        : statusChance > 0.33
        ? 'Mild'
        : 'Severe',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}