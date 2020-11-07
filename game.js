/* const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
   
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
    
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a hospital bed. You cannot remember who you are or how you got there. You feel dazed and confused. Lets find out who you really are...',
        options: [
            {
                text: 'Male',
                nextText: 2
            },
            {
                text: 'Female',
                nextText: 2
            },
        ]
    
    },
    {
        id: 2,
        text: 'AGE?',
        options: [
            {
                text: '10-20',
                nextText: 3
            },
            {
                text: '20-30',
                nextText: 3
            },
            {
                text: '30-40',
                nextText: 3
            },
            {
                text: '40-50',
                nextText: 3
            },
        ]
    },
    {
        id: 3,
        text: 'HAIR COLOUR?',
        options: [
            {
                text: "Black",
                nextText: 4
            },
            {
                text: "Brown",
                nextText: 4
            },
            {
                text: "Blonde",
                nextText: 4
            },
            {
                text: "Red",
                nextText: 4
            },
        ]
    },
    {
        id: 4,
        text: 'EYE COLOUR?',
        options: [
            {
                text: 'Brown',
                nextText: 5
            },
            {
                text: 'Hazel',
                nextText: 5
            },
            {
                text: 'Blue',
                nextText: 5
            },
            {
                text: 'Green',
                nextText: 5
            },
        ]
    }
]

startGame() */

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let state = {
  wallet: false,
  lockerKey: false,
  houseKey: false,
  spareKey: false,
}
function startGame() {
  state = {}
  showTextNode(1)
}
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
const textNodes = [
  {
    id: 1,
    text: 'You wake up in a hospital bed. You cannot remember who you are or how you got there. You feel dazed and confused. Lets find out who you really are...',
    options: [
        {
            text: 'Male',
            setState: {male: true},
            nextText: 2
        },
        {
            text: 'Female',
            setState: {female: true},
            nextText: 2
        }
    ]
},
{
    id: 2,
    text: 'Age?',
    options: [
        {
            text: '10-20',
            nextText: 3
        },
        {
            text: '20-30',
            nextText: 3
        },
        {
            text: '30-40',
            nextText: 3
        },
        {
            text: '40-50',
            nextText: 3
        }
    ]
},
{
    id: 3,
    text: 'Hair Colour?',
    options: [
        {
            text: "Black",
            nextText: 4
        },
        {
            text: "Brown",
            nextText: 4
        },
        {
            text: "Blonde",
            nextText: 4
        },
        {
            text: "Red",
            nextText: 4
        }
    ]
},
{
    id: 4,
    text: 'Eye Colour?',
    options: [
        {
            text: 'Brown',
            nextText: 5
        },
        {
            text: 'Hazel',
            nextText: 5
        },
        {
            text: 'Blue',
            nextText: 5
        },
        {
            text: 'Green',
            nextText: 5
        }
    ]
},
  {
      id: 5,
      text: 'You look around the room. you see a buzzer, and a bag close to the bed.',
      options: [
        {
            text: 'You ring the buzzer to call the doctor.',
            nextText: 6
        },
        {
            text: 'You search the bag.',
            nextText: 7
        }
      ]
  },
  {
      id: 6,
      text: 'After ringing the buzzer the doctor comes into the room and starts going over your chart.',
      options: [
          {
              text: 'Get Discharged and call a taxi.',
              requiredState: (currentState) => currentState.wallet,
              nextText: 8 
          },
          {
              text: 'Stay for 3 days.',
              nextText: 5
          }
      ]
  },
  {
      id: 7,
      text: 'Inside the bag find some keys and you see a wallet, inside you find a reciept, a business card, and a gym membership card.',
      options: [
          {
           text: 'You take the wallet.',
           setState: {wallet: true},
           nextText: 7
          },
          {
            text: 'You take the keys.',
            setState: {houseKey: true, lockerKey: true},
            nextText: 5
          }
    ]
  },
  {
    id: 8,
    text: 'The taxi driver asks were you would like to go?',
    options: [
      {
         text: 'You want to go to the address on the reciept.',
         requiredState: (currentState) => currentState.wallet,
         nextText: 9
      },
        {
         text: 'You want to go to the address on the business card.',
         requiredState: (currentState) => currentState.wallet,
         nextText: 11
        },
        {
          text: 'You want to go to the address on the Gym Card.',
          requiredState: (currentState) => currentState.wallet,
          nextText: 10
         },
         {
          text: 'You need some cash.',
          nextText: 5
         }
      ]
  },
  {
    id: 9,
    text: 'You arrive at the cafe, the worker behind the counter recognises you, "your usual sir?"',
    options: [
      {
       text: 'You ask about the Gym card.',
       nextText: 10
      },
      {
       text: 'You ask about the Business card.',
       nextText: 11
      }
  ]
  },
  {
    id: 10,
    text: 'You arrive at the Gym, you inquire at the reception using your Gym membership card, the receptionist points you to the locker room.',
    options: [
      {
        text: 'Leave and goto business address.',
        nextText: 11
      },
      {
        text: 'Go to the locker room.',
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: 'You arrive at the office were the business is based, you go in and a lady called megan recognises you.',
    options: [
      {
        text: 'Ask her for information.',
        nextText: 13
      },
      {
        text: 'Go to your desk.',
        nextText: 13
      },
      {
        text: 'Go back to the Gym.',
        nextText: 10
      }
    ]
  },
  {
    id: 12,
    text: `As you search for your locker a man calls you over.`,
    options: [
      {
        text: 'Carry on searching for your locker.',
        nextText: 14
      },
      {
        text: 'Go see what the man wants.',
        nextText: 15
      },
      {
        text: 'Leave the locker room.',
        nextText: 10
      }
    ]
  },
  {
    id: 13,
    text: `As you approch your desk, an office worker calls out to you as you look about he waves at you to go to him.`,
    options: [
      {
        text: 'Go see what the office worker wants.',
        nextText: 16
      }
    ]
  },
  {
    id: 14,
    text: 'You found your locker, it is locked.',
    options: [
      {
        text: 'Try keys.',
        requiredState: (currentState) => currentState.lockerKey,
        nextText: 17
      },
      {
        text: 'Go back.',
        nextText: 12
      },
    ]
  },
  {
    id: 15,
    text: 'You go to see what the man in the locker room wanted.',
    options: [
      {
        text: 'Talk with stranger.',
        nextText: 18
      }
    ]
  },
  {
    id: 16,
    text: 'You ask the office worker if he knows you, he tells you that he knows you from the Gym.',
    options: [
      {
        text: 'Go to the Gym.',
        nextText: 10
      }
    ]
  },
  {
    id: 17,
    text: 'You examine the picture and see that the guy standing next to you is the guy from the locker room.',
    options: [
      {
        text: 'Go to the guy who called you over.',
        nextText: 18
      }
    ]
  },
  {
    id: 18,
    text: 'The guy tells you that he has not seen you in a few days, he says his name is logan and that he is your friend and also tells you your address.',
    options: [
      {
        text: 'Go to the address.',
        nextText: 19
      }
    ]
  },
  {
    id: 19,
    text: 'You arrive at your home, you notice movement in the window next door.',
    options: [
      {
        text: 'Knock on neighbours door.',
        nextText: 21
      },
      {
        text: 'Knock on your door.',
        nextText: 20
      },
      {
        text: 'Use key.',
        requiredState: (currentState) => currentState.houseKey,
        nextText: 22
      }
    ]
  },
  {
    id: 20,
    text: 'No one is home... What do you do now?',
    options: [
      {
        text: 'Knock on neighbours door.',        
        nextText: 21
      },
      {
        text: 'Look around for a spare key.',
        requiredState: (currentState) => currentState.spareKey,
        nextText: 22
      }
    ]
  },
  {
    id: 21,
    text: 'You knock on next door and they answer, they offer you the spare key your spouse left with them and mentioned that your spouse has been worried about you.',
    options: [
      {
        text: 'Thank them for the key and go home.',
        setState: {spareKey: true},
        nextText: 20
      }
    ]
  },
  {
    id: 22,
    text: 'After letting yourself in you take a look around, and spot a small phone book by the phone, and pictures around the house.',
    options: [
      {
        text: 'Check the pictures.',        
        nextText: 23
      }
    ]
  },
  {
    id: 23,
    text: 'You pick up a family picture, after a few seconds your head starts to hurt. you feel like someone is running nails along a board inside your head and you feel dizzy and sick.',
    options: [
      {
        text: 'You need to take a seat.',        
        setState: {memoriesTriggered: true},
        nextText: 24
      },
    ]
  },
  {
    id: 24,
    text: 'After a brief sit down, you realise that some of your memories have come back, You pick up the phone book',
    options: [
      {
        text: 'You call your spouse.',
        nextText: 25
      },
      {
        text: 'Phone the police to file a report.',
        nextText: 26
      }
    ]
  },
  {
    id: 25,
    text: 'You call your spouse and they are relieved to hear from you, they ask you "what happened?".',
    options: [
      {
        text: 'You tell Your spouse everything.',
        nextText: 26
      }
    ]
  },
  {
    id: 26,
    text: 'Call the police.',
    options: [
      {
        text: 'File a report.',
        nextText: 27
      },
      {
        text: 'End Game.',
        nextText: 28
      }
    ]
  },
  {
    id: 27,
    text: 'POLICE REPORT: You were involved in a serious accident on 90th Street on the 5th of August. You suffered a major concussion and were immediately taken to the hospital. Hospital staff were unable to reach your family to let them know what had happened.',
    options: [
      {
        text: 'End Game.',
        nextText: 28
      },
    ]
  },
  {
    id: 28,
    text: 'THE END.',
    options: [
        {
          text: 'By Ben Richardson, Diwa Wardak, Jonathan Puati & Samson Solomon.',
          nextText: -1
        }
    ]
  },
]
startGame()










