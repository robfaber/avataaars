import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Avatar from 'avataaars'

const App = () => (
  <div className="App">
    <Avatar
      style={{ width: '100px', height: '100px' }}
      avatarStyle="Circle"
      topType="LongHairMiaWallace"
      accessoriesType="Prescription02"
      hairColor="BrownDark"
      facialHairType="Blank"
      clotheType="Hoodie"
      clotheColor="PastelBlue"
      eyeType="Happy"
      eyebrowType="Default"
      mouthType="Smile"
      skinColor="Light"
    />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
